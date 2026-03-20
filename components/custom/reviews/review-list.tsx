"use client";

import { Star, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

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
    onDeleteSuccess?: () => void;
}

export function ReviewList({ reviews, isLoading, onDeleteSuccess }: ReviewListProps) {
    const [isDeleting, setIsDeleting] = useState<number | null>(null);

    const handleDelete = async (id: number) => {
        const pin = window.prompt("To delete this review, please enter the secret PIN you created when submitting it:");
        
        if (pin === null) return; // User cancelled
        
        if (!pin || pin.length < 4) {
            toast.error("Invalid PIN format.");
            return;
        }

        setIsDeleting(id);
        try {
            const response = await fetch("/api/reviews", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, deletePin: pin }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to delete review");
            }

            toast.success("Review deleted successfully!");
            onDeleteSuccess?.();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Invalid PIN or error occurred.");
        } finally {
            setIsDeleting(null);
        }
    };

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
                    className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md relative"
                >
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-gray-900">{review.userName}</h4>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600 hover:bg-red-50"
                                    onClick={() => handleDelete(review.id)}
                                    disabled={isDeleting === review.id}
                                >
                                    <Trash2 className="w-4 h-4 mr-1" />
                                    {isDeleting === review.id ? "Deleting..." : "Delete"}
                                </Button>
                            </div>
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
                    </div>
                    <p className="text-gray-600 italic leading-relaxed pr-10">
                        &quot;{review.comment}&quot;
                    </p>
                    <span className="absolute bottom-4 right-6 text-[10px] text-gray-400">
                        {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                </div>
            ))}
        </div>
    );
}
