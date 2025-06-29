

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-5 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center">
        <div className="inline-block px-8 py-4 bg-[#0a0a23] rounded-xl border border-[#1e1e35] shadow-md">
          <div className="space-x-6">
            {["home", "about", "projects", "skills", "experience", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                className="cursor-pointer text-[#9c79e8] font-medium hover:text-white transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
