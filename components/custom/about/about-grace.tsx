// export default function AboutGrace() {
//   return (
//     <section className="bg-[#F3F6F6] rounded-3xl p-6 md:p-10 -mx-4 md:mx-0">
//       <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
//         {/* Image Side */}
//         <div className="w-full md:w-1/2 relative">
//           <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
//              {/* Amber Outline Border Trick */}
//             <img
//               src="/images/memory.jpg"
//               alt="Memory Grace Hector"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//           {/* Decorative border offset */}
//           <div className="absolute top-4 left-4 w-full h-full border-4 border-[#F5A623] rounded-lg -z-0 hidden md:block"></div>
//         </div>

//         {/* Text Side */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h4 className="text-[#3FA3A3] font-bold tracking-wider text-sm uppercase mb-2">
//             Founder
//           </h4>
//           <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
//             Get to Know Grace
//           </h2>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong>Memory Grace Hector</strong> is a wife and mother first, grounding her leadership in faith, family, and stewardship.
//           </p>
//           <p className="text-gray-600 leading-relaxed mb-8">
//           She is an author, speaker, and mindset transformation leader committed to teaching the Word of God in ways that renew minds, strengthen identity, and produce enduring transformation.
// She holds a Diploma in Psychology, formal training in Leadership and Management from the University of Georgia, and certification as a Human Rights Consultant. Together with her husband, David Hector, she co-founded the Luketekelo Family Foundation in partnership with Faith Family Foundation, advancing faith-anchored, community-led initiatives that restore dignity, structure, and opportunity to vulnerable children, women, and families.
// Her leadership is shaped by lived experience, disciplined faith, and a firm conviction that sustainable impact requires depth before growth. Through the ROOTS Mindset Transformation Framework, Memory Grace equips individuals and organizations to heal, align, and lead with clarity, stewardship, and longevity building foundations that support scale without compromise.
// As the author of Too Soon to Quit and On the Journey of Faith, and as a speaker, she carries a redemptive message: purpose can emerge from pain, and faith when ordered and lived, produces generational outcomes. Her work reflects compassion guided by strategy, honoring timeless values while building responsibly for the future.
// </p>
        
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

export default function AboutGrace() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#F3F6F6] rounded-3xl p-6 md:p-10 -mx-4 md:mx-0">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
            <img
              src="/images/memory.jpg"
              alt="Memory Grace Hector"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-4 border-[#F5A623] rounded-lg -z-0 hidden md:block" />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-[#3FA3A3] font-bold tracking-wider text-sm uppercase mb-2">
            Founder
          </h4>

          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Get to Know Grace
          </h2>

          {/* Intro */}
          <p className="text-lg text-gray-700 mb-4">
            <strong>Memory Grace Hector</strong> is a child of God, wife and mother first, grounding her leadership in faith, family, and stewardship.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            She is an author, speaker, and mindset transformation leader committed to teaching the Word of God in ways that renew minds, strengthen identity, and produce enduring transformation.
          </p>

          {/* Expanded Content */}
          {expanded && (
            <div className="space-y-6 text-gray-600 leading-relaxed text-left">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Education & Training
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Diploma in Psychology</li>
                  <li>Leadership & Management training — University of Georgia</li>
                  <li>Certified Human Rights Consultant</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Foundation & Community Work
                </h3>
                <p>
                  Together with her husband, David Hector, Grace co-founded the
                  <strong> Luketekelo Family Foundation</strong> in partnership with
                  <strong> Faith Family Foundation</strong>, advancing faith-anchored,
                  community-led initiatives that restore dignity, structure, and opportunity
                  to vulnerable children, women, and families.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Leadership & Framework
                </h3>
                <p>
                  Through the <strong>ROOTS Mindset Transformation Framework</strong>,
                  Grace equips individuals and organizations to heal, align, and lead with
                  clarity, stewardship, and longevity—building foundations that support scale
                  without compromise.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Author & Message
                </h3>
                <p>
                  As the author of <em>Too Soon to Quit</em> and
                  <em> On the Journey of Faith</em>, Grace carries a redemptive message:
                  purpose can emerge from pain, and faith—when ordered and lived—produces
                  generational outcomes.
                </p>
              </div>
            </div>
          )}

          {/* Read More Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-[#3FA3A3] font-semibold hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </section>
  );
}
