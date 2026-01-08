"use client"
import Accordion from "@/components/custom/common/accordion";
import Footer from "@/components/custom/common/footer";
import Navigation from "@/components/custom/common/navigation";
import Hero from "@/components/custom/faq/hero";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "Who is Grace?",
    answer:
      "Grace is first a child of God, a wife and a mother. Leadership came later, not by ambition, but by life. Her journey has included seasons of waiting, loss, rebuilding, and deep dependence on God. Through it all, she learned that transformation does not begin with performance, visibility, or success it begins within. Her life and leadership are rooted in the Word of God, guided by integrity, and anchored in stewardship. She leads from experience, not theory."
  },
  {
    question: "What is Woman of Difference Group?",
    answer:
      "Woman of Difference Group was born from a simple realization: many people want change, but few are taught how to build strong foundations. This platform exists to help individuals especially women heal what is broken, align what is out of order, and live and lead from a place of depth. It is not about hype or quick motivation. It is about faith, structure, discipline, and sustainable growth."
  },
  {
    question: "What are the foundations connected to Grace’s work?",
    answer:
      "The Foundations are faith made practical. Through Luketekelo Family Foundation in Zambia and Faith Family Foundation in the United States, belief moves into action. Children are educated, families are supported, and communities are strengthened. This is where prayer meets responsibility and compassion is guided by structure."
  },
  {
    question: "How do Grace, Woman of Difference Group, and the Foundations work together?",
    answer:
      "Grace carries the vision. Woman of Difference Group equips people mindset, faith, and leadership. The Foundations apply that formation in real communities with real needs. Together, they represent a complete model: belief, formation, and action working in harmony."
  },
  {
    question: "What is the ROOTS Framework?",
    answer:
      "The ROOTS Framework emerged from lived experience. Grace discovered that burnout, confusion, and inconsistency are rarely random they are rooted. ROOTS focuses on faith, identity, responsibility, and order, teaching individuals and organizations to build depth before growth and alignment before expansion. It is about lasting transformation, not surface change."
  },
  {
    question: "Is this work faith-based?",
    answer:
      "Yes unapologetically. Faith here is not an accessory or a slogan. It is treated as infrastructure. Scripture guides mindset, leadership, decision-making, and service. Faith is lived, ordered, and practiced daily."
  },
  {
    question: "Who is this work for?",
    answer:
      "This work is for women, leaders, founders, families, ministries, and partners who are tired of shallow solutions. It is for those who value discipline over drama, depth over speed, and long-term impact over applause."
  },
  {
    question: "Does Grace speak or lead sessions?",
    answer:
      "Yes. Through Woman of Difference Group, Grace speaks at churches, conferences, leadership gatherings, and retreats. Her teaching is practical, faith-anchored, and deeply human designed to equip people for real life, not just inspiration."
  },
  {
    question: "How can I support or partner with the Foundations?",
    answer:
      "Partnerships begin with prayer and extend into action. Some sponsor children. Others give, volunteer, or collaborate strategically. Every contribution especially toward the work in Chibombo, Zambia helps restore dignity, provide education, and create sustainable change."
  },
  {
    question: "What can I expect from engaging with this work?",
    answer:
      "Many describe a quiet but powerful shift: clearer thinking, deeper faith, emotional healing, disciplined leadership, and renewed purpose. This is not rushed transformation it is rooted growth, built to last."
  },
  {
    question: "How do I get started?",
    answer:
      "Begin where you are. Explore the resources on this site. Engage with Woman of Difference Group. Learn more about partnering with the Foundations. Each step is an invitation to build on solid ground."
  },
  {
    question: "What is Grace’s typical quiet time like?",
    answer:
      "Grace’s quiet time is simple and disciplined. It is not driven by emotion or urgency, but by consistency. Scripture, prayer, reflection, and stillness form the core. Some days are profound. Other days are quiet. But the posture remains the same showing up, listening, and allowing God to order the heart."
  },
  {
    question: "Can someone truly experience wholeness?",
    answer:
      "Yes but wholeness is a process, not a moment. It comes through truth, healing, responsibility, and surrender. Grace’s own journey testifies that broken places do not disqualify you; they often become the very ground where God does His deepest work."
  },
  {
    question: "How can I really hear God speak to me personally?",
    answer:
      "God often speaks more quietly than we expect through Scripture, conviction, peace, or restraint. Hearing God clearly requires slowing down, ordering one’s inner life, and learning to discern His voice over the noise of fear and emotion."
  },
  {
    question: "Can someone from a poor background with no connections succeed in life?",
    answer:
      "Yes. Grace’s life is proof that background does not determine destiny. Faith, discipline, stewardship, and obedience open doors that connections never could. Purpose is not inherited; it is discovered and stewarded."
  },
  {
    question: "How do you differentiate between discernment and feelings?",
    answer:
      "Feelings are loud and urgent. Discernment is steady and anchored in truth. Discernment aligns with Scripture, produces peace, and withstands time, while emotions often shift with circumstance."
  },
  {
    question: "How do you balance ministry, motherhood, and marriage?",
    answer:
      "Grace does not strive for balance; she trusts God for order. She learned that the same God who orders creation is capable of ordering life. This season requires clarity, sacrifice, and alignment with her husband. She protects her family, says no often, and moves only in seasons God has confirmed. This is not perfection it is a daily, prayerful walk of alignment."
  },
  {
    question: "Do you believe God still speaks through signs and wonders today?",
    answer:
      "Yes, but with emphasis on maturity. God may still use signs and dreams, but He prioritizes relationship, obedience, and discernment. The goal is not spectacle it is transformation."
  },
  {
    question: "Why do I struggle to read the Bible?",
    answer:
      "You are not alone. Many believers find it easier to read about the Bible before learning to sit with Scripture itself. This is not failure it is an invitation into a deeper, more personal relationship with God."
  },
  {
    question: "Is something wrong with my faith?",
    answer:
      "No. The desire to hear God more clearly is evidence of spiritual hunger, not weakness. God meets you where you are and draws you forward patiently."
  },
  {
    question: "How can I begin to hear God through the Word?",
    answer:
      "Start with posture, not pressure. Pray first. Read small portions. Ask, “Lord, what are You saying to me?” Scripture is relational before it is instructional."
  },
  {
    question: "What if I don’t feel anything when I read?",
    answer:
      "Faith is not driven by emotion. God works through His Word whether feelings follow or not. Consistency builds clarity over time."
  },
  {
    question: "Can I still use devotionals and Bible teachers?",
    answer:
      "Yes as support, not substitutes. Let them guide you back to Scripture, where God speaks most clearly."
  },
  {
    question: "How do I stay consistent?",
    answer:
      "Release performance. Choose a simple rhythm and show up regularly. Discipline grows into delight when pressure is removed."
  }
];

export default function FAQ() {

    const router = useRouter()
  return (
    <>
      <Navigation />
      <Hero />
      <main className="py-24 max-w-5xl mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold mb-6">
           Frequently Asked Questions
        </h1>

        {faqs.map((faq, idx) => (
          <Accordion
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}

       <div className="flex flex-col justify-center items-center p-20 bg-linear-to-tr from-[#3FA3A3] to-[#F5A623]  rounded-2xl text-white mt-10">
         <p className="text-3xl font-bold ">Got more questions?</p>

        <Button 
        onClick={()=> router.push("/contact")}
        variant="secondary"
        className="h-12 w-52 mt-10 text-black text-2xl font-semibold">Contact Us</Button>
       </div>
      </main>
      <Footer />
    </>
  );
}
