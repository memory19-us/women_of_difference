import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#F3EDE7]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Empowering Women to Make a <span className="text-[#F5A623]">Difference</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At Woman of Difference Group, we believe lasting transformation begins with alignment to God, not performance. Our work is grounded in the uncompromising truth of His Word and guided by the ROOTS Framework, building faith, identity, discipline, and stewardship before expansion. We do not rush growth, we cultivate foundations. This is not motivational work; it is formative. When God is centered, leadership gains clarity, character sustains impact, and purpose endures. - Memory Grace Hector </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
                        <p className="text-muted-foreground">
                            At Woman of Difference Group, we help individuals live, lead, heal, and build from depth—where faith, identity, and discipline are rightly ordered before expansion begins.
                        </p>
                    </div>

                    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-[#3FA3A3] rounded-full flex items-center justify-center mb-6">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Our Approach</h3>
                        <p className="text-muted-foreground">
                            Holistic transformation combining mental clarity, physical environment,
                            and community support for sustainable growth.
                        </p>
                    </div>

                    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl  hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Our Community</h3>
                        <p className="text-muted-foreground">
                            A supportive network of women committed to growth, celebrating victories,
                            and lifting each other higher every day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
