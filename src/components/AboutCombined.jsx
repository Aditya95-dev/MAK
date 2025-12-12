// import React from "react";

// export default function AboutCombined() {
//   return (
//     <div className="w-full px-6 md:px-6 lg:px-18 py-0 space-y-24">

//       {/* ----------- REUSABLE WRAPPER STYLE ------------- */}
//       {[
//         {
//           title: "Our Core Values",
//           text: (
//             <ul className="space-y-2 text-gray-700 leading-relaxed">
//               <li>• Customer Success</li>
//               <li>• Ethics & Integrity</li>
//               <li>• Transparency</li>
//               <li>• Ownership</li>
//               <li>• Respect</li>
//             </ul>
//           ),
//           img: "/Core.jpg",
//           reverse: false,
//         },
//         {
//           title: "Our Vision",
//           text: (
//             <>
//               <p className="text-gray-700 leading-relaxed">
//                 To be a trusted partner in engineering design and
//                 digital-to-physical transformation. We turn ideas into
//                 functional, market-ready products using precision,
//                 technology, and innovation.
//               </p>
//               <p className="mt-4 italic text-gray-600">
//                 “Sustained Excellence in Product Engineering and Technology
//                 Integration for Customer Success”
//               </p>
//             </>
//           ),
//           img: "/Vision.jpg",
//           reverse: true,
//         },
//         {
//           title: "Our Mission",
//           text: (
//             <p className="text-gray-700 leading-relaxed">
//               Our mission is to deliver cutting-edge engineering and digital
//               manufacturing solutions that exceed expectations. With innovation
//               and excellence, we turn concepts into powerful realities.
//             </p>
//           ),
//           img: "/Mission.jpg",
//           reverse: false,
//         },
//         {
//           title: "Our Goal",
//           text: (
//             <p className="text-gray-700 leading-relaxed">
//               We aim to be your long-term technology partner — enabling faster
//               product launches, reduced costs, and elevated customer engagement.
//             </p>
//           ),
//           img: "/Goal.jpg",
//           reverse: true,
//         },
//       ].map((section, i) => (
//         <div
//           key={i}
//           className={`grid md:grid-cols-2 gap-12 items-center 
//           bg-gradient-to-br from-white via-gray-50 to-gray-100 
//           p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]
//           border border-gray-200
//           relative overflow-hidden
//           transition-all duration-700 ease-out
//           animate-fadeSlide`}
//         >
//           {/* Accent corner gradient */}
//           <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#062a66]/20 to-transparent rounded-br-full"></div>

//           {/* Conditionally reverse image/text */}
//           {!section.reverse ? (
//             <>
//               {/* Text */}
//               <div className="z-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   {section.title}
//                 </h2>
//                 {section.text}
//               </div>

//               {/* Image */}
//               <img
//                 src={section.img}
//                 alt={section.title}
//                 className="w-full h-80 object-cover rounded-xl shadow-lg 
//                 transition-transform duration-500 hover:scale-[1.02]"
//               />
//             </>
//           ) : (
//             <>
//               {/* Image */}
//               <img
//                 src={section.img}
//                 alt={section.title}
//                 className="w-full h-80 object-cover rounded-xl shadow-lg 
//                 transition-transform duration-500 hover:scale-[1.02]"
//               />

//               {/* Text */}
//               <div className="z-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   {section.title}
//                 </h2>
//                 {section.text}
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


import React from "react";

export default function AboutCombined() {
  const coreValues = [
    "Customer Success",
    "Ethics & Integrity",
    "Transparency",
    "Ownership",
    "Respect"
  ];

  return (
    <div className="w-full px-6 md:px-6 lg:px-18 py-0 space-y-24">

      {/* ----------- CORE VALUES WITH CIRCULAR DESIGN ------------- */}
      <div className="grid md:grid-cols-2 gap-12 items-center 
          bg-gradient-to-br from-white via-gray-50 to-gray-100 
          p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          border border-gray-200
          relative overflow-hidden
          transition-all duration-700 ease-out
          animate-fadeSlide">

        {/* Accent corner gradient */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#062a66]/20 to-transparent rounded-br-full"></div>

        {/* Text Side */}
        <div className="z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Core Values
          </h2>

          {/* Circular Arrangement */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-24 h-24 rounded-full bg-gradient-to-br from-[#062a66] to-[#0a4299]
                          flex items-center justify-center shadow-lg z-10">
              <span className="text-white font-bold text-sm text-center">Core<br />Values</span>
            </div>

            {/* Orbiting Value Circles */}
            {coreValues.map((value, index) => {
              const angle = (index * 360) / coreValues.length - 90;
              const radius = 140;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-28 h-28 rounded-full bg-white
                           flex items-center justify-center text-center
                           shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                           border-2 border-[#062a66]/20
                           hover:shadow-[0_8px_30px_rgba(6,42,102,0.3)]
                           hover:scale-110 hover:border-[#062a66]
                           transition-all duration-300 ease-out
                           group"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <span className="text-xs md:text-sm font-semibold text-gray-800 px-2
                                 group-hover:text-[#062a66] transition-colors">
                    {value}
                  </span>
                </div>
              );
            })}

            {/* Connecting Lines (optional decorative element) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <circle
                cx="50%"
                cy="50%"
                r="140"
                fill="none"
                stroke="#062a66"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Image Side */}
        <img
          src="/Core.jpg"
          alt="Our Core Values"
          className="w-full h-80 object-cover rounded-xl shadow-lg 
                   transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* ----------- REUSABLE WRAPPER STYLE FOR OTHER SECTIONS ------------- */}
      {[
        {
          title: "Our Vision",
          text: (
            <>
              <p className="text-gray-700 leading-relaxed">
                To engineer innovative, precise, and future-ready solutions that turn ideas into reliable, high-performance products.
              </p>

            </>
          ),
          img: "/Vision.jpg",
          reverse: true,
        },
        {
          title: "Our Mission",
          text: (
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver cutting-edge engineering and digital
              manufacturing solutions that exceed expectations. With innovation
              and excellence, we turn concepts into powerful realities.
            </p>
          ),
          img: "/Mission.jpg",
          reverse: false,
        },
        {
          title: "Our Goal",
          text: (
            <p className="text-gray-700 leading-relaxed">
              We aim to be your long-term technology partner — enabling faster
              product launches, reduced costs, and elevated customer engagement.
            </p>
          ),
          img: "/Goal.jpg",
          reverse: true,
        },
      ].map((section, i) => (
        <div
          key={i}
          className={`grid md:grid-cols-2 gap-12 items-center 
          bg-gradient-to-br from-white via-gray-50 to-gray-100 
          p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          border border-gray-200
          relative overflow-hidden
          transition-all duration-700 ease-out
          animate-fadeSlide`}
        >
          {/* Accent corner gradient */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#062a66]/20 to-transparent rounded-br-full"></div>

          {/* Conditionally reverse image/text */}
          {!section.reverse ? (
            <>
              {/* Text */}
              <div className="z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                {section.text}
              </div>

              {/* Image */}
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg 
                transition-transform duration-500 hover:scale-[1.02]"
              />
            </>
          ) : (
            <>
              {/* Image */}
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg 
                transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Text */}
              <div className="z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                {section.text}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}