import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Snowfall = () => {
  const containerRef = useRef(null);
  const numFlakes = 100; // Number of snowflakes

  useEffect(() => {
    const flakes = containerRef.current.children;

    // Animate each flake for a realistic snowfall effect
    Array.from(flakes).forEach((flake) => {
      gsap.fromTo(
        flake,
        { y: "-10vh", x: "random(0, 100vw)" }, // Start above screen
        {
          y: "110vh", // Move below screen
          x: "+=random(-30, 30)", // Slight horizontal drift
          duration: "random(8, 15)", // Random falling speed
          ease: "linear", // Smooth movement
          repeat: -1, // Infinite loop
          delay: "random(0, 5)", // Staggered start times
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      {Array.from({ length: numFlakes }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-75"
          style={{
            width: `${Math.random() * 6 + 2}px`, // Snowflake size (2px - 8px)
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}vw`, // Random horizontal position
            top: `${Math.random() * -100}vh`, // Start offscreen
            filter: `blur(${Math.random() * 2}px)`, // Depth effect
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
