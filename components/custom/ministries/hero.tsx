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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
   
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6">
          Expanding Our <span className="text-[#F5A623]">Reach</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Through Luketekelo and Faith Family Foundation, we are creating sustainable change and restoring hope in communities around the world.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
         
          <a target="blanks" href="https://app.autobooks.co/pay/faith-family-foundation" className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-full transition-colors">
            Donate Now
          </a>
        </div>
      </div>

    </section>
  );
}