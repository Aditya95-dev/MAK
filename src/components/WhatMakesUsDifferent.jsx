// import React from "react";
// import { motion } from "framer-motion";

// export default function WhatMakesUsDifferent() {
//   const data = [
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/3063/3063826.png",
//       title: "One-Stop Engineering Partner",
//       desc: "End-to-end engineering services from concept to delivery.",
//       points: [
//         "Design, CAD & simulation",
//         "Prototyping & validation",
//         "Marketing-ready assets",
//       ],
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       title: "Customer-First Approach",
//       desc: "We collaborate closely as part of your internal team.",
//       points: [
//         "Clear communication",
//         "Flexible engagement",
//         "On-time delivery",
//       ],
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
//       title: "Industry Expertise",
//       desc: "Deep experience across engineering domains.",
//       points: [
//         "Manufacturing & automation",
//         "Industrial machinery",
//         "Product development",
//       ],
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//       title: "Quality & Trust",
//       desc: "Built on precision, reliability, and confidentiality.",
//       points: [
//         "Quality-controlled processes",
//         "Standards compliance",
//         "Secure data handling",
//       ],
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
//       title: "Innovation & Affordability",
//       desc: "High-value solutions without unnecessary cost.",
//       points: [
//         "Optimized workflows",
//         "Cost-efficient execution",
//         "Scalable services",
//       ],
//     },
//   ];

//   return (
//     <section className="relative w-full py-16 px-6 md:px-20 lg:px-32 bg-black overflow-hidden">

//       {/* Subtle color glows */}
//       <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-3xl"></div>
//       <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-cyan-500/20 rounded-full blur-3xl"></div>

//       <div className="relative z-10 max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white"
//         >
//           What Makes Us Different
//         </motion.h2>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Vertical Line */}
//           <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 transform -translate-x-1/2"></div>

//           <div className="space-y-5">
//             {data.map((item, i) => {
//               const isLeft = i % 2 === 0;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                   className={`relative flex ${
//                     isLeft ? "justify-start" : "justify-end"
//                   }`}
//                 >
//                   {/* Timeline Dot */}
//                   <div className="absolute left-1/2 top-5 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-md z-10"></div>

//                   {/* Card */}
//                   <div
//                     className={`w-full sm:w-[42%] bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-4 shadow-lg ${
//                       isLeft ? "mr-auto" : "ml-auto"
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="w-4 h-4"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-semibold text-white">
//                           {item.title}
//                         </h3>
//                         <p className="text-[11px] text-blue-300">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Points */}
//                     <ul className="space-y-1 text-[11px] text-gray-300">
//                       {item.points.map((point, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <span className="mt-1 w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function WhatMakesUsDifferent() {
  const data = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/3063/3063826.png",
      title: "One-Stop Engineering Partner",
      desc: "End-to-end engineering services from concept to delivery.",
      points: [
        "Design, CAD & simulation",
        "Prototyping & validation",
        "Marketing-ready assets",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Customer-First Approach",
      desc: "We collaborate closely as part of your internal team.",
      points: ["Clear communication", "Flexible engagement", "On-time delivery"],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
      title: "Industry Expertise",
      desc: "Deep experience across engineering domains.",
      points: [
        "Manufacturing & automation",
        "Industrial machinery",
        "Product development",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      title: "Quality & Trust",
      desc: "Built on precision, reliability, and confidentiality.",
      points: [
        "Quality-controlled processes",
        "Standards compliance",
        "Secure data handling",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
      title: "Innovation & Affordability",
      desc: "High-value solutions without unnecessary cost.",
      points: [
        "Optimized workflows",
        "Cost-efficient execution",
        "Scalable services",
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            WHY CHOOSE US
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            We deliver professional, reliable, and cost-effective engineering
            solutions for a wide range of industries.
          </p>

          {/* Arrows */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative">
          <div className="overflow-hidden w-full">
            <motion.div
              animate={{ x: -index * 360 }}
              transition={{ type: "spring", stiffness: 90, damping: 25 }}
              className="flex gap-8"
            >
              {data.map((card, i) => {
                const isActive = i === index;
                return (
                  <motion.div
                    key={i}
                    className={`relative min-w-[320px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 cursor-pointer
                      ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"}
                    `}
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-white rounded-xl"></div>

                    {/* Card Content */}
                    <div className="relative z-10 p-8 flex flex-col items-center">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-12 h-12 "
                      />
                      <h3 className="mt-4 text-xl font-semibold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>

                      <ul className="mt-4 list-disc list-inside text-gray-500 text-sm space-y-1">
                        {card.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}