import React from "react";
import Testimonials from "./Testimonials";

// Reusable Resume Component
const Resume = ({ title, icon, items }) => {
    return (
        <div className="relative">
            {/* Section Header */}
            <div className="mb-8">
                <button className="flex items-center h-fit mt-[40px] border border-[#333333] rounded-4xl text-white px-[14px] py-[8px] tracking-widest gap-2 text-[13px] font-light font-play">
                    <span>{icon}</span>
                    {title.toUpperCase()}
                </button>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Left vertical line */}
                <div className="absolute  top-6 bottom-6 w-px bg-[#2b2b2d]"></div>

                {/* Items */}
                <div className="relative  space-y-5">
                    {items.slice(0, 2).map((item, index) => (
                        <div key={index} className={`relative ${index !== 1 ? "pb-5" : "pb-0"}`}>
                            {/* Gradient line under the card except the last one */}
                            {index !== 1 && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#2b2b2d] to-[#2d2d2d10]"></div>}

                            {/* Dot */}
                            <div className="absolute -left-[4px] w-[9px] h-[9px] top-6 bg-gray rounded-full"></div>

                            {/* Card */}
                            <div className="bg-[rgba(255,255,255,.02)]  border ml-5 border-[#2a2a2a] rounded-2xl p-5  hover:shadow-md">
                                <span className="text-[13px] font-play inline-block w-[92px] text-center bg-[#141414] border-1 border-[#666666] text-[#666666]   rounded-[4px]">{item.year}</span>
                                <h3 className="text-light2 text-[15px] font-[500] font-play mt-3 mb-1">{item.title}</h3>
                                <p className="text-[#999999] text-sm font-play font-normal mb-3">{item.location}</p>
                                <p className="text-gray font-play font-normal text-[15px] mb-4">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Section Combining Experience and Education/Courses
const EducationCoursesTimeline = () => {
    const courses = [
        {
            year: "2021",
            title: "Frontend Mastery",
            location: "Online",
            description: "Mastered HTML, CSS, JS & React, focused on real-world design-to-code skills.",
        },
        {
            year: "2020",
            title: "Responsive Web Design",
            location: "freeCodeCamp",
            description: "Learned modern layout techniques using Flexbox, Grid & Media Queries.",
        },
    ];

    const education = [
        {
            year: "2016 - 2020",
            title: "Bachelor in Computer Science",
            location: "Virtual University of Pakistan",
            description: "Studied software development, data structures, and web technologies.",
        },
        {
            year: "2014 - 2016",
            title: "Intermediate (Pre-Engineering)",
            location: "Punjab Group of Colleges",
            description: "Focused on mathematics, physics, and computer fundamentals.",
        },
    ];

    return (
        <div className="xl:h-[75vh] overflow-auto backdrop-blur-lg xl:p-10 px-3 rounded-3xl">
            {/* Resume Header */}
            <div className="relative inline-block pb-6">
                <h1 className="text-[28px]  text-light2 font-normal tracking-[1px] uppercase font-play2 relative z-10">
                    <span className="text-secondary">R</span>
                    esume
                </h1>
                <span
                    className="absolute top-2.5  -left-3 w-[30px] h-[30px] rounded-full z-0"
                    style={{
                        background: "linear-gradient(135deg, rgba(119, 198, 66, 0.5) 0%, rgba(119, 198, 66, 0.01) 100%)",
                    }}
                ></span>
            </div>
            <div
                className="w-full h-[1.5px]"
                style={{
                    background: "radial-gradient(ellipse at left, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
                }}
            ></div>
            {/* Experience Section */}
            <div className="flex flex-col w-full xl:flex-row gap-5 xl:mt-10">
                <div className="flex items-center h-fit w-fit mt-[40px] border border-[#333333] rounded-4xl text-white px-[14px] py-[8px] tracking-widest gap-2 text-[13px] font-light font-play">
                    <i className="fa-light fa-business-time"></i>
                    <span>EXPERIENCE</span>
                </div>

                <div className="relative md:w-[100%] lg:w-[100%] xl:w-full">
                    <div className="md:flex hidden justify-between text-secondary text-[15px] font-play font-normal">
                        <span className="absolute mt-2 left-1/4 transform -translate-x-1/2">2022 – Present</span>
                        <span className="absolute mt-2 right-1/4 transform translate-x-1/2">2020 – Present</span>
                    </div>

                    <div className="absolute top-15 hidden md:block left-0 right-0 h-[1px] rounded-2xl bg-[#3d3d3d]"></div>
                    <div className="absolute top-[55px] hidden md:block left-1/4 transform -translate-x-1/2 w-2.5 h-2.5 bg-secondary rounded-full"></div>
                    <div className="absolute top-[55px] hidden md:block right-1/4 transform translate-x-1/2 w-2.5 h-2.5 bg-secondary rounded-full"></div>

                    <div className="flex flex-col md:flex-row md:mt-23 md:justify-around md:text-center gap-10 md:gap-4">
                        <div className="md:w-[45%]">
                            <h3 className="text-[18px] text-[#F1FBE8] font-play font-medium">Front-end Developer</h3>
                            <p className="mt-2 uppercase text-[14px] font-play font-normal text-[#7b7b7b] tracking-wide">Reyman Technologies, Remote</p>
                            <p className="mt-4 text-gray  font-normal font-play text-[15px]">
                                Worked on a real estate platform, turning UI/UX into functional React components, collaborating with backend teams, and ensuring pixel-perfect design implementation.
                            </p>
                        </div>
                        <div className="md:w-[45%]">
                            <h3 className="text-[18px] text-[#F1FBE8] font-play font-medium">Freelance Front-end Developer</h3>
                            <p className="mt-2 uppercase text-[14px] font-normal font-play  text-[#7b7b7b]  tracking-wide">Upwork & Fiverr</p>
                            <p className="mt-4 text-gray font-normal font-play text-[15px]">
                                Created responsive websites, Figma/XD/PSD to HTML conversions, and handled multiple client projects with a focus on performance and design accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education & Courses Section */}
            <div className="grid  md:grid-cols-1  xl:grid-cols-2 mt-8 gap-12">
                <Resume title="Courses" icon={<i className="fa-solid fa-school"></i>} items={courses} />
                <Resume title="Education" icon={<i className="fa-solid fa-building-columns"></i>} items={education} />
            </div>
            < Testimonials/>
        </div>
    );
};

export default EducationCoursesTimeline;
