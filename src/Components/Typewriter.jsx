import { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100, loop = false }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, loop]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="mb-0">
      {displayed}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
};

export default Typewriter;
