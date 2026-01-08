import Footer from "@/components/custom/common/footer";
import Navigation from "@/components/custom/common/navigation";
import Hero from "@/components/custom/ministries/hero";

export default function Ministries() {
  return (
    <>
      <Navigation />
      <Hero />

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 space-y-20">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Ministries
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We steward purpose-driven ministries that restore dignity, strengthen families,
              and advance faith-centered transformation through compassion, service, and partnership.
            </p>
          </div>

          {/* Ministries Grid */}
          <section className="grid md:grid-cols-2 gap-8">

            {/* Luketekelo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#3FA3A3]">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Luketekelo Family Foundation
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Luketekelo exists to restore hope and dignity to vulnerable children and families
                in Zambia through education, nutrition, and sustainable community development initiatives.
              </p>
              <a
              rel="noopener"
                href="https://www.luketekelo.org/"
                target="_blank"
                className="text-[#3FA3A3] font-semibold hover:underline"
              >
                Visit Luketekelo →
              </a>
            </div>

            {/* Faith Family Foundation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#F5A623]">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Faith Family Foundation
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A faith-rooted 501(c)(3) nonprofit mobilizing resources, mission teams,
                and partners to support sustainable projects led by Luketekelo Family Foundation in Zambia.
                <br /><br />
                <span className="font-semibold">
                  Tax Exemption Number: 993027534
                </span>
              </p>
              <a
               rel="noopener"
                href="https://faithfamilyfoundation.us/"
                target="_blank"
                className="text-[#F5A623] font-semibold hover:underline"
              >
                Visit Faith Family Foundation →
              </a>
            </div>
          </section>

          {/* Ministry Purpose */}
          <section className="bg-gray-50 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Connect • Partner • Give
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Our ministries are sustained through partnership, generosity, and shared vision.
              Every contribution directly supports faith-aligned community impact.
            </p>

            <a
              href="https://app.autobooks.co/pay/faith-family-foundation"
              className="inline-block bg-[#3FA3A3] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#2e8e8e]"
            >
              Donate to Our Mission
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
