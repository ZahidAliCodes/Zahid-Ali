import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import FiftySkills from "../assets/1.png";
import mvp from "../assets/3.png";
import TickJournal from "../assets/4.png";
import tickspike from "../assets/2.png";
import zahiai from "../assets/6.png";
import getbox from "../assets/5.png";

gsap.registerPlugin(Flip);

const projects = [
  { id: 1, category: "Website", title: "FiftySkills", image: FiftySkills, link: "https://zahidalicodes.github.io/FiftySkills/" },
  { id: 2, category: "Software", title: "MVP | Classroom HTML from Figma", image: mvp, link: "https://zahidalicodes.github.io/mvp-project/" },
  { id: 3, category: "Software", title: "TickJournal", image: TickJournal, link: "https://zahidalicodes.github.io/TickJournal-main/" },
  { id: 4, category: "Branding", title: "Tickspike", image: tickspike, link: "https://zahidalicodes.github.io/Tickspike-Main/" },
  { id: 5, category: "App", title: "ZahAI", image: zahiai, link: "https://zahidalicodes.github.io/ZahAI/" },
  { id: 6, category: "Website", title: "Get Box", image: getbox, link: "https://zahidalicodes.github.io/getbox/" },
];

const categories = ["All", "Website", "Software", "Branding", "App"];

const Portfolio = () => {
  const projectRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category) => {
    const state = Flip.getState(".project-item");
    setActiveCategory(category);
    const filtered =
      category === "All" ? projects : projects.filter((p) => p.category === category);
    setFilteredProjects(filtered);

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scale: true,
        absolute: false,
      });
    });
  };

  const handleMouseEnter = (e, id) => {
    const overlay = projectRefs.current[id];
    if (!overlay) return;

    const direction = getDirection(e, overlay.parentElement);
    let x = "0%", y = "0%";

    if (direction === "left") x = "-100%";
    if (direction === "right") x = "100%";
    if (direction === "top") y = "-100%";
    if (direction === "bottom") y = "100%";

    gsap.set(overlay, { x, y, opacity: 0 });
    gsap.to(overlay, { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e, id) => {
    const overlay = projectRefs.current[id];
    if (!overlay) return;

    const direction = getDirection(e, overlay.parentElement);
    let x = "0%", y = "0%";

    if (direction === "left") x = "-100%";
    if (direction === "right") x = "100%";
    if (direction === "top") y = "-100%";
    if (direction === "bottom") y = "100%";

    gsap.to(overlay, { x, y, opacity: 0, duration: 0.4, ease: "power2.in" });
  };

  const getDirection = (event, element) => {
    const { width, height, left, top } = element.getBoundingClientRect();
    const x = event.clientX - left - width / 2;
    const y = event.clientY - top - height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    if (angle >= -45 && angle <= 45) return "right";
    if (angle > 45 && angle < 135) return "bottom";
    if (angle >= 135 || angle <= -135) return "left";
    return "top";
  };

  return (
    <div className="xl:h-[75vh] overflow-auto md:w-full backdrop-blur-lg xl:p-10 ps-3 rounded-3xl">
      {/* Header and Category Buttons */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:pb-6">
        <div className="relative inline-block">
          <h1 className="text-[28px] text-light2 font-normal tracking-[1px] uppercase font-play2 relative z-10">
            <span className="text-secondary">P</span>ortfolio
          </h1>
          <span
            className="absolute top-2.5 -left-3 w-[30px] h-[30px] rounded-full z-0"
            style={{
              background: "linear-gradient(135deg, rgba(119, 198, 66, 0.5) 0%, rgba(119, 198, 66, 0.01) 100%)",
            }}
          ></span>
        </div>
        <div className="flex flex-wrap gap-4 lg:p-0 py-6">
          {categories.map((category) => (
            <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3.5 py-1.5 rounded-full cursor-pointer text-[12px] font-play tracking-widest uppercase transition-all
              ${activeCategory === category 
                ? "bg-secondary text-primary" 
                : "text-white lg:bg-[#161616] bg-[#1f1f1f]"}`
            }
          >
            {category}
          </button>
          
          ))}
        </div>
      </div>

      <div
        className="w-full h-[1.5px]"
        style={{
          background: "radial-gradient(ellipse at left, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      ></div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 grid-cols-1 w-full mt-10 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-item relative group h-[450px] rounded-[10px] overflow-hidden cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e, project.id)}
            onMouseLeave={(e) => handleMouseLeave(e, project.id)}
          >
            <div data-hover className="relative h-[78%] rounded-[10px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-110"
                loading="lazy"
              />
              <div
                ref={(el) => (projectRefs.current[project.id] = el)}
                className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(119,198,66,.4)_0%,rgba(119,198,66,.1)_100%)] opacity-0 rounded-[10px] pointer-events-auto"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl transition-all"
                >
                  <i className="fa-light fa-eye"></i>
                </a>
              </div>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex flex-col gap-1.5 mt-1.5">
                <p className="border font-play border-solid border-[rgba(255,255,255,.2)] text-[#bbbaa6] font-normal text-[12px] w-fit py-[4px] px-[10px] rounded-4xl">
                  {project.category}
                </p>
                <h3 className="text-light2 font-play font-medium text-[20px]">{project.title}</h3>
              </div>
              <a
                href={project.link}
                className="text-white font-play text-[32px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-light fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
