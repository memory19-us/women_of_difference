"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Star, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const reviewSchema = z.object({
    userName: z.string().min(2, "Name must be at least 2 characters"),
    userEmail: z.string().email("Invalid email address"),
    rating: z.number().min(1, "Please select a rating").max(5),
    comment: z.string().min(10, "Comment must be at least 10 characters"),
    deletePin: z.string()
        .min(4, "PIN must be at least 4 digits")
        .max(6, "PIN must be max 6 digits")
        .regex(/^\d+$/, "PIN must contain only numbers"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
    itemType: "book" | "service" | "event";
    itemId: string;
    onSuccess?: () => void;
}

export function ReviewForm({ itemType, itemId, onSuccess }: ReviewFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showPin, setShowPin] = useState(false);

    const form = useForm<ReviewFormValues>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            userName: "",
            userEmail: "",
            rating: 0,
            comment: "",
            deletePin: "",
        },
    });

    async function onSubmit(values: ReviewFormValues) {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    itemType,
                    itemId,
                }),
            });

            if (!response.ok) throw new Error("Failed to submit review");

            toast.success("Review submitted successfully!");
            form.reset();
            onSuccess?.();
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="userName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="userEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="your@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="deletePin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>PIN (To delete later)</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input 
                                            type={showPin ? "text" : "password"} 
                                            placeholder="4-6 digits" 
                                            maxLength={6}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="pr-10"
                                            {...field} 
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPin(!showPin)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rating</FormLabel>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className="focus:outline-none transition-transform hover:scale-110"
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        onClick={() => field.onChange(star)}
                                    >
                                        <Star
                                            className={`w-8 h-8 ${star <= (hoveredRating || field.value)
                                                ? "fill-[#F5A623] text-[#F5A623]"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Review</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Share your experience..."
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full bg-[#3FA3A3] hover:bg-[#2D7A7A] text-white py-6"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Post Review"}
                </Button>
            </form>
        </Form>
    );
}
