import { Heart, Sparkles } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#F3EDE7]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Equipping Individuals to Make a <span className="text-[#F5A623]">Difference</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Women of Difference Group LLC is purpose-driven providing coaching and leadership development, professional cleaning services, and empowerment events for individuals, organizations, and communities. The company operates with a dual focus: commercial excellence and community compassion.
                        In addition to revenue-generating services, the company integrates a social impact initiative offering free residential cleaning services for elderly individuals who live alone and cannot afford professional support.
                        The business is designed to be lean, scalable, and values-anchored, positioning it for sustainable growth and grant-supported community impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Our Mission Statement</h3>
                        <p className="text-muted-foreground">
                            To build a trusted service brand known for excellence, integrity, and compassionate leadership, creating measurable impact while maintaining operational discipline.  </p>
                    </div>

                    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-[#3FA3A3] rounded-full flex items-center justify-center mb-6">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Our Vision Statement</h3>
                        <p className="text-muted-foreground">
                            To build a trusted service brand known for excellence, integrity, and compassionate leadership, creating measurable impact while maintaining operational discipline.  </p>
                    </div>

                    {/* <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl  hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Our Community</h3>
                        <p className="text-muted-foreground">
                            A supportive network of women committed to growth, celebrating victories,
                            and lifting each other higher every day.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
