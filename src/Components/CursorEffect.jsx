import { useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const location = useLocation();

  const handleMouseMove = (e) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
  };

  const updateCursor = () => {
    pos.current.x += (targetPos.current.x - pos.current.x) * 0.15;
    pos.current.y += (targetPos.current.y - pos.current.y) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${pos.current.x - 25}px, ${pos.current.y - 25}px)`;
    }

    requestAnimationFrame(updateCursor);
  };

  const addHoverListeners = () => {
    const hoverElements = document.querySelectorAll("[data-hover]");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  };

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.style.backgroundColor = "transparent";
      cursorRef.current.style.border = "1px solid #aaff5d";
      cursorRef.current.style.height = "75px";
      cursorRef.current.style.width = "75px";
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.backgroundColor = "#2a3d1d90";
      cursorRef.current.style.border = "none";
      cursorRef.current.style.height = "30px";
      cursorRef.current.style.width = "30px";
    }
  };

  useLayoutEffect(() => {
    updateCursor();
    document.addEventListener("mousemove", handleMouseMove);
    const cleanupHoverListeners = addHoverListeners();

    const observer = new MutationObserver(() => {
      cleanupHoverListeners();
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cleanupHoverListeners();
    };
  }, []);

  useLayoutEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = "translate(0, 0)";
      cursorRef.current.style.width = "30px";
      cursorRef.current.style.height = "30px";
      cursorRef.current.style.backgroundColor = "#2a3d1d80";
      cursorRef.current.style.border = "none";
    }
  }, [location]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[30px] h-[30px] bg-[#1F2B15] rounded-full pointer-events-none transition-all duration-300 ease-out z-50"
    />
  );
};

export default CursorEffect;
