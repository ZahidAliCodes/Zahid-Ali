import { useState, useEffect } from "react";
import zahid from "../assets/zahid.png";
import Resume from "../assets/Resume.pdf";

const titles = ["Front-End Developer", "Web Designer"];

const Aside = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const speed = 150;
  const delayBetweenTitles = 1500;

  useEffect(() => {
    if (index < titles[titleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + titles[titleIndex][index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, delayBetweenTitles);
    }
  }, [index, titleIndex]);
  const socialLinks = {
    "linkedin-in": "https://www.linkedin.com/in/zahidalicodes",
    "upwork": "https://www.upwork.com/freelancers/zahidalicodes",
    "github-alt": "https://github.com/ZahidAliCodes",
    "youtube": "https://www.youtube.com/@zahidalicoder", // replace with your real URL
    "instagram": "https://www.instagram.com/zahid_maher_322?igsh=NXQ3bHA0djZhYWF3&utm_source=qr", // replace with your real URL
  };
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Zahid_Ali.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lg:w-[27%] w-full hidden xl:block rounded-4xl p-10 border border-[#414141] backdrop-blur-lg z-10">
   <div className="h-[60%] rounded-2xl overflow-hidden glitch">
  <img
    className="object-cover h-full w-full"
    src={zahid}
    alt="zahid"
  />
  <div className="glitch__layers">
    <div className="glitch__layer"></div>
    <div className="glitch__layer"></div>
    <div className="glitch__layer"></div>
  </div>
</div>
      <div className="flex-grow flex flex-col items-center pt-5 h-[40%]">
        <h1 className="text-center text-[24px] font-[500] font-play tracking-wide text-light">
          Zahid Ali
        </h1>
        <h2 className="text-center text-[14px] font-[400] font-play tracking-wide text-[#bbbaa6]">
          {displayedText}
          <span className="animate-blink">_</span>
        </h2>

        {/* Social Media Links */}
        <ul className="flex gap-3 pt-3 h-auto">
  {Object.entries(socialLinks).map(([icon, url]) => (
    <li key={icon} className="group h-auto" data-hover>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[rgba(255,255,255,.12)] h-[40px] w-[40px] rounded-full flex items-center justify-center"
      >
        <i
          className={`fa-brands fa-${icon} text-[#bbbaa6] text-[14px] group-hover:text-secondary transition-colors duration-300`}
        ></i>
      </a>
    </li>
  ))}
</ul>


        <button
          onClick={handleDownload}
          data-hover
          className="mt-8 bg-secondary cursor-pointer text-primary w-full rounded-lg font-medium h-[50px] font-play transition-all duration-300 shadow-md"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Aside;
