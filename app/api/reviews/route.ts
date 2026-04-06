import { db } from "@/lib/db";
import { reviews } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';


const reviewSchema = z.object({
    itemType: z.enum(["book", "service", "event"]),
    itemId: z.string().min(1),
    userName: z.string().min(2),
    userEmail: z.string().email(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(10),
    deletePin: z.string().regex(/^\d+$/, "PIN must be numbers only").min(4).max(6).transform(Number),
});

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const itemType = searchParams.get("itemType");
    const itemId = searchParams.get("itemId");

    try {
        let query = db.select({
            id: reviews.id,
            itemType: reviews.itemType,
            itemId: reviews.itemId,
            userName: reviews.userName,
            userEmail: reviews.userEmail,
            rating: reviews.rating,
            comment: reviews.comment,
            createdAt: reviews.createdAt,
            // Explicitly exclude deletePin from GET results
        }).from(reviews);

        if (itemType && itemId) {
            // @ts-ignore
            query = db.select({
                id: reviews.id,
                itemType: reviews.itemType,
                itemId: reviews.itemId,
                userName: reviews.userName,
                userEmail: reviews.userEmail,
                rating: reviews.rating,
                comment: reviews.comment,
                createdAt: reviews.createdAt,
            }).from(reviews).where(
                and(
                    eq(reviews.itemType, itemType),
                    eq(reviews.itemId, itemId)
                )
            );
        }

        const results = await query;
        return NextResponse.json(results);
    } catch (error: any) {
        console.error("[REVIEWS_GET_ERROR] Failed to fetch reviews:", error);
        return NextResponse.json({ 
            error: "Failed to fetch reviews", 
            details: error?.message || "Unknown error",
            stack: process.env.NODE_ENV === "development" ? error?.stack : undefined
        }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = reviewSchema.parse(body);

        const newReview = await db.insert(reviews).values({
            ...validatedData,
        }).returning();

        if (!newReview || newReview.length === 0) {
            console.error("[REVIEWS_POST_ERROR] Database returned no results after insert.");
            throw new Error("Database failed to record the review. Please check your Supabase logs.");
        }

        // Remove deletePin from response
        const { deletePin, ...safeResponse } = newReview[0];
        return NextResponse.json(safeResponse);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            console.warn("[REVIEWS_POST_VALIDATION_ERROR]", error.issues);
            return NextResponse.json({ error: error.issues }, { status: 400 });
        }
        console.error("[REVIEWS_POST_ERROR] Failed to post review:", error);
        return NextResponse.json({ 
            error: "Failed to post review", 
            details: error?.message || "Unknown error",
            stack: process.env.NODE_ENV === "development" ? error?.stack : undefined
        }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id, deletePin } = await request.json();

        if (!id || !deletePin) {
            return NextResponse.json({ error: "Missing ID or PIN" }, { status: 400 });
        }

        // Verify the review exists and PIN matches
        const existingReview = await db.select().from(reviews).where(eq(reviews.id, id)).limit(1);

        if (existingReview.length === 0) {
            return NextResponse.json({ error: "Review not found" }, { status: 404 });
        }

        if (existingReview[0].deletePin !== Number(deletePin)) {
            return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
        }

        await db.delete(reviews).where(eq(reviews.id, id));

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("[REVIEWS_DELETE_ERROR] Failed to delete review:", error);
        return NextResponse.json({ 
            error: "Failed to delete review", 
            details: error?.message || "Unknown error"
        }, { status: 500 });
    }
}
