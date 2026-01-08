
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const books = [
  {
    title: "Too Soon to Quit (Paperback)",
    author: "Memory Grace Hector",
    description:
      "A guide to resilience when you feel like giving up. Rediscover the strength to continue your calling.",
    link: "https://checkout.page/s/PYHWJg9IxhePy",
    image: "/images/book1.jfif",
    price: "10",

    longContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p className="font-semibold">
          Too Soon to Quit is a disciplined call to endurance.
        </p>

        <p>
          Drawing from lived experience, Memory Grace Hector confronts a hard truth:
          the moment that feels like denial is often preparation.
        </p>

        <p className="italic">
          This is not motivation.<br />
          It is formation.
        </p>

        <p>
          Written for leaders, youth, young women, and individuals who value depth over
          applause and foundations over speed, this work challenges readers to remain
          rooted when quitting feels justified.
        </p>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            This Book Calls You To:
          </h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>Stay when leaving feels logical</li>
            <li>Build order before expecting increase</li>
            <li>Choose discipline over impulse</li>
            <li>Trust God’s work beneath the surface</li>
          </ul>
        </div>

        <p className="font-medium">
          Sometimes the greatest mistake is leaving too soon.
        </p>

      </div>
    ),
  },

  {
    title: "On the Journey of Faith",
    author: "Memory Grace Hector",
    description:
      "Steps to deepen your walk with God and navigate spiritual seasons with confidence and grace.",
    link: "https://checkout.page/s/R6LGxuRbjeBor",
    image: "/images/book.jpg",

    longContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p className="font-semibold">
          On the Journey of Faith is more than a story.
        </p>

        <p>
          It is a steady, uncompromising reflection on what it truly means to walk with God
          when certainty is absent and obedience carries a cost.
        </p>

        <p className="italic">
          This is not faith as performance.<br />
          It is faith as discipline formed through doubt, loss, surrender, and restoration.
        </p>

        <p>
          Drawing from the lived journey of <strong>Memory Grace Hector</strong>, the book traces
          seasons where God called her to serve orphans and vulnerable children — not from
          visibility, but from hidden obedience.
        </p>

        <p>
          The narrative honors the old paths: faith built quietly, character forged in hardship,
          and purpose revealed through surrender rather than spectacle.
        </p>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            What This Book Delivers
          </h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>Clarity through trial</strong> — Faith refined under pressure, not theory.
            </li>
            <li>
              <strong>Order before increase</strong> — Spirit, mind, and character before expansion.
            </li>
            <li>
              <strong>Ownership over emotion</strong> — Healing as responsibility, not entitlement.
            </li>
            <li>
              <strong>Enduring hope</strong> — God’s faithfulness revealed through ordinary obedience.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Who This Book Serves
          </h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>Leaders seeking alignment over applause</li>
            <li>Individuals questioning whether life will ever make sense</li>
            <li>Readers weary of surface-level inspiration</li>
            <li>Builders committed to depth, legacy, and integrity</li>
          </ul>
        </div>

        <p className="font-medium">
          This work stands on proven ground — rooted, sober-minded, and forward-looking.
        </p>

        <p className="font-semibold text-gray-900">
          Faith, when stewarded well, outlasts the storm and leads the way.
        </p>

      </div>
    ),
  },

  {
    title: "On the Journey of Faith – Hardcover",
    author: "Memory Grace Hector",
    description:
      "A timeless hardcover edition for readers committed to faith, depth, and legacy.",
    link: "https://checkout.page/s/v4CzaEhe2iueW",
    image: "/images/book.jpg",

    longContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p className="font-semibold">
          This hardcover edition preserves the weight and intention of the message.
        </p>

        <p>
          On the Journey of Faith remains a sober, forward-looking reflection on obedience,
          endurance, and faith formed away from public applause.
        </p>

        <p className="italic">
          Faith here is not emotional escape.<br />
          It is disciplined alignment.
        </p>

        <p>
          Designed for readers who value permanence, legacy, and reflection, this edition
          serves as a companion for long seasons of growth and examination.
        </p>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Ideal For:
          </h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>Leaders stewarding responsibility</li>
            <li>Builders shaping long-term vision</li>
            <li>Readers returning to foundational truths</li>
            <li>Homes, libraries, and mentorship spaces</li>
          </ul>
        </div>

        <p className="font-semibold text-gray-900">
          Faith that is ordered lasts. Faith that is stewarded leads.
        </p>

      </div>
    ),
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
                               <div className="w-full mt-4">
  {book.longContent}
</div>




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