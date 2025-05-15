import React, { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

// Components
import CursorEffect from "./Components/CursorEffect";
import Aside from "./Components/Aside";

// Pages
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

const menuItems = [
  { icon: "fa-user-tie", label: "About", path: "/about" },
  { icon: "fa-briefcase", label: "Works", path: "/portfolio" },
  { icon: "fa-files", label: "Resume", path: "/resume" },
  { icon: "fa-code", label: "Skills", path: "/skills" },
  {
    icon: "fa-paper-plane",
    label: "Contact",
    submenu: [
      { label: "Email", path: "mailto:zahidalicodes@gmail.com" },
      { label: "Upwork", path: "https://www.upwork.com/freelancers/zahidalicodes" },
      { label: "LinkedIn", path: "https://www.linkedin.com/in/zahidalicodes/" },
      { label: "Fiverr", path: "https://www.fiverr.com/s/qD48YBp" },
      { label: "Facebook", path: "https://www.facebook.com/share/1NL9Ev16Ac/?mibextid=wwXIfr" },
      { label: "WhatsApp", path: "https://wa.me/03447094001" },
    ],
  },
];

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactDropdown = () => setIsContactOpen((prev) => !prev);
  const closeContactDropdown = () => setIsContactOpen(false);

  return (
    <BrowserRouter>
      <CursorEffect />
      <div className="w-screen h-screen overflow-auto xl:overflow-hidden bg-[#171717]">
        <div className="relative w-full h-screen xl:bg-[url('./assets/abstract-background.png')] bg-cover bg-center">
          <div className="max-w-full w-full h-full xl:max-w-[1700px] lg:px-[6%] px-[4%] py-[5%] flex xl:flex-row flex-col justify-between items-start mx-auto overflow-x-scroll">
            <Aside />

            <div className="xl:w-[69%] w-full flex xl:gap-0 gap-6 h-full flex-col xl:flex-col relative z-10">
              
              {/* ✅ Mobile Top Menu */}
              <ul className="xl:hidden grid grid-cols-2  md:flex flex-wrap  gap-4 p-4 w-full  z-20">
                {menuItems.map(({ icon, label, path, submenu }) => (
                  <li key={label} className="relative font-play border-b border-[#252527] cursor-pointer flex justify-center backdrop-blur-sm duration-300 text-white text-[12px] font-[400] border  rounded-[15px] py-[10px] px-[16px] ">
                    {!submenu ? (
                    <NavLink
                    to={path}
                    data-hover
                    className={({ isActive }) =>
                      ` ${isActive ? "text-secondary" : "hover:text-secondary"}`
                    }
                    onClick={closeContactDropdown}
                  >
                    <i className={`fa-light text-[14px] pr-2 ${icon}`}></i>
                    {label}
                  </NavLink>
                    ) : (
                      <div>
                        <div
                          onClick={toggleContactDropdown}
                          className="flex items-center gap-1 text-white text-sm cursor-pointer hover:text-secondary"
                        >
                          <i className={`fa-light ${icon}`}></i>
                          {label}
                        </div>
                        {isContactOpen && (
                          <ul className="absolute bg-[#0f0f0f] border border-[#282828] rounded-md mt-2 z-50 shadow-lg p-2 min-w-[150px]">
                            {submenu.map((item) => (
                              <li key={item.label}>
                                <a
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-sm text-white hover:text-secondary py-1"
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* ✅ Desktop Sidebar Menu */}
              <ul className="hidden xl:flex xl:w-full shadow-none bg-transparent px-0 py-0 flex-row gap-4 mb-12">
                {menuItems.map(({ icon, label, path, submenu }) => (
                  <li
                    key={label}
                    className={`relative font-play border-b border-[#252527] cursor-pointer backdrop-blur-sm duration-300 text-white text-[12px] font-[400] border  rounded-[15px] py-[10px] px-[16px] ${
                      submenu ? "z-30" : ""
                    }`}
                  >
                    {!submenu ? (
                      <NavLink
                        to={path}
                        data-hover
                        className={({ isActive }) =>
                          `flex items-center gap-1.5  flex-row ${isActive ? "text-secondary" : "hover:text-secondary"}`
                        }
                        onClick={closeContactDropdown}
                      >
                        <i className={`fa-light text-[14px] pr-1.5 ${icon}`}></i>
                        {label}
                      </NavLink>
                    ) : (
                      <>
                        <div
                        data-hover
                          className={`flex flex-row  gap-2 items-center ${isContactOpen ? "text-secondary" : "hover:text-secondary"}`}
                          onClick={toggleContactDropdown}
                        >
                          <i className={`fa-light text-[14px] ${icon}`}></i>
                          {label}
                        </div>
                        {isContactOpen && (
                          <ul className="absolute top-full left-0 mt-2 flex flex-col bg-[#0f0f0f] border border-[#282828] rounded-md min-w-[160px] z-50 shadow-lg">
                            {submenu.map((item) => (
                              <li key={item.label}>
                                <a
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 text-[12px] hover:text-secondary text-white"
                                  onClick={closeContactDropdown}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* Page Content */}
              <div className="z-10 w-full relative">
                <AnimatedRoutes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
