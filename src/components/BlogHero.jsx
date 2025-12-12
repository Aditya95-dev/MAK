import React from "react";
import { Link } from "react-router-dom";

const BlogHero = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 text-gray-900">
            {/* ===================== HERO BLOG ===================== */}
            <section className="relative w-full h-[450px] overflow-hidden">
                <img
                    src="https://png.pngtree.com/png-vector/20251108/ourlarge/pngtree-black-background-white-mechanical-patterns-industrial-aesthetic-design-png-image_17875107.webp"
                    alt="Mechanical Engineering Header"
                    className="w-full h-full object-cover"
                />

                {/* NAVY BLUE OVERLAY */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center px-6 md:px-20">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                            Mechanical Engineering Insights
                        </h1>
                        <p className="text-lg md:text-xl mt-4 text-gray-200 max-w-2xl">
                            Explore expert-level blogs on engineering innovation, simulation,
                            manufacturing technology, and product design.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================== BLOG CARDS ===================== */}
            <section className="py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
                    Latest Blogs
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* CARD 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
                        <img
                            src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
                            alt="Automation"
                            className="w-28 h-full object-cover flex-shrink-0"
                        />

                        <div className="p-3 flex flex-col justify-center">
                            <Link
                                to="/blog/cardone"
                                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
                            >
                                How FEA Helps Engineers Detect Product Failures Early
                            </Link>
                            <p className="text-gray-600 text-xs leading-snug">
                                How robotics and smart automation are transforming global
                                manufacturing ecosystems.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
                        <img
                            src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
                            alt="Automation"
                            className="w-28 h-full object-cover flex-shrink-0"
                        />

                        <div className="p-3 flex flex-col justify-center">
                            <Link
                                to="/blog/cardone"
                                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
                            >
                                How FEA Helps Engineers Detect Product Failures Early
                            </Link>
                            <p className="text-gray-600 text-xs leading-snug">
                                How robotics and smart automation are transforming global
                                manufacturing ecosystems.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
                        <img
                            src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
                            alt="Automation"
                            className="w-28 h-full object-cover flex-shrink-0"
                        />

                        <div className="p-3 flex flex-col justify-center">
                            <Link
                                to="/blog/cardone"
                                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
                            >
                                How FEA Helps Engineers Detect Product Failures Early
                            </Link>
                            <p className="text-gray-600 text-xs leading-snug">
                                How robotics and smart automation are transforming global
                                manufacturing ecosystems.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
                        <img
                            src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
                            alt="Automation"
                            className="w-28 h-full object-cover flex-shrink-0"
                        />

                        <div className="p-3 flex flex-col justify-center">
                            <Link
                                to="/blog/cardone"
                                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
                            >
                                How FEA Helps Engineers Detect Product Failures Early
                            </Link>
                            <p className="text-gray-600 text-xs leading-snug">
                                How robotics and smart automation are transforming global
                                manufacturing ecosystems.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
                        <img
                            src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
                            alt="Automation"
                            className="w-28 h-full object-cover flex-shrink-0"
                        />

                        <div className="p-3 flex flex-col justify-center">
                            <Link
                                to="/blog/cardone"
                                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
                            >
                                How FEA Helps Engineers Detect Product Failures Early
                            </Link>
                            <p className="text-gray-600 text-xs leading-snug">
                                How robotics and smart automation are transforming global
                                manufacturing ecosystems.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
                        <img
                            src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
                            alt="Automation"
                            className="w-28 h-full object-cover flex-shrink-0"
                        />

                        <div className="p-3 flex flex-col justify-center">
                            <Link
                                to="/blog/cardone"
                                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
                            >
                                How FEA Helps Engineers Detect Product Failures Early
                            </Link>
                            <p className="text-gray-600 text-xs leading-snug">
                                How robotics and smart automation are transforming global
                                manufacturing ecosystems.
                            </p>
                        </div>
                    </div>

                    {/* Repeat the same structure for remaining cards */}
                </div>
            </section>
        </div>
    );
};

export default BlogHero;