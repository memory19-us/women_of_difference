const RootsFramework = () => {
  const framework = [
    {
      letter: "R",
      title: "Recognize",
      description: "Identify limiting beliefs and patterns that hold you back from reaching your full potential.",
    },
    {
      letter: "O",
      title: "Own",
      description: "Take responsibility for your thoughts, actions, and the direction of your life journey.",
    },
    {
      letter: "O",
      title: "Overcome",
      description: "Develop strategies and tools to break through barriers and overcome challenges.",
    },
    {
      letter: "T",
      title: "Transform",
      description: "Implement new empowering beliefs and behaviors that align with your true potential.",
    },
    {
      letter: "S",
      title: "Sustain",
      description: "Create lasting change through consistent practice and ongoing support systems.",
    },
  ];

  return (
    <section id="roots" className="py-24 bg-gradient-to-r from-[#3FA3A3] to-[#F5A623] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The R.O.O.T.S <span className="text-white/90">Framework</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our proven methodology for sustainable mindset transformation and personal growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {framework.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-[1.02] border border-white/20"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#F5A623]">{item.letter}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            The R.O.O.T.S Framework is not just a methodology—it's a transformative journey that 
            creates deep, lasting change from the inside out. Each step builds upon the previous, 
            creating a strong foundation for your new empowered life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RootsFramework;
