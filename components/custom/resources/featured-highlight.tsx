export default function FeaturedHighlight() {
  return (
    <section className="bg-[#F3F6F6] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">New Release</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
          The ROOTS Framework Guide
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg">
          Get the free digital PDF summary of the framework. Perfect for quick reference or sharing with your small group.
        </p>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="bg-[#3FA3A3] hover:bg-[#2e8e8e] text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-md"
          >
            Download Free
          </a>
          <a 
            href="#" 
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-full transition-colors"
          >
            Preview
          </a>
        </div>
      </div>
      
      {/* Visual Icon/Graphic for the download */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#F5A623]/20 relative">
            <svg className="w-20 h-20 text-[#3FA3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
      </div>
    </section>
  );
}