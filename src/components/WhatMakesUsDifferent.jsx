import {
  FaCogs,
  FaIndustry,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import React from "react";

export default function WhatMakesUsDifferent() {
  const data = [
    {
      icon: <FaCogs />,
      title: "One-Stop Engineering Partner",
      desc: "Complete solutions from concept to marketing — all under one expert team.",
    },
    {
      icon: <FaUsers />,
      title: "Customer-First Approach",
      desc: "We align with your goals, deadlines, and budget as an extended engineering team.",
    },
    {
      icon: <FaIndustry />,
      title: "Expertise Across Industries",
      desc: "We deliver optimized results across engineering, industrial, and product sectors.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Commitment to Quality & Trust",
      desc: "High standards, strict quality checks, and fully secure data handling.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative & Cost-Efficient",
      desc: "Cutting-edge engineering with cost-effective, scalable pricing.",
    },
  ];

  return (
    <div className="w-full px-6 md:px-20 lg:px-32 py-20 bg-gray-200">
      <h2 className="text-4xl font-black text-center mb-16 text-gray-900 tracking-tight">
        What Makes Us Different?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {data.map((item, i) => (
          <div
            key={i}
            className="
              group relative w-full max-w-sm p-8 rounded-3xl
              bg-gradient-to-br from-white to-gray-100
              shadow-[0_8px_30px_rgb(0,0,0,0.06)]
              hover:shadow-[0_12px_35px_rgb(0,0,0,0.12)]
              transition-all duration-500 hover:-translate-y-2
            "
          >
            {/* gradient border ring on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-600 to-purple-600 p-[2px]">
              <div className="w-full h-full bg-white rounded-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              {/* Icon Circle */}
              <div
                className="
                  w-20 h-20 mx-auto mb-6 flex items-center justify-center
                  rounded-2xl bg-white shadow-inner
                  text-blue-700 text-4xl
                  group-hover:scale-110 group-hover:text-blue-600
                  transition-all duration-500
                "
              >
                <div className="group-hover:animate-pulse">{item.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// import {
//   FaCogs,
//   FaIndustry,
//   FaLightbulb,
//   FaShieldAlt,
//   FaUsers,
// } from "react-icons/fa";

// import React from "react";

// export default function WhatMakesUsDifferent() {
//   const data = [
//     { icon: <FaCogs />, title: "One-Stop Engineering Partner", desc: "Complete solutions…" },
//     { icon: <FaUsers />, title: "Customer-First Approach", desc: "We align with you…" },
//     { icon: <FaIndustry />, title: "Expertise Across Industries", desc: "Optimized results…" },
//     { icon: <FaShieldAlt />, title: "Quality & Trust", desc: "High standards…" },
//     { icon: <FaLightbulb />, title: "Innovative & Affordable", desc: "Cutting-edge…" },
//   ];

//   return (
//     <div className="w-full px-6 md:px-20 lg:px-32 py-20">
//       <h2 className="text-4xl font-black text-center mb-16 text-gray-900 tracking-tight">
//         What Makes Us Different?
//       </h2>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
//         {data.map((item, i) => (
//           <div
//             key={i}
//             className="
//               group relative w-full max-w-sm p-8 rounded-3xl
//               bg-white/50 backdrop-blur-xl
//               shadow-[0_8px_30px_rgba(0,0,0,0.08)]
//               transition-all duration-700
//               hover:-translate-y-4 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
//               hover:rotate-[1.3deg]
//               hover:skew-x-[1deg]
//               hover:scale-[1.03]
//               floating-card
//             "
//           >
//             {/* Outer neon glow */}
//             <div className="
//               absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
//               transition duration-700
//               bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-xl
//             "></div>

//             {/* SHINE SWEEP */}
//             <div className="
//               absolute top-0 left-0 w-0 group-hover:w-full h-full
//               bg-gradient-to-r from-white/10 to-white/0
//               transition-all duration-700 ease-out
//               rounded-3xl overflow-hidden pointer-events-none
//             "></div>

//             <div className="relative z-20 text-center">
//               {/* Icon Circle */}
//               <div
//                 className="
//                   w-20 h-20 mx-auto mb-6 flex items-center justify-center
//                   rounded-2xl bg-white shadow-inner text-blue-700 text-4xl
//                   transition-all duration-700
//                   group-hover:scale-125 group-hover:text-blue-600
//                   group-hover:rotate-6
//                 "
//               >
//                 {item.icon}
//               </div>

//               <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>

//               {/* underline grow */}
//               <div className="mt-4 h-1 w-0 bg-blue-600 mx-auto rounded-full transition-all duration-700 group-hover:w-24"></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Floating animation */}
//       <style>{`
//         .floating-card {
//           animation: float 4s ease-in-out infinite;
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>
//     </div>
//   );
// }

