import { Heart, Sparkles } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#F3EDE7]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-sm font-black tracking-[0.3em] text-[#F5A623] uppercase mb-4">WHO WE ARE</h2>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase whitespace-nowrap">
                        WE DON’T JUST INSPIRE, <span className="text-[#3FA3A3]">WE BUILD</span>
                    </h2>
                    <div className="text-lg md:text-xl text-slate-700 leading-relaxed space-y-8 font-medium">
                        <p>
                            Woman of Difference Group LLC is a leadership and consulting firm dedicated to building people and institutions from the inside out. We help individuals and organizations develop the identity, character, and structure required for sustainable growth, effective leadership, and lasting impact.
                        </p>
                        <p>
                            Our work extends beyond motivation. We create strategic frameworks, practical systems, and transformational solutions that equip our clients to lead with clarity, discipline, integrity, and purpose. In addition to our core revenue-generating services, we are committed to social impact through an initiative that offers free residential cleaning services to elderly individuals living alone who are unable to afford professional support.
                        </p>
                        <p>
                            This initiative reflects our conviction that service, dignity, and stewardship must remain central to meaningful community transformation. Built to be lean, scalable, and values-anchored, Woman of Difference Group is positioned for long-term sustainability and measurable impact.
                        </p>
                    </div>

                    <div className="mt-20 pt-16 border-t border-slate-200">
                        <h3 className="text-sm font-black tracking-[0.3em] text-[#3FA3A3] uppercase mb-10 text-center">WHAT WE DELIVER</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { from: "Confusion", to: "Clarity" },
                                { from: "Potential", to: "Structure" },
                                { from: "Inspiration", to: "Execution" },
                                { from: "Vision", to: "Sustainable Impact" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group">
                                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">{item.from}</span>
                                    <span className="text-[#F5A623] text-2xl font-black mb-1 group-hover:scale-110 transition-transform">↓</span>
                                    <span className="text-slate-900 text-xl font-black uppercase tracking-tight">{item.to}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-40 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-12 md:p-20 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3FA3A3]/10 rounded-full text-[#3FA3A3] text-xs font-black tracking-widest uppercase">
                            Our Impact Ecosystem
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                            The Ecosystem of <br />
                            <span className="text-[#F5A623]">Transformation</span> & <br />
                            Sustainable Impact
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Our work is not theoretical. Everything we build through Woman of Difference Group flows into real-world impact through <span className="text-[#3FA3A3] font-bold">Luketekelo Family Foundation</span>—where leadership, structure, and resources are applied to serve orphans and vulnerable children.
                        </p>
                        <div className="pt-4">
                            <div className="flex items-center gap-4 text-slate-900 font-bold">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[#F5A623]">
                                    →
                                </div>
                                <span>Moving from theory to tangible results.</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-[500px] w-full relative">
                        <img
                            src="/images/eco.jpeg"
                            alt="Transformation Ecosystem Diagram"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 md:to-white/50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
