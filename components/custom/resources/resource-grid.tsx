import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const books = [
    {
        title: "Too Soon to Quit (Paperback)",
        author: "Memory Grace Hector",
        description: "A guide to resilience when you feel like giving up. Rediscover the strength to continue your calling.",
        link: "https://checkout.page/s/PYHWJg9IxhePy",
        // Placeholder image simulating a book cover
        image: "/images/book1.jfif",
        longDesc: "Too Soon to Quit is a disciplined call to endurance. Drawing from lived experience and persistence, Memory Grace Hector reveals a hard truth: the moment that feels like denial is often preparation. This is not motivation. It is formation. For, Leaders, youths, young women and any individuals who value depth over applause, foundations over speed, and obedience over comfort. This book calls you to: Stay when quitting feels justified Build order before expecting increase Choose discipline over impulse Trust God’s work beneath the surface Sometimes the greatest mistake is leaving too soon.",
        price: "10",
    },
    {
        title: "On the Journey of Faith",
        author: "Memory Grace Hector",
        description: "Steps to deepen your walk with God and navigate spiritual seasons with confidence and grace.",
        link: "https://checkout.page/s/R6LGxuRbjeBor",
        // Placeholder image simulating a book cover
        image: "/images/book.jpg",
        longDesc: "On the Journey of Faith is more than a story. It is a steady, uncompromising reflection on what it means to walk with God when certainty is absent. This is not faith as performance. It is a disciplined passage through doubt, loss, obedience, and restoration—written by Memory Grace Hector. The work honors old paths: faith built quietly, character forged in hardship, and purpose revealed through surrender rather than spectacle. What This Book Delivers Clarity through trial — Faith refined under pressure, not theory. Order before increase — Foundations first: spirit, mind, character. Ownership over emotion — Healing as responsibility, not entitlement. Enduring hope — God’s faithfulness revealed in ordinary obedience. Who It Serves Leaders seeking alignment over applause Individuals questioning whether their life will ever make sense Readers weary of surface-level inspiration Builders committed to depth, legacy, and integrity This work stands on proven ground—rooted, sober-minded, and forward-looking. It invites readers to slow down, examine their footing, and continue the journey with conviction. Faith, when stewarded well, outlasts the storm—and leads the way."
    },
    {
        title: "On the Journey of Faith - Hard Cover",
        author: "Memory Grace Hector",
        description: "Steps to deepen your walk with God and navigate spiritual seasons with confidence and grace.",
        link: "https://checkout.page/s/v4CzaEhe2iueW",
        // Placeholder image simulating a book cover
        image: "/images/book.jpg",
        longDesc: "On the Journey of Faith is more than a story. It is a steady, uncompromising reflection on what it means to walk with God when certainty is absent. This is not faith as performance. It is a disciplined passage through doubt, loss, obedience, and restoration—written by Memory Grace Hector. The work honors old paths: faith built quietly, character forged in hardship, and purpose revealed through surrender rather than spectacle. What This Book Delivers Clarity through trial — Faith refined under pressure, not theory. Order before increase — Foundations first: spirit, mind, character. Ownership over emotion — Healing as responsibility, not entitlement. Enduring hope — God’s faithfulness revealed in ordinary obedience. Who It Serves Leaders seeking alignment over applause Individuals questioning whether their life will ever make sense Readers weary of surface-level inspiration Builders committed to depth, legacy, and integrity This work stands on proven ground—rooted, sober-minded, and forward-looking. It invites readers to slow down, examine their footing, and continue the journey with conviction. Faith, when stewarded well, outlasts the storm—and leads the way."
    },

];

export default function ResourceGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, idx) => (
                <div
                    key={idx}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
                >
                    {/* Book Cover Image Area */}
                    <div className="relative h-64 md:h-72 bg-gray-100 overflow-hidden flex items-center justify-center p-8">
                        <div className="relative w-32 md:w-40 aspect-[2/3] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                            {/* Using a div wrapper to simulate a book aspect ratio */}
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-wider">
                                Book
                            </span>
                            <h3 className="text-xl font-bold font-serif text-gray-900 mt-1 group-hover:text-[#3FA3A3] transition-colors">
                                {book.title}
                            </h3>
                            <p className="text-sm text-gray-500 italic mb-3">by {book.author}</p>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                            {book.description}
                        </p>

                        <a
                            href={book.link}
                            className="inline-flex items-center justify-center w-full py-3 px-4 border border-[#3FA3A3] text-[#3FA3A3] font-semibold rounded-lg hover:bg-[#3FA3A3] hover:text-white transition-colors"
                        >
                            Buy
                        </a>

                        <Dialog>
                            <DialogTrigger>
                                 <a
                            className="inline-flex items-center justify-center py-3 mt-4 px-4 bg-[#3FA3A3] w-full h-12 hover:bg-[#F5A623] font-semibold rounded-lg  hover:text-white transition-colors text-center"
                        >
                           View Details
                        </a>
                                </DialogTrigger>
                            <DialogContent className="flex flex-col items-center">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold">{book.title}</DialogTitle>

                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-52 h-52 object-cover rounded-sm"
                                    />
                                </DialogHeader>
                                <p className="text-xl font-semibold ">Book Description</p>
                                <p>{book.longDesc}</p>



                                <a
                                    href={book.link}
                                    className="inline-flex items-center justify-center w-full py-3 px-4 border border-[#3FA3A3] text-[#3FA3A3] font-semibold rounded-lg hover:bg-[#3FA3A3] hover:text-white transition-colors mt-10"
                                >
                                    Buy
                                </a>

                            </DialogContent>
                            <DialogFooter>

                            </DialogFooter>
                        </Dialog>
                    </div>
                </div>
            ))}
        </div>
    );
}