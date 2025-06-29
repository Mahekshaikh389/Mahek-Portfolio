

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
   
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
        setIsMobileMenuOpen(false); // close mobile menu when scrolling
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .navbar-glass {
            backdrop-filter: blur(20px);
            background: linear-gradient(135deg, rgba(10, 10, 35, 0.9), rgba(30, 30, 53, 0.8));
            border: 1px solid rgba(156, 121, 232, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(156, 121, 232, 0.1);
          }

          .nav-link {
            position: relative;
            transition: all 0.3s ease;
            padding: 8px 16px;
            border-radius: 8px;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #9c79e8, #d1c2f2);
            transform: translateX(-50%);
            transition: width 0.3s ease;
          }

          .nav-link:hover::before {
            width: 80%;
          }

          .nav-link.active {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            border: 1px solid rgba(156, 121, 232, 0.3);
            color: #d1c2f2;
          }

          .nav-link.active::before {
            width: 80%;
          }

          .nav-link:hover {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.1), rgba(209, 194, 242, 0.05));
            transform: translateY(-2px);
          }

          .mobile-menu {
            backdrop-filter: blur(20px);
            background: linear-gradient(135deg, rgba(10, 10, 35, 0.95), rgba(30, 30, 53, 0.9));
            border: 1px solid rgba(156, 121, 232, 0.2);
            animation: slideDown 0.3s ease-out;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mobile-nav-link {
            transition: all 0.3s ease;
            padding: 12px 20px;
            border-radius: 8px;
            margin: 4px 0;
          }

          .mobile-nav-link:hover {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.1), rgba(209, 194, 242, 0.05));
            transform: translateX(8px);
          }

          .mobile-nav-link.active {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            border: 1px solid rgba(156, 121, 232, 0.3);
            color: #d1c2f2;
          }

          .hamburger-btn {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.1), rgba(209, 194, 242, 0.05));
            border: 1px solid rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
          }

          .hamburger-btn:hover {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .nav-link:hover {
              transform: none;
            }
          }
        `
      }} />

      {/* Desktop & Mobile Navbar */}
      <div
        className={`fixed top-3 sm:top-5 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center px-4">
          <div className="navbar-glass inline-block px-2 sm:px-8 py-2 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg max-w-full">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2 lg:space-x-4">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  smooth
                  duration={500}
                  className={`nav-link cursor-pointer font-medium transition-colors duration-200 text-sm lg:text-base ${
                    activeSection === section.id 
                      ? "active text-[#d1c2f2]" 
                      : "text-[#9c79e8] hover:text-white"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation - Hamburger & Brand */}
            <div className="md:hidden flex items-center justify-between w-full">
              <div className="text-lg font-bold text-[#d1c2f2]">
                Mahek Shaikh
              </div>
              <button
                onClick={toggleMobileMenu}
                className="hamburger-btn p-2 rounded-lg focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl text-[#d1c2f2]" />
                ) : (
                  <FaBars className="text-xl text-[#d1c2f2]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4">
            <div className="mobile-menu rounded-xl p-4 shadow-lg">
              <div className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.id}
                    smooth
                    duration={500}
                    className={`mobile-nav-link cursor-pointer font-medium transition-colors duration-200 block ${
                      activeSection === section.id 
                        ? "active text-[#d1c2f2]" 
                        : "text-[#9c79e8] hover:text-white"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
