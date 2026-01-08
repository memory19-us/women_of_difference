import Footer from "@/components/custom/common/footer";
import Navigation from "@/components/custom/common/navigation";
import Hero from "@/components/custom/resources/hero";
import ResourceGrid from "@/components/custom/resources/resource-grid";

export default function Resources() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      <main className="max-w-6xl mx-auto px-4 space-y-16 py-20">
        
        {/* Intro Text */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Tools for Transformation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our curated resources designed to support faith, leadership, and personal growth.
            These include books, teachings, and practical guides aligned with the ROOTS Framework.
          </p>
        </section>

        {/* Featured Highlight (e.g., a special item or announcement) */}
        {/* <FeaturedHighlight /> */}

        {/* Books Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-serif text-gray-900">Books</h2>
            <a href="#" className="text-[#3FA3A3] font-semibold hover:underline">View All</a>
          </div>
          <ResourceGrid />
        </section>
        
      </main>
      <Footer/>
    </>
  );
}