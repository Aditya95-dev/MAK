import { Link, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import Check from "../../public/images/check.png";

export default function ServicesLayout({ children }) {
  const location = useLocation();

  // Create refs for each section
  const overviewRef = useRef(null);
  const processRef = useRef(null);
  const applicationsRef = useRef(null);

  const tabs = [
    { id: "overview", label: "Overview", ref: overviewRef },
    { id: "process", label: "Process Flow", ref: processRef },
    { id: "applications", label: "Applications", ref: applicationsRef },
  ];

  const services = [
    { name: "Mechanical Product design", path: "/services/product-design-dva" },
    { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    { name: "3D scanning & Product Benchmarking", path: "/services/3d-scanning" },
    { name: "CAD data conversion", path: "/services/cad-conversion" },
    { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    { name: "3D Printing/Rapid prototyping", path: "/services/rapid-prototyping" },
    { name: "Manufacturing/Prototyping", path: "/services/manufacturing" },
    { name: "Product rendering", path: "/services/product-rendering" },
  ];

  // Scroll to section function with offset for sticky header
  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -100; // Offset for sticky header
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex pt-10 pb-20 px-6 md:px-12 gap-10 bg-gray-100">

      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 self-start h-fit max-h-[calc(100vh-7rem)] overflow-y-auto">

        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Our Services
        </h3>

        <div className="space-y-2">
          {services.map((s, i) => {
            const isActive = location.pathname === s.path;
            return (
              <Link
                key={i}
                to={s.path}
                className={`
            flex items-center gap-2 px-4 py-3 rounded-lg transition border
            ${isActive
                    ? "bg-blue-900 text-white border-blue-900 shadow"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }
          `}
              >
                <span className="text-sm font-medium">{s.name}</span>
              </Link>
            );
          })}
        </div>
      </div>



      {/* RIGHT CONTENT */}
      <div className="flex-1">


        {/* TOP TABS - Now as navigation buttons */}
        <div className="flex gap-4 mb-8 border-b pb-3 sticky top-0 bg-white z-10 pt-4 -mx-6 px-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => scrollToSection(t.ref)}
              className="px-5 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-700 transition-all duration-300"
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW SECTION */}
        <div ref={overviewRef} className="space-y-12 pt-4">

          {/* SECTION TITLE */}
          <h2 className="text-3xl font-semibold tracking-wide border-b pb-3">
            Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* LEFT CONTENT */}
            <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">

              {/* CARD 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[17px]">
                <p>
                  At <strong>MAK Design Solutions</strong>, we provide
                  high-precision and optimized <strong>Mechanical Product Design</strong>
                  solutions that ensure functionality, accuracy, and manufacturability.
                </p>

                <p className="mt-3">
                  Our design methodology converts customer requirements into
                  validated engineering concepts through modeling, simulation, and prototype development.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-[22px] mb-3">Our Design Approach</h3>

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

              {/* CARD 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-lg mb-3 text-[22px]">Areas of Competency</h3>

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
        </div>

        {/* PROCESS SECTION */}
        <div ref={processRef} className="mt-20 pt-4">
          <h2 className="text-3xl font-semibold tracking-wide border-b pb-3 mb-6">Process Flow</h2>

          {/* PROCESS FLOW TABLE */}
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-900 text-white text-sm font-semibold">
                  <th className="border px-4 py-3 align-middle text-center text-lg" rowSpan={2}>
                    <div className="leading-tight">Process Flow</div>
                  </th>

                  <th className="border px-4 py-3 text-center align-middle text-lg" rowSpan={2}>
                    Project Activities
                  </th>

                  <th className="border px-4 py-3 text-center text-lg" colSpan={2}>
                    Responsibility
                  </th>
                </tr>

                <tr className="bg-blue-900 text-white text-sm font-semibold">
                  <th className="border px-4 py-2 text-center text-lg">Our Client</th>
                  <th className="border px-4 py-2 text-center text-lg">MAK</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">

                {/* Row 1 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">10</td>
                  <td className="p-4">Understand & evaluate customer requirement</td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">20</td>
                  <td className="p-4">Evaluation of user application & data collection</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">30</td>
                  <td className="p-4">Idea generation for multiple design options</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">40</td>
                  <td className="p-4">
                    Design finalization by evaluating the design options
                  </td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">50</td>
                  <td className="p-4">Review and approvals</td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-4 text-center"></td>
                </tr>

                {/* Row 6 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">60</td>
                  <td className="p-4">
                    Design detailing (BOM, Material, Dimensions & functional specifications)
                  </td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 7 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">70</td>
                  <td className="p-4">CAD data creation (3D model of parts & assembly)</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 8 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">80</td>
                  <td className="p-4">Structural analysis (FEA), if needed</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 9 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">90</td>
                  <td className="p-4">Review and approvals</td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-4 text-center"></td>
                </tr>

                {/* Row 10 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">100</td>
                  <td className="p-4">Engineering drawing release for prototyping</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 11 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">110</td>
                  <td className="p-4">Prototype building</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

                {/* Row 12 */}
                <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition text-lg">
                  <td className="p-4 text-center">120</td>
                  <td className="p-4">Testing and validation</td>
                  <td className="p-4 text-center"></td>
                  <td className="p-4 text-center">
                    <img src={Check} className="w-5 h-5 mx-auto" />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* KEY BENEFITS */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Key Benefits
            </h2>

            <ul className="space-y-3 text-[17px] leading-relaxed text-gray-800">

              <li className="flex items-start gap-2 text-lg">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <span>Faster time to market with fewer errors.</span>
              </li>

              <li className="flex items-start gap-2 text-lg">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <span>Cost saving by minimizing rework and material waste.</span>
              </li>

              <li className="flex items-start gap-2 text-lg">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <span>Improved design reliability through early validation.</span>
              </li>

              <li className="flex items-start gap-2 text-lg">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <span>Optimized performance for cost, quality, and efficiency.</span>
              </li>

              <li className="flex items-start gap-2 text-lg">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <span>Transparent communication at every stage.</span>
              </li>

              <li className="flex items-start gap-2 text-lg">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <span>Increased customer satisfaction with better outcomes.</span>
              </li>

            </ul>

          </div>

        </div>


        {/* APPLICATIONS SECTION */}
        <div ref={applicationsRef} className="mt-20 pt-4">
          <h2 className="text-3xl font-semibold tracking-wide border-b pb-3 mb-6">
            Applications
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "Jigs & Fixtures",
              "Special purpose machine",
              "Dies & Molds",
              "M/c installation structure",
              "Fine blanking tool",
              "Inspection gauges",
              "Material handling equipment",
              "Press tool",
            ].map((item, index) => (
              <div
                key={index}
                className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
              >

                {/* IMAGE (ONLY THIS WILL BLUR) */}
                <div className="relative h-44 w-full">
                  <img
                    src={`/images/${index + 1}.jpg`}
                    alt={item}
                    className="h-full w-full object-fill transition duration-300 group-hover:blur-sm group-hover:brightness-75"
                  />

                  {/* CENTER TITLE ON HOVER (NOT BLURRED) */}
                  <div
                    className="absolute inset-0 flex items-center justify-center 
                        text-white font-semibold text-[16px] opacity-0
                        transition duration-300 group-hover:opacity-100 pointer-events-none"
                  >
                    {item}
                  </div>
                </div>

                {/* BOTTOM TITLE (ALWAYS VISIBLE, DOES NOT BLUR) */}
                <div className="bg-blue-900 text-white text-center py-2 text-sm font-medium">
                  {item}
                </div>

              </div>
            ))}

          </div>
        </div>




        {/* CHILDREN (Hero, etc.) */}
        <div className="mt-10">{children}</div>

      </div>
    </div>
  );
}