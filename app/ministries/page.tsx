import Footer from "@/components/custom/common/footer";
import Navigation from "@/components/custom/common/navigation";
import Hero from "@/components/custom/ministries/hero";

export default function Ministries() {
  return (
    <>
      <Navigation />
      <Hero/>
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Ministries</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expanding our reach through strategic partnerships and community support.
            </p>
          </div>

          {/* Ministries Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Luketekelo Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#3FA3A3] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#3FA3A3]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#3FA3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h2 className="text-2xl font-bold font-serif mb-3">Luketekelo</h2>
              <p className="text-gray-600 mb-6">
                Connecting communities through hope and practical support. Luketekelo is dedicated to uplifting lives through sustainable development.
              </p>
              <a target="blank" href="https://www.luketekelo.org/" className="inline-flex items-center text-[#3FA3A3] font-semibold hover:underline">
                Visit Website <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Faith Family Foundation Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#F5A623] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold font-serif mb-3">Faith Family Foundation</h2>
              <p className="text-gray-600 mb-6">
                Restoring dignity and providing resources to families in need. We focus on holistic family support and education initiatives.
              </p>
              <a target="blank" href="https://faithfamilyfoundation.us/" className="inline-flex items-center text-[#F5A623] font-semibold hover:underline">
                Visit Website <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* Donation CTA Section */}
          <section className="bg-gray-50 rounded-3xl p-10 md:p-16 text-center border border-gray-100">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Support Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your support helps restore dignity, provide education, and create sustainable change in the lives of those we serve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.autobooks.co/pay/faith-family-foundation" className="bg-[#3FA3A3] hover:bg-[#2e8e8e] text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md">
                  Donate Now
                </a>
                {/* <a href="#" className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-full transition-colors">
                  Become a Partner
                </a> */}
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer/>
    </>
  );
}