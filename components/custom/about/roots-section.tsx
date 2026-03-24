const rootedData = [
  {
    letter: "R",
    title: "Restoration",
    description: "Healing identity and addressing internal barriers to create a clean slate for growth.",
  },
  {
    letter: "O",
    title: "Ownership",
    description: "Taking full responsibility for your growth, decisions, and leadership journey.",
  },
  {
    letter: "O",
    title: "Order",
    description: "Establishing discipline, structure, and sustainable systems for consistent progress.",
  },
  {
    letter: "T",
    title: "Transformation",
    description: "Developing character, mindset, and leadership capacity through intentional change.",
  },
  {
    letter: "E",
    title: "Empowerment",
    description: "Unlocking purpose, confidence, and responsible influence in your spheres of impact.",
  },
  {
    letter: "D",
    title: "Deployment",
    description: "Leading and executing with excellence, integrity, and measurable impact in the world.",
  },
];

export default function RootsSection() {
  return (
    <section id="roots" className="space-y-12 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 relative inline-block uppercase tracking-tighter">
          The R.O.O.T.E.D Framework
          <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#3FA3A3] rounded-full"></span>
        </h2>
        <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Our work is built on a structured model that produces lasting results through six key stages of transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rootedData.map((item, index) => (
          <div 
            key={index}
            className="group bg-white border border-slate-100 rounded-3xl p-8 relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-sm"
          >
            {/* Background Letter */}
            <span className="absolute top-[-20px] right-[-10px] text-[10rem] font-black text-[#F5A623] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none">
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 bg-[#F5A623] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-[#F5A623]/20">
                  {item.letter}
                </span>
                <span className="text-[#3FA3A3] font-bold text-xs tracking-[0.2em] uppercase">
                  Stage 0{index + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-12 bg-[#102457] rounded-[3rem] text-white relative overflow-hidden">

        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3FA3A3]/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h4 className="text-2xl font-bold mb-6">Who This Is For</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-[#F5A623] font-bold">✓</span>
              <p className="text-white/80">Emerging and established leaders</p>
            </div>
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-[#F5A623] font-bold">✓</span>
              <p className="text-white/80">Organizations and institutions</p>
            </div>
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-[#F5A623] font-bold">✓</span>
              <p className="text-white/80">Youth and leadership programs</p>
            </div>
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-[#F5A623] font-bold">✓</span>
              <p className="text-white/80">Faith-based initiatives & individuals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}