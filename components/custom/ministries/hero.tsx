export default function Hero() {
  return (
    <section className="relative h-[50vh] md:h-[70vh]  py-24 md:py-32 overflow-hidden border-b border-gray-100">
      {/* Decorative abstract background circle */}

      <div className="absolute inset-0 z-0">
        <img
          src="/images/_DSC4785.jpg"
          alt="Background"
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-32">
        <span className="text-[#F5A623] font-black tracking-[0.3em] uppercase text-sm mb-4">IMPACT CONNECTION</span>
        <h1 className="text-5xl  font-black text-white mb-8 tracking-tighter">
          From Leadership to <br />
          <span className="text-[#F5A623]">Real Impact</span>
        </h1>
        <p className="text-xl  text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
          The work developed through Woman of Difference Group is actively implemented through <span className="text-white font-bold">Luketekelo Family Foundation</span> and <span className="text-white font-bold">Faith Family Foundation</span>. We are creating a living model of transformation through education, care, mentorship, and community development.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a target="blanks" href="https://app.autobooks.co/pay/memory-g-hector" className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-full transition-colors">
            Donate Now
          </a>
        </div>
      </div>

    </section>
  );
}