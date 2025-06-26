import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";
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
    <AuraBackground />
    <Header />
    <App />
  </StrictMode>
);

// all the aura / auto typer stuff
{
  function typeWriter(txt, elementId, speed, callback) {
    let i = 0;
    let targetElement = document.getElementById(elementId);
    function typing() {
      if (i < txt.length) {
        targetElement.textContent += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        // Append the blinking cursor at the end of the text
        targetElement.innerHTML += '<span class="cursor">|</span>';
        if (callback) {
          callback(); // Call the callback function if provided
        }
      }
    }
    typing();
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Start the first typewriter effect
    typeWriter("Ryan Daynes", "header-txt", 80, function () {});
  });
}
