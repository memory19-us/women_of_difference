"use client";

import Navigation from "@/components/custom/common/navigation";
import Footer from "@/components/custom/common/footer";
import { ReviewSection } from "@/components/custom/reviews/review-section";
import { MessageSquare, Star, Users, Calendar, BookOpen } from "lucide-react";

export default function ReviewsPage() {
    return (
        <main className="bg-white">
            <Navigation />
            
            {/* Hero Section */}
            <div className="bg-[#102457] pt-40 pb-20 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5A623]/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3FA3A3]/10 blur-[150px] rounded-full"></div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-[#F5A623] font-bold text-sm backdrop-blur-md border border-white/10 mb-8">
                        <MessageSquare className="w-4 h-4" />
                        <span>TESTIMONIALS</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Community <span className="text-[#3FA3A3]">Voices</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Every story is a milestone. Read how the Woman of Difference initiative is transforming lives through faith, leadership, and service.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
                
                {/* Statistics/Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#3FA3A3]/10 rounded-2xl flex items-center justify-center text-[#3FA3A3] mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Hundreds Impacted</h3>
                        <p className="text-slate-600">Lives touched through our programs and community initiatives.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center text-[#F5A623] mb-6">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Exceptional Feedback</h3>
                        <p className="text-slate-600">Consistently high ratings across books and coaching services.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#102457]/10 rounded-2xl flex items-center justify-center text-[#102457] mb-6">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Regular Events</h3>
                        <p className="text-slate-600">Ongoing workshops and conferences throughout the year.</p>
                    </div>
                </div>

                {/* Event Reviews */}
                <section id="event-reviews">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center text-white">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Event & Workshop Reviews</h2>
                    </div>
                    <ReviewSection 
                        itemType="event" 
                        itemId="general-events" 
                        title="What Attendees Are Saying" 
                    />
                </section>

                {/* Book Reviews */}
                <section id="book-reviews" className="pt-20 border-t border-slate-100">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-[#3FA3A3] rounded-full flex items-center justify-center text-white">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Book Feedback</h2>
                    </div>
                    <ReviewSection 
                        itemType="book" 
                        itemId="general-books" 
                        title="Reader Experiences" 
                    />
                </section>

                {/* Coaching & Services */}
                <section id="service-reviews" className="pt-20 border-t border-slate-100">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-[#102457] rounded-full flex items-center justify-center text-white">
                            <Star className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Coaching & Services</h2>
                    </div>
                    <div className="space-y-24">
                        <ReviewSection 
                            itemType="service" 
                            itemId="mindset-coaching" 
                            title="Mindset Transformation Coaching" 
                        />
                        <ReviewSection 
                            itemType="service" 
                            itemId="cleaning-services" 
                            title="Premium Cleaning Services" 
                        />
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
}
