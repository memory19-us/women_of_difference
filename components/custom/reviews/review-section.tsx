"use client";

import { useState, useEffect } from "react";
import { ReviewForm } from "./review-form";
import { ReviewList } from "./review-list";

interface ReviewSectionProps {
    itemType: "book" | "service";
    itemId: string;
    title?: string;
}

export function ReviewSection({ itemType, itemId, title = "Reviews" }: ReviewSectionProps) {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/reviews?itemType=${itemType}&itemId=${itemId}`);
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [itemType, itemId]);

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h3 className="text-3xl font-bold font-serif text-gray-900">{title}</h3>
                    <p className="text-gray-500 mt-2">What others are saying about this {itemType}.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#F5A623]">
                        {reviews.length > 0
                            ? (reviews.reduce((acc, curr) => acc + (curr as any).rating, 0) / reviews.length).toFixed(1)
                            : "0.0"}
                    </span>
                    <div className="text-sm text-gray-400">
                        / 5.0 ({reviews.length} reviews)
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 order-2 lg:order-1">
                    <ReviewList reviews={reviews} isLoading={isLoading} />
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="sticky top-8">
                        <h4 className="text-xl font-bold mb-4">Post a Review</h4>
                        <ReviewForm itemType={itemType} itemId={itemId} onSuccess={fetchReviews} />
                    </div>
                </div>
            </div>
        </div>
    );
}
