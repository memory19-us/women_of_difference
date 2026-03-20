import { db } from "@/lib/db";
import { reviews } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";

const reviewSchema = z.object({
    itemType: z.enum(["book", "service"]),
    itemId: z.string().min(1),
    userName: z.string().min(2),
    userEmail: z.string().email(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(10),
    deletePin: z.string().min(4).max(6),
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
    } catch (error) {
        console.error("Failed to fetch reviews:", error);
        return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = reviewSchema.parse(body);

        const newReview = await db.insert(reviews).values({
            ...validatedData,
            createdAt: new Date(),
        }).returning();

        // Remove deletePin from response
        const { deletePin, ...safeResponse } = newReview[0];
        return NextResponse.json(safeResponse);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 });
        }
        console.error("Failed to post review:", error);
        return NextResponse.json({ error: "Failed to post review" }, { status: 500 });
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

        if (existingReview[0].deletePin !== deletePin) {
            return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
        }

        await db.delete(reviews).where(eq(reviews.id, id));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to delete review:", error);
        return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
    }
}
