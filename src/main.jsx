import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";

function AuraBackground() {
  const auraRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      const xPos = event.clientX;
      const yPos = event.clientY;
      if (auraRef.current) {
        auraRef.current.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px, rgba(0, 175, 175, 1) 40px, rgba(0, 75, 75, 1) 200px)`;
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={auraRef} className="mouse-aura-bg">
      <div className="glass-bg"></div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <AuraBackground />
    <App />
  </StrictMode>
);

// all the aura / auto typer stuff
