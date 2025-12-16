import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import Check from "../../public/images/check.png";

export default function ServicesLayout({ children }) {
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

  const services = [
    { name: "Mechanical Product design", path: "/services/product-design-dva" },
    { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    {
      name: "3D scanning & Product Benchmarking",
      path: "/services/3d-scanning",
    },
    { name: "CAD data conversion", path: "/services/cad-conversion" },
    { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    {
      name: "3D Printing/Rapid prototyping",
      path: "/services/rapid-prototyping",
    },
    { name: "Manufacturing/Prototyping", path: "/services/manufacturing" },
    { name: "Product rendering", path: "/services/product-rendering" },
  ];

  return (
    <div className="w-full flex pt-10 pb-20 px-6 md:px-12 gap-10 bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 self-start h-fit max-h-auto  overflow-y-auto">
        <h3 className="text-[22px] text-center font-semibold mb-4 text-gray-800">
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
                  {s.name === "Manufacturing/Prototyping"
                    ? (
                      <>
                        Manufacturing/
                        <wbr />
                        Prototyping
                      </>
                    )
                    : s.name}
                </span>



              </Link>
            );
          })}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1">
        {/* TOP TABS */}
        <div className="flex gap-4 mb-8  pb-3 sticky top-[125px] z-50 pt-4 -mx-6 px-6  w-[50%]">
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
          <h2 className="text-3xl font-semibold tracking-wide border-b pb-3">
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[17px]">
                <p>
                  At <strong>MAK Design Solutions</strong>, we provide
                  high-precision and optimized{" "}
                  <strong>Mechanical Product Design </strong>
                  solutions that ensure functionality, accuracy, and
                  manufacturability.
                </p>
                <p className="mt-3">
                  Our design methodology converts customer requirements into
                  validated engineering concepts through modeling, simulation,
                  and prototype development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-blue-900 ">
                <h3 className="font-semibold text-[22px] mb-3">
                  Our Design Approach
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[18px]">
                  <li>Understanding functional + mechanical requirements</li>
                  <li>Collecting technical inputs for the application</li>
                  <li>Concept development & multiple design iterations</li>
                  <li>Detailed engineering of selected concept</li>
                  <li>3D CAD modeling with accuracy</li>
                  <li>Optional FEA structural validation</li>
                  <li>Engineering drawings for manufacturing</li>
                  <li>Prototype development (3D printing/machining)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 ">
                <h3 className="font-semibold text-lg mb-3 text-[22px]">
                  Areas of Competency
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-[18px]">
                  <li>Jigs & Fixtures</li>
                  <li>Special Purpose Machines</li>
                  <li>Press Tools / Fine Blanking Tools</li>
                  <li>Injection Molds & Die Design</li>
                  <li>Inspection Gauges</li>
                  <li>Fitment & Mechanical Components</li>
                  <li>Material Handling Equipment</li>
                  <li>Industrial Tools</li>
                  <li>Installation Structures (Aluminum/pipe)</li>
                </ul>
              </div>
            </div>

            {/* RIGHT IMAGE COLUMN */}
            <div className="space-y-6">
              <img
                src="/PD11.webp"
                className="rounded-xl shadow-md w-full object-cover"
              />
              <img
                src="/PD12.jpg"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </div>

          {/* KEY BENEFITS */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Key Benefits
            </h2>
            <ul className="space-y-3 text-[17px] leading-relaxed text-gray-800">
              {[
                "Faster time to market with fewer errors.",
                "Cost saving by minimizing rework and material waste.",
                "Improved design reliability through early validation.",
                "Optimized performance for cost, quality, and efficiency.",
                "Transparent communication at every stage.",
                "Increased customer satisfaction with better outcomes.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-lg">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================= PROCESS FLOW ========================= */}
        <div id="process" ref={processRef} className="mt-20 pt-4">
          <h2 className="text-3xl font-semibold tracking-wide border-b pb-3 mb-6">
            Process Flow
          </h2>

          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-300">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white text-sm font-semibold">
                  <th
                    className="border-r border-gray-400 px-4 py-3 align-middle text-center text-lg"
                    rowSpan={2}
                  >
                    Process Flow
                  </th>
                  <th
                    className="border-r border-gray-400 px-4 py-3 text-center align-middle text-lg"
                    rowSpan={2}
                  >
                    Project Activities
                  </th>
                  <th
                    className="px-4 py-3 text-center text-lg"
                    colSpan={2}
                  >
                    Responsibility
                  </th>
                </tr>
                <tr className="bg-[#1e3a8a] text-white text-sm font-semibold">
                  <th className="border-r border-gray-400 px-4 py-2 text-center text-lg">
                    Our Client
                  </th>
                  <th className="px-4 py-2 text-center text-lg">MAK</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  [
                    "10",
                    "Understand & evaluate customer requirement",
                    "✓",
                    "✓",
                  ],
                  [
                    "20",
                    "Evaluation of user application & data collection",
                    "",
                    "✓",
                  ],
                  [
                    "30",
                    "Idea generation for multiple design options",
                    "",
                    "✓",
                  ],
                  [
                    "40",
                    "Design finalization by evaluating the design options",
                    "",
                    "✓",
                  ],
                  ["50", "Review and approvals", "✓", ""],
                  [
                    "60",
                    "Design detailing (BOM, Material, Dimensions & functional specifications)",
                    "",
                    "✓",
                  ],
                  [
                    "70",
                    "CAD data creation (3D model of parts & assembly)",
                    "",
                    "✓",
                  ],
                  ["80", "Structural analysis (FEA), if needed", "", "✓"],
                  ["90", "Review and approvals", "✓", ""],
                  [
                    "100",
                    "Engineering drawing release for prototyping",
                    "",
                    "✓",
                  ],
                  ["110", "Prototype building", "", "✓"],
                  ["120", "Testing and validation", "", "✓"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="odd:bg-white even:bg-blue-50 hover:bg-blue-50 transition text-lg"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`p-4 ${j === 0 ? 'text-center' : j === 1 ? 'text-left' : 'text-center'} ${j < 3 ? 'border-r border-gray-300' : ''}`}
                      >
                        {cell === "✓" ? (
                          <img src={Check} alt="check" className="w-5 h-5 mx-auto" />
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>



        <div id="applications" ref={applicationsRef} className="mt-20 pt-4">
          <h2 className="text-3xl font-semibold tracking-wide border-b pb-3 mb-6">
            Applications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Jigs & Fixtures",
                description: "Designing jigs, fixtures, tools, dies, molds, gauges, SPMs, material-handling systems, and installation structures."
              },
              {
                name: "Special purpose machine",
                description: "Custom-built machines designed for fast, precise, and high-efficiency operations."
              },
              {
                name: "Dies & Molds",
                description: "Precision tools used to shape materials into accurate, consistent, and repeatable products."
              },
              {
                name: "M/c installation structure",
                description: "Structures designed for safe, stable, and efficient machine installation."
              },
              {
                name: "Fine blanking tool",
                description: "High-precision tooling used to produce clean, accurate, and burr-free metal parts."
              },
              {
                name: "Inspection gauges",
                description: "Tools designed to measure and verify component accuracy with high precision."
              },
              {
                name: "Material handling equipment",
                description: "Equipment engineered to move, lift, and handle materials safely and efficiently"
              },
              {
                name: "Press tool",
                description: "Tooling used to cut or form sheet metal into precise shapes with high repeatability."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
              >
                <div className="relative h-44 w-full">
                  <img
                    src={`/images/${index + 1}.jpg`}
                    alt={item.name}
                    className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#e9f7ff] text-[16px]   text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none ">
                    {item.description}
                  </div>
                </div>
                <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                  {item.name}
                </div>
              </div>
            ))}

            {/* CHILDREN */}
            <div className="mt-10">{children}</div>
          </div>
        </div>
      </div>
    </div >
  );
}