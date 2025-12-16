// import React from "react";
// import { FaEye, FaGem } from "react-icons/fa";
// import Vision from "../../public/images/vision.jpg";
// import Mission from "../../public/images/mission.jpg";
// import Values from "../../public/images/goals.jpg";


// export default function AboutVision() {
//     const sections = [
//         {
//             title: "Vision",
//             color: "text-blue-700",
//             borderColor: "border-blue-500",
//             bgImage: Vision,
//             icon: <FaEye className="w-8 h-8" />,
//             text: "To shape the future of engineering by turning bold ideas into intelligent, high-precision solutions that perform, endure, and inspire.",
//         },
//         {
//             title: "Mission",
//             color: "text-blue-600",
//             borderColor: "border-blue-500",
//             bgImage: Mission,
//             icon: (
//                 <img
//                     src="/targeting.png"   
//                     alt="Mission"
//                     className="w-8 h-8 object-contain"
//                 />
//             ),
//             text: "Our mission is to deliver cutting-edge engineering and digital manufacturing solutions that exceed expectations. With innovation and excellence, we turn concepts into powerful realities.",
//         },
//         {
//             title: "Values",
//             color: "text-blue-600",
//             borderColor: "border-blue-500",
//             bgImage: Values,
//             icon: <FaGem className="w-8 h-8" />,
//             text: "Customer Success, Ethics & Integrity, Transparency, Ownership, and Respect drive everything we do.",
//         },
//     ];

//     return (
//         <section className="w-full px-6 md:px-12 lg:px-24 py-10  bg-white">
//             <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold text-gray-900 ">Vision and Mission</h2>
//                 <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-[18px]">
//                     We envision becoming a trusted manufacturing partner by delivering high-quality, efficient, and scalable mechanical solutions. Our mission is to produce precision-engineered components and systems that meet global standards and exceed industry expectations.  </p>

//             </div>

//             <div className="grid md:grid-cols-3 gap-8 mt-12">
//                 {sections.map((sec, idx) => (
//                     <div
//                         key={idx}
//                         className={`bg-white border ${sec.borderColor} rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative `}
//                     >

//                         {/* Circle Icon */}
//                         <div className={`w-16 h-16 rounded-full bg-white border-2 ${sec.borderColor} flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 shadow-md`}>
//                             {sec.icon}
//                         </div>

//                         {/* Content */}
//                         <h3 className={`mt-8 text-xl font-semibold ${sec.color} text-center `}>
//                             {sec.title}
//                         </h3>
//                         <p className="mt-4 text-gray-600 text-center text-[18px]">{sec.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


import React from 'react'

const AboutVision = () => {
    return (
        <>
            {
                [
                    {
                        title: "Our Vision",
                        text: (
                            <>
                                <p className="text-gray-700 leading-relaxed  text-[18px]">
                                    To shape the future of engineering by turning bold ideas into intelligent, high-precision solutions that perform, endure, and inspire.
                                </p>

                            </>
                        ),
                        img: "/Vision.jpg",
                        reverse: true,
                    },
                    {
                        title: "Our Mission",
                        text: (
                            <p className="text-gray-700 leading-relaxed  text-[18px]">
                                Our mission is to deliver cutting-edge engineering and digital manufacturing solutions that exceed expectations. With innovation and excellence, we turn concepts into powerful realities.
                            </p>
                        ),
                        img: "/Mission.jpg",
                        reverse: false,
                    },
                    {
                        title: "Our Goal",
                        text: (
                            <p className="text-gray-700 leading-relaxed text-[18px]">
                                Customer Success, Ethics & Integrity, Transparency, Ownership, and Respect drive everything we do.
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
                ))
            }
        </>
    )

}

export default AboutVision