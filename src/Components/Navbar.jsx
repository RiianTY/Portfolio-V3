import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY === 0);
      if (currentY === 0) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
        setMenuOpen(false); // Hide menu if open when scrolling down
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section by id and close menu (for mobile)
  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full py-4 z-50 transition-transform duration-300 ${
        atTop
          ? "bg-transparent"
          : "sm:bg-transparent lg:bg-black md:bg-black xl:bg-black"
      } shadow-none ${visible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ width: "100vw" }}
    >
      {/* Hamburger/X button for small screens */}
      <button
        className={`sm:hidden absolute right-6 top-4 z-50 flex flex-col justify-center items-center w-10 h-10 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-24"
        }`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
        style={{ pointerEvents: visible ? "auto" : "none" }}
      >
        {/* Hamburger to X animation */}
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 mb-1 ${
            menuOpen ? "rotate-40 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 mb-1 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop nav */}
      <ul className="hidden sm:flex justify-center gap-8 list-none m-0 p-0">
        <li>
          <button
            onClick={() => handleNavClick("header")}
            className="bg-transparent border-none cursor-pointer text-white font-semibold hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("about")}
            className="bg-transparent border-none cursor-pointer text-white font-semibold hover:text-gray-400 transition-colors duration-200"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("projects")}
            className="bg-transparent border-none cursor-pointer text-white font-semibold hover:text-gray-400 transition-colors duration-200"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            href="mailto:info@ryandaynes.uk"
            className="bg-transparent border-none cursor-pointer text-white font-semibold hover:text-gray-400 transition-colors duration-200"
          >
            <a href="mailto:info@ryandaynes.uk">Contact</a>
          </button>
        </li>
      </ul>

      {/* Mobile menu - full screen */}
      <ul
        className={`sm:hidden fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center gap-10 transition-transform duration-300 z-40 ${
          menuOpen && visible ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: menuOpen ? "black" : "black",
          transition: "background-color 0.3s",
        }}
      >
        <li>
          <button
            onClick={() => handleNavClick("header")}
            className="bg-transparent border-none cursor-pointer text-white text-2xl font-semibold hover:text-cyan-300 transition-colors duration-200"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("about")}
            className="bg-transparent border-none cursor-pointer text-white text-2xl font-semibold hover:text-cyan-300 transition-colors duration-200"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("projects")}
            className="bg-transparent border-none cursor-pointer text-white text-2xl font-semibold hover:text-cyan-300 transition-colors duration-200"
          >
            Projects
          </button>
        </li>
        <li>
          <button className="bg-transparent border-none cursor-pointer text-white text-2xl font-semibold hover:text-cyan-300 transition-colors duration-200">
            <a href="mailto:info@ryandaynes.uk">Contact</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
