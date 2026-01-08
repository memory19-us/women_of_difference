export default function Hero() {
  return (
    <section className="relative bg-[#3FA3A3] text-white py-24 md:py-32 overflow-hidden">
         <div className="absolute inset-0 z-0">
        <img
          src="/images/contact.jpg"
          alt="Background"
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
          Let's Start a <br/> Conversation
        </h1>
        <p className="text-xl text-teal-50 max-w-2xl mx-auto">
          We are here to help you grow, lead, and heal. Reach out to us for inquiries, bookings, or just to connect.
        </p>
      </div>
    </section>
  );
}