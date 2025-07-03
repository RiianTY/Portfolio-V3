import { useRef, useEffect, useState } from "react";
import projectData from "./data.js";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import ScrollArrow from "./Components/ScrollArrow.jsx";
import JumpToTop from "./Components/JumpToTop.jsx";

export default function App() {
  const headerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      // Show arrow only when header is mostly visible at the top
      setShowArrow(rect.top >= 0 && rect.bottom > 100);
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

      <div id="projects" className="hero mb-15 z-30">
        <h1 className=" hero-title">My Projects</h1>
        <span className="hero-line"></span>
      </div>
      <div className="projects-list">{mappedData}</div>
      <Footer />
    </main>
  );
}
