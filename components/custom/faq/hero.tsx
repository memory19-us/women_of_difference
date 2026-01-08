export default function Hero() {
  return (
    <section className="relative bg-[#3FA3A3] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
          Support Center
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
          Frequently Asked <br/> Questions
        </h1>
        <p className="text-xl text-teal-50 max-w-2xl mx-auto">
          Have questions about Grace, our mission, the ROOTS framework, or how to get involved? We've got you covered.
        </p>
      </div>
    </section>
  );
}