export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#3FA3A3]/95 via-[#3FA3A3]/80 to-[#F5A623] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-[#3FA3A3]/10 text-white text-sm font-bold tracking-wider uppercase mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-6">
              Transform Your <br/>
              <span className="text-[#F5A623]">Life & Space</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              From mindset coaching to creating pristine environments, we offer holistic services designed to help you thrive in every area of life.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#3FA3A3] hover:bg-[#2e8e8e] text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md"
            >
              Get Started Today
            </a>
          </div>

          {/* Visual / Image Side */}
          <div className="flex-1 relative">
            {/* Decorative Amber Blobs behind image */}
            <div className="absolute inset-0 bg-[#F5A623]/10 rounded-full blur-3xl transform scale-75 -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/coaching.jpg" 
                alt="Services Overview" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg border-l-4 border-[#F5A623]">
                <p className="font-bold text-gray-900 text-sm">Start Your Journey</p>
                <p className="text-xs text-gray-600">Book a discovery call today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}