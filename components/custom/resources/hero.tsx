export default function Hero() {
  return (
    <section className="h-[50vh] md:h-[70vh] pt-32 pb-20 border-b border-gray-100 relative">
     
       <div className="absolute inset-0 z-0">
        <img
          src="/images/books.jpg"
          alt="Background"
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center absolute inset-0 flex flex-col items-center justify-center h-full">
        <span className="inline-block py-1 px-3 rounded-full bg-[#3FA3A3]/10 text-[#3FA3A3] text-sm font-bold tracking-wider uppercase mb-4">
          Library
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
          Resources
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Discover books and guides to deepen your faith and strengthen your leadership journey.
        </p>
      </div>
    </section>
  );
}