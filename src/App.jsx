import { useRef, useEffect, useState } from "react";
import projectData from "./data.js";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import ScrollArrow from "./Components/ScrollArrow.jsx";
import JumpToTop from "./Components/JumpToTop.jsx";
import "./App.css";

export default function App() {
  const headerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setShowArrow(rect.top >= 0 && rect.bottom > 100);

      // Hide arrow while scrolling on mobile
      if (window.innerWidth < 768) {
        setShowArrow(false);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setShowArrow(rect.top >= 0 && rect.bottom > 100);
        }, 200); // Show arrow 200ms after scroll stops
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mappedData = projectData.map((data) => (
    <Projects
      key={data.id}
      title={data.title}
      image={data.image}
      description={data.description}
      live={data.live}
      github={data.github}
      stack={data.stack}
    />
  ));

  return (
    <main className="main-con">
      <JumpToTop ref={headerRef} />
      <ScrollArrow show={showArrow} />
      <div id="heading" ref={headerRef}>
        <Header />
      </div>
      <div id="about">
        <About />
      </div>

      <div id="projects" className="hero mb-30 mt-30 mt-50 z-30">
        <h1 className=" hero-title">My Projects</h1>
        <span className="hero-line"></span>
      </div>
      <div className="projects-list">{mappedData}</div>
      <Footer />
    </main>
  );
}
