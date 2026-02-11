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
});

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const itemType = searchParams.get("itemType");
    const itemId = searchParams.get("itemId");

    try {
        let query = db.select().from(reviews);

        if (itemType && itemId) {
            // @ts-ignore - Drizzle types can be tricky with dynamic queries sometimes
            query = db.select().from(reviews).where(
                and(
                    eq(reviews.itemType, itemType),
                    eq(reviews.itemId, itemId)
                )
            );
        } else if (itemType) {
            // @ts-ignore
            query = db.select().from(reviews).where(eq(reviews.itemType, itemType));
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

        return NextResponse.json(newReview[0]);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 });
        }
        console.error("Failed to post review:", error);
        return NextResponse.json({ error: "Failed to post review" }, { status: 500 });
    }
}
