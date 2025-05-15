import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AsideMbl from "./AsideMbl";

const About = () => {
  const texts = ["Zahid Ali", "Front-End Developer", "Web Designer"];
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: 20, opacity: 0, duration: 0.5,
        onComplete: () => {
          setIndex((i) => (i + 1) % texts.length);
          gsap.fromTo(textRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "4+", label1: "Years of", label2: "Experience" },
    { number: "99", label1: "Completed", label2: "Projects" },
    { number: "20+", label1: "Awards", label2: "Winning" }
  ];

  return (
    <div className="flex sm:w-full flex-col pb-10 gap-3  md:gap-12 xl:h-[75vh] xl:p-10 backdrop-blur-lg   rounded-3xl">
      <AsideMbl/>
      <div className="overflow-hidden h-[40px] flex items-center">
        <h2 className="text-light2 font-play font-[400] md:text-2xl">
          Hello, I’m{" "}
          <span ref={textRef} className="inline-block min-w-[200px]" style={{ color: "#77c643" }}>
            {texts[index]}
          </span>
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <p className="font-play2 md:text-[36px] text-[18px] xl:text-[45px] leading-12 font-medium text-light">
        Certified Front-End Developer & UI/UX
          <span className="bg-secondary text-primary mx-2 md:my-5 rounded-[40px]  md:py-[10px] font-semibold px-[16px] inline-block transform -rotate-4">
            Professional
          </span>
          Crafting Pixel-Perfect Web Experiences.
        </p>
      </div>

      <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-play text-gray mt-2">
        With over 4 years of experience in developing high-performance, scalable web applications. Skilled in responsive design, pixel-perfect UI implementation, and optimizing user experiences. Proven ability to collaborate with cross-functional teams and deliver front-end solutions that align with business goals.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <h1 className="text-4xl sm:text-5xl text-light3 font-play2 font-normal">{stat.number}</h1>
            <ul>
              <li className="font-normal text-[14px] sm:text-[15px] font-play text-gray">{stat.label1}</li>
              <li className="font-normal text-[14px] sm:text-[15px] font-play text-gray">{stat.label2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
