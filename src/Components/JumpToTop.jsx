import { useEffect, useState } from "react";

export default function JumpToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const heading = document.getElementById("heading");
    if (heading) {
      heading.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 md:p-3 z-40 right-5 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-colors"
      aria-label="Jump to top"
    >
      ↑
    </button>
  );
}
