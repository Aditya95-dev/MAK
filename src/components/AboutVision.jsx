import React from "react";
import { FaEye, FaGem } from "react-icons/fa";
import Vision from "../../public/images/vision.jpg";
import Mission from "../../public/images/mission.jpg";
import Values from "../../public/images/goals.jpg";


export default function AboutVision() {
    const sections = [
        {
            title: "Vision",
            color: "text-blue-700",
            borderColor: "border-blue-500",
            bgImage: Vision,
            icon: <FaEye className="w-8 h-8" />,
            text: "To be a trusted partner in engineering design and digital-to-physical transformation. We turn ideas into functional, market-ready products using precision, technology, and innovation.",
        },
        {
            title: "Mission",
            color: "text-blue-600",
            borderColor: "border-blue-500",
            bgImage: Mission,
            icon: (
                <img
                    src="/targeting.png"   // notice the leading slash
                    alt="Mission"
                    className="w-8 h-8 object-contain"
                />
            ),
            text: "Our mission is to deliver cutting-edge engineering and digital manufacturing solutions that exceed expectations. With innovation and excellence, we turn concepts into powerful realities.",
        },
        {
            title: "Values",
            color: "text-blue-600",
            borderColor: "border-blue-500",
            bgImage: Values,
            icon: <FaGem className="w-8 h-8" />,
            text: "Customer Success, Ethics & Integrity, Transparency, Ownership, and Respect drive everything we do.",
        },
    ];

    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-10  bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 ">Vision and Mission</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    We envision becoming a trusted manufacturing partner by delivering high-quality, efficient, and scalable mechanical solutions. Our mission is to produce precision-engineered components and systems that meet global standards and exceed industry expectations.  </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {sections.map((sec, idx) => (
                    <div
                        key={idx}
                        className={`bg-white border ${sec.borderColor} rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative `}
                    >

                        {/* Circle Icon */}
                        <div className={`w-16 h-16 rounded-full bg-white border-2 ${sec.borderColor} flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 shadow-md`}>
                            {sec.icon}
                        </div>

                        {/* Content */}
                        <h3 className={`mt-12 text-xl font-semibold ${sec.color} text-center`}>
                            {sec.title}
                        </h3>
                        <p className="mt-4 text-gray-600 text-center">{sec.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}