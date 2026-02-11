"use client";

import { Star } from "lucide-react";

interface Review {
    id: number;
    userName: string;
    rating: number;
    comment: string;
    createdAt: string;
}

interface ReviewListProps {
    reviews: Review[];
    isLoading: boolean;
}

export function ReviewList({ reviews, isLoading }: ReviewListProps) {
    if (isLoading) {
        return (
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-gray-50 animate-pulse rounded-xl border border-gray-100" />
                ))}
            </div>
        );
    }

    if (reviews.length === 0) {
        return (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
                >
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h4 className="font-bold text-gray-900">{review.userName}</h4>
                            <div className="flex gap-0.5 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-4 h-4 ${star <= review.rating
                                                ? "fill-[#F5A623] text-[#F5A623]"
                                                : "text-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <span className="text-xs text-gray-400">
                            {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">
                        &quot;{review.comment}&quot;
                    </p>
                </div>
            ))}
        </div>
    );
}
