const RootsFramework = () => {
  const framework = [
    {
      letter: "R",
      title: "Restoration",
      description: "Healing identity and rebuilding from within.",
    },
    {
      letter: "O",
      title: "Ownership",
      description: "Taking responsibility for growth, decisions, and leadership.",
    },
    {
      letter: "O",
      title: "Order",
      description: "Establishing structure, discipline, and sustainable systems.",
    },
    {
      letter: "T",
      title: "Transformation",
      description: "Developing character, maturity, and leadership capacity.",
    },
    {
      letter: "E",
      title: "Empowerment",
      description: "Activating purpose, confidence, and responsible influence.",
    },
    {
      letter: "D",
      title: "Deployment",
      description: "Executing with excellence, stewardship, and lasting impact.",
    },
  ];

  return (
    <section id="roots" className="py-24 bg-gradient-to-r from-[#3FA3A3] to-[#F5A623] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">


        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-white uppercase mb-4">THE ROOTED TRANSFORMATION FRAMEWORK</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            A Leadership Architecture for <br />
            <span className="text-white/80 italic">Deep Transformation</span>
          </h3>
          <div className="space-y-6 text-xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto">
            <p>
              The Rooted transformation Framework is not just a program. It is a leadership architecture designed to guide transformation across individuals, institutions, and communities.
            </p>
            {/* <p className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
              It addresses what many systems overlook: <span className="text-white font-black underline decoration-[#F5A623] underline-offset-8 decoration-2">identity, structure, character, and disciplined execution.</span>
              <br /><br />
              Because sustainable impact is not built on motivation alone. <span className="italic font-bold">It is built on formation.</span>
            </p> */}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-16 justify-center">
          <div className="relative group lg:w-1/3">
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img
              src="/images/rooted.png"
              alt="Rooted transformation Framework Architecture"
              className="relative w-full max-w-md h-auto object-contain animate-float drop-shadow-2xl"
            />
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {framework.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-[1.02] border border-white/20 group/card"
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/card:bg-[#F5A623] transition-colors">
                    <span className="text-2xl font-black text-[#F5A623] group-hover/card:text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-slate-900/40 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 shadow-3xl text-center space-y-10">
            <div className="space-y-4">
              <h4 className="text-sm font-black tracking-[0.4em] text-[#F5A623] uppercase">WHY THIS MATTERS</h4>
              <p className="text-3xl md:text-4xl font-black text-white leading-tight">
                Sustainable impact is built on <br />
                <span className="text-[#3FA3A3]">Foundation & Structure</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <p className="text-white/70 text-lg leading-relaxed">
                Most people and institutions do not fail because they lack vision. They fail because they lack the internal foundation and structure to sustain growth.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                The Rooted transformation Framework builds that foundation by guiding people and organizations from the inside out, moving beyond inspiration into practical, measurable, lasting change.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[#F5A623] font-black tracking-widest text-sm mb-6">IDEAL FOR</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Emerging Leaders",
                  "Organizations",
                  "Faith-based Initiatives",
                  "Youth Development",
                  "Impact Driven Individuals"
                ].map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-white/10 rounded-full text-white text-sm font-bold border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootsFramework;
