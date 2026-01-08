const rootsData = [
  {
    letter: "R",
    title: "Release",
    description: "Transformation begins with release. Let go of old narratives, misaligned expectations, fear-driven decisions, and unhealed patterns.",
  },
  {
    letter: "O",
    title: "Own",
    description: "Ownership is the cornerstone of mature leadership. Take responsibility for your choices, mindset, calling, and growth.",
  },
  {
    letter: "O",
    title: "Order",
    description: "Before expansion, there must be order: priorities, habits, boundaries, and systems aligned with your vision.",
  },
  {
    letter: "T",
    title: "Thrive",
    description: "Thriving is fruitfulness rooted in stability, depth, strategic focus, and confidence grounded in identity.",
  },
  {
    letter: "S",
    title: "Step",
    description: "Step is where clarity becomes action—intentional, measured steps toward purpose-driven outcomes.",
  },
];

export default function RootsSection() {
  return (
    <section id="roots" className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 relative inline-block">
          The ROOTS Framework
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#F5A623] rounded-full"></span>
        </h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          A proven process for transformation, guiding you from release to action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rootsData.map((item, index) => (
          <div 
            key={index}
            className="group bg-white border border-gray-100 rounded-xl p-6 relative hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
          >
            {/* Background Letter */}
            <span className="absolute group-hover:opacity-90 top-0 right-2 text-8xl font-serif font-bold text-[#F5A623] opacity-10 pointer-events-none select-none">
              {item.letter}
            </span>

            <div className="relative z-10">
              <span className="text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-2 block">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}