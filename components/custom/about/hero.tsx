export default function Hero() {
  return (
    <section className="relative bg-[#3FA3A3] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/teamwork.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2e8e8e] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
          Live, Lead, Heal & Build <br/> from Depth
        </h1>
        <p className="text-xl md:text-2xl text-teal-50 mb-8 max-w-2xl mx-auto">
          Where faith, identity, and discipline are rightly ordered before expansion begins.
        </p>
        <a
          href="#roots"
          className="inline-block bg-[#F5A623] hover:bg-[#d98e10] text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:-translate-y-1 shadow-md"
        >
          Discover the ROOTS Framework
        </a>
      </div>
    </section>
  );
}