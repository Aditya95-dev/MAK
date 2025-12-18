import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

export default function ProductRenderingSection({ children }) {
    const location = useLocation();

    const overviewRef = useRef(null);
    const processRef = useRef(null);
    const applicationsRef = useRef(null);

    const tabs = [
        { id: "overview", label: "Overview", ref: overviewRef },
        { id: "process", label: "Process Flow", ref: processRef },
        { id: "applications", label: "Applications", ref: applicationsRef },
    ];

    const [activeTab, setActiveTab] = useState("overview");

    const scrollToSection = (ref, id) => {
        if (ref.current) {
            const yOffset = -100;
            const y =
                ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveTab(id); // update on click
        }
    };

    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 150; // offset for sticky header

            const currentTab = tabs
                .map((tab) => {
                    const elem = tab.ref.current;
                    if (!elem) return { id: tab.id, top: 0 };
                    return { id: tab.id, top: elem.offsetTop };
                })
                .filter((sec) => sec.top <= scrollPos)
                .sort((a, b) => b.top - a.top)[0];

            if (currentTab && currentTab.id !== activeTab) {
                setActiveTab(currentTab.id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initialize
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab, tabs]);

    // const services = [
    //     { name: "Mechanical Product design", path: "/services/product-design-dva" },
    //     { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    //     {
    //         name: "3D scanning & Product Benchmarking",
    //         path: "/services/sanning-benchmarking",
    //     },
    //     { name: "CAD data conversion", path: "/services/cad-conversion" },
    //     { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    //     {
    //         name: "3D Printing/Rapid prototyping",
    //         path: "/services/rapid-prototyping",
    //     },
    //     {
    //         name: "Manufacturing/Prototyping",
    //         path: "/services/manufacturing-prototyping",
    //     },
    //     { name: "Product rendering", path: "/services/product-rendering-technical-animation" },
    // ];


    const services = [
        { name: "Mechanical Product design", path: "/services/product-design-dva" },
        { name: "Reverse Engineering", path: "/services/reverse-engineering" },
        {
            name: "3D scanning & Product Benchmarking",
            path: "/services/3d-scanning-benchmarking",
        },
        { name: "CAD data conversion", path: "/services/cad-data-conversion" },
        { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
        {
            name: "3D Printing/Rapid prototyping",
            path: "/services/3d-printing-rapid-prototyping",
        },
        { name: "Manufacturing/Prototyping", path: "/services/manufacturing-prototyping" },
        { name: "Product rendering", path: "/services/product-rendering-technical-animation" },
    ];
    return (
        <div className="w-full flex pt-10 pb-4 px-6 md:px-12 gap-10 bg-gray-100">
            {/* LEFT SIDEBAR */}
            <div className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 self-start h-fit max-h-auto  overflow-y-auto">
                <h3 className="text-[22px] text-left font-bold mb-4 text-gray-800">
                    Our Services
                </h3>
                <div className="space-y-4">
                    {services.map((s, i) => {
                        const isActive = location.pathname === s.path;
                        return (
                            <Link
                                key={i}
                                to={s.path}
                                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition border 
                  ${isActive
                                        ? "bg-blue-900 text-white border-blue-900 shadow"
                                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                    }`}
                            >
                                <span className="text-[16px] font-medium whitespace-normal leading-snug">
                                    {s.name === "Manufacturing/Prototyping" ? (
                                        <>
                                            Manufacturing/
                                            <wbr />
                                            Prototyping
                                        </>
                                    ) : (
                                        s.name
                                    )}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">
                {/* TOP TABS */}
                <div className="flex gap-4 mb-8  pb-3 text-[18px] sticky font-semibold top-[125px] z-50 pt-4 -mx-6 px-6  w-[50%]">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => scrollToSection(t.ref)}
                            className={`px-5 py-2 rounded-md transition-all duration-300 font-medium 
        ${activeTab === t.id
                                    ? "bg-blue-900 text-white"
                                    : "bg-white text-blue-900 hover:bg-blue-100"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* ========================= OVERVIEW ========================= */}
                <div id="overview" ref={overviewRef} className="space-y-12 pt-4">
                    <h2 className="text-3xl font-bold tracking-wide border-b pb-3">
                        Overview
                    </h2>

                    {/* ================= TEXT CONTENT ================= */}
                    <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px]">
                            <p>
                                At <strong>MAK Design Solutions</strong>, we specialize in
                                Product Rendering services that transform ideas into highly
                                realistic digital visuals. Our solutions are widely used in
                                industrial design, advertising, marketing, cataloguing, and
                                e-commerce to showcase how a product will look and function —
                                even before it is physically manufactured. behaviour—without the
                                need of costly physical prototypes.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px]">
                            <h3 className="font-semibold text-[22px] mb-3 text-black">
                                Product rendering
                            </h3>
                            <p>
                                Our product rendering services create photo-realistic images in
                                a virtual environment, helping businesses visualize and market
                                their products effectively.
                            </p>
                            <br />
                            <strong>Rendering Framework Includes:</strong>
                            <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                <li>Conceptualization & Planning</li>
                                <li>3D Modeling.</li>
                                <li>Texturing & Lighting.</li>
                                <li>High-Quality Rendering.</li>

                                <li>Post-Production & Quality Check.</li>
                                <li>Integration with Marketing Materials.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                            <h3 className="text-[22px] font-semibold mb-3 text-gray-900">
                                Key Benefits of Product Rendering
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                <li>
                                    <strong>Cost & Time Saving –</strong> Eliminates the need for
                                    physical prototypes and expensive photoshoots
                                </li>
                                <li>
                                    <strong>Enhanced Marketing & Visualization –</strong>{" "}
                                    Realistic product images for brochures, catalogues, and online
                                    sales.
                                </li>
                                <li>
                                    <strong>Fast Iterations –</strong> Quick design changes for
                                    better flexibility.
                                </li>
                                <li>
                                    <strong>Improved User Experience –</strong> Clear
                                    visualization of products boosts customer confidence and
                                    sales.
                                </li>
                                <li>
                                    <strong> Sustainability –</strong> Reduces material waste and
                                    minimizes travel for photoshoots.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ================= IMAGES ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* LEFT BIG IMAGE */}
                        <img
                            src="/product1.png"
                            alt="FEA Analysis 1"
                            className="rounded-xl shadow-md w-[700px] h-[360px] object-cover"
                        />

                        {/* RIGHT STACKED IMAGES */}
                        <div className="flex flex-col gap-6">
                            <img
                                src="/product2.png"
                                alt="FEA Analysis 2"
                                className="rounded-xl shadow-md w-64 h-40 object-cover"
                            />
                            <img
                                src="/product3.png"
                                alt="FEA Analysis 3"
                                className="rounded-xl shadow-md w-64 h-40 object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ========================= APPLICATIONS ========================= */}
                <div id="applications" ref={applicationsRef} className="mt-20 pt-4">
                    <h2 className="text-3xl font-bold tracking-wide border-b pb-3 mb-6">
                        Applications
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* ---------- FIRST ROW : 3 IMAGES ---------- */}
                        {[
                            {
                                name: "Solve Engg. problems",
                                description:
                                    "Designing jigs, fixtures, tools, dies, molds, gauges, SPMs, material-handling systems, and installation structures.",
                            },
                            {
                                name: "Structure analysis",
                                description:
                                    "Custom-built machines designed for fast, precise, and high-efficiency operations.",
                            },
                            {
                                name: "Design Optimization",
                                description:
                                    "Precision tools used to shape materials into accurate, consistent, and repeatable products.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer lg:col-span-1"
                            >
                                <div className="relative h-44 w-full">
                                    <img
                                        src={`/images/${index + 1}.jpg`}
                                        alt={item.name}
                                        className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#e9f7ff] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
                                        {item.description}
                                    </div>
                                </div>
                                <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                    {item.name}
                                </div>
                            </div>
                        ))}

                        {/* ---------- SECOND ROW : PERFECTLY CENTERED BETWEEN ---------- */}
                        <div className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer lg:col-start-2">
                            <div className="relative h-44 w-full">
                                <img
                                    src="/images/4.jpg"
                                    alt="Design validation"
                                    className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                />
                                <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#e9f7ff] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
                                    High-precision tooling used to produce clean, accurate, and
                                    burr-free metal parts.
                                </div>
                            </div>
                            <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                Design validation
                            </div>
                        </div>

                        <div className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer lg:col-start-3">
                            <div className="relative h-44 w-full">
                                <img
                                    src="/images/5.jpg"
                                    alt="Durability evaluation"
                                    className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                />
                                <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#e9f7ff] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
                                    Tools designed to measure and verify component accuracy with
                                    high precision.
                                </div>
                            </div>
                            <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                Durability evaluation
                            </div>
                        </div>

                        {/* ---------- CHILDREN ---------- */}
                        {children && <div className="col-span-full">{children}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
