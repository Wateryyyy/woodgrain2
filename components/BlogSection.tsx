"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogSection = () => {
    return (
        <div className="bg-white text-black mt-36">
            <div className="container p-4 md:p-8 mx-auto">
                <div className="flex items-center justify-center mb-6">
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text text-lg md:text-xl font-semibold">
                        Blog
                    </span>
                </div>
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    What is new in the development world?
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Featured Article */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-200 p-4 rounded-lg shadow-md">
                        <Image
                            src="https://via.placeholder.com/600x400"
                            alt="The Rise of AI in Web Development: How Machine Learning is Transforming the Industry"
                            className="w-full h-[30rem] object-cover rounded-lg mb-4"
                            width={200}
                            height={100}
                        />
                        <h2 className="text-2xl font-semibold mb-2">The Rise of AI in Web Development: How Machine Learning is Transforming the Industry</h2>
                        <p className="text-gray-700">
                            Explore the impact of artificial intelligence and machine learning on web development, including practical applications and future trends.
                        </p>
                        <button className="bg-[#26152f] mt-5 shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                            Read Article
                        </button>
                    </div>

                    {/* Article 1 */}
                    <div className="col-span-1 bg-gray-200 p-4 rounded-lg shadow-md">
                        <Image
                            src="https://via.placeholder.com/300x200"
                            alt="Top 10 Modern JavaScript Frameworks to Watch in 2024"
                            className="w-full h-[30rem] object-cover rounded-lg mb-4"
                            width={300}
                            height={200}
                        />
                        <h2 className="text-xl font-semibold mb-2">Top 10 Modern JavaScript Frameworks to Watch in 2024</h2>
                        <p className="text-gray-700">
                            A detailed overview of the most popular and emerging JavaScript frameworks and libraries, their features, and why they’re gaining traction.
                        </p>
                        <button className="bg-[#26152f] mt-5 shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                            Read Article
                        </button>
                    </div>

                    {/* Article 2 */}
                    <div className="col-span-1 bg-gray-200 p-4 rounded-lg shadow-md">
                        <Image
                            src="https://via.placeholder.com/300x200"
                            alt="Best Practices for Building Scalable and Maintainable React Applications"
                            className="w-full h-[30rem] object-cover rounded-lg mb-4"
                            width={100}
                            height={100}
                        />
                        <h2 className="text-xl font-semibold mb-2">Best Practices for Building Scalable and Maintainable React Applications</h2>
                        <p className="text-gray-700">
                            Share tips and techniques for creating React applications that are both scalable and easy to maintain, covering component design, state management, and performance optimization.
                        </p>
                        <button className="bg-[#26152f] mt-5 shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                            Read Article
                        </button>
                    </div>
                    {/* Article 3 */}
                    <div className="col-span-1 bg-gray-200 p-4 rounded-lg shadow-md">
                        <Image
                            src="https://via.placeholder.com/300x200"
                            alt="Cybersecurity Trends: Protecting Your Applications in 2024"
                            className="w-full h-[30rem] object-cover rounded-lg mb-4"
                            width={100}
                            height={100}
                        />
                        <h2 className="text-xl font-semibold mb-2">Cybersecurity Trends: Protecting Your Applications in 2024</h2>
                        <p className="text-gray-700">
                            Analyze the latest trends in cybersecurity, including new threats, effective security measures, and best practices for safeguarding applications and user data.
                        </p>
                        <button className="bg-[#26152f] mt-5 shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                            Read Article
                        </button>
                    </div>
                    {/* Article 2 */}
                    <div className="col-span-1 bg-gray-200 p-4 rounded-lg shadow-md">
                        <Image
                            src="https://via.placeholder.com/300x200"
                            alt="Serverless Architecture: Pros, Cons, and Best Use Cases"
                            className="w-full h-[30rem] object-cover rounded-lg mb-4"
                            width={100}
                            height={100}
                        />
                        <h2 className="text-xl font-semibold mb-2">Serverless Architecture: Pros, Cons, and Best Use Cases</h2>
                        <p className="text-gray-700">
                            An in-depth look at serverless architecture, including its benefits, potential drawbacks, and scenarios where it’s particularly effective.
                        </p>
                        <button className="bg-[#26152f] mt-5 shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                            Read Article
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
