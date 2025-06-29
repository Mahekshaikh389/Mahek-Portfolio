import { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "mahekm389@gmail.com",
      href: "mailto:mahekm389@gmail.com",
      color: "#9c79e8"
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+91 7028897443",
      href: "tel:+917028897443",
      color: "#d1c2f2"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Pune, Maharashtra",
      href: "#",
      color: "#9c79e8"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahek-shaikh-3b628a1bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BuNGA81khS5qP71GIx2KcGQ%3D%3D",
      color: "#0077B5"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "#333"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-card {
            backdrop-filter: blur(16px);
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.1), rgba(209, 194, 242, 0.05));
            border: 1px solid rgba(156, 121, 232, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .contact-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(156, 121, 232, 0.1), transparent);
            transition: left 0.8s ease;
          }

          .contact-card:hover::before {
            left: 100%;
          }

          .contact-card:hover {
            transform: translateY(-8px);
            border-color: rgba(156, 121, 232, 0.4);
            box-shadow: 0 20px 40px rgba(156, 121, 232, 0.15);
          }

          .social-link {
            background: rgba(156, 121, 232, 0.1);
            border: 1px solid rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .social-link::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(156, 121, 232, 0.2);
            border-radius: 50%;
            transition: all 0.4s ease;
            transform: translate(-50%, -50%);
          }

          .social-link:hover::before {
            width: 300px;
            height: 300px;
          }

          .social-link:hover {
            transform: translateY(-3px) scale(1.05);
            border-color: rgba(156, 121, 232, 0.5);
            box-shadow: 0 10px 25px rgba(156, 121, 232, 0.2);
          }

          .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-out {
            opacity: 0;
            transform: translateY(50px);
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .section-title {
            background: linear-gradient(135deg, #d1c2f2, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #9c79e8, #d1c2f2);
            border-radius: 2px;
          }

          .floating-bg {
            position: absolute;
            opacity: 0.1;
            pointer-events: none;
            animation: float 8s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-30px) rotate(2deg); }
            66% { transform: translateY(-15px) rotate(-2deg); }
          }

          .contact-hero {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.1), rgba(209, 194, 242, 0.05));
            border: 1px solid rgba(156, 121, 232, 0.2);
            backdrop-filter: blur(16px);
          }

          @media (max-width: 768px) {
            .contact-card:hover {
              transform: translateY(-4px);
            }
            
            .social-link:hover {
              transform: translateY(-2px) scale(1.02);
            }
          }
        `
      }} />
      
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden" ref={sectionRef}>
        {/* Floating background elements */}
        <div className="floating-bg top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 bg-[#9c79e8] rounded-full blur-3xl"></div>
        <div className="floating-bg bottom-16 sm:bottom-32 right-10 sm:right-20 w-32 sm:w-56 h-32 sm:h-56 bg-[#d1c2f2] rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Ready to collaborate on exciting projects or just want to say hello? 
              I'd love to hear from you!
            </p>
          </div>

          {/* Contact Hero Card */}
          <div className={`contact-hero rounded-2xl p-8 sm:p-12 mb-12 ${isVisible ? 'animate-in' : 'animate-out'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d1c2f2] mb-4">Get in Touch</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to connect, I'm always excited to meet new people and explore new possibilities.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="contact-card block p-6 sm:p-8 rounded-xl group text-center"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#9c79e8]/20 to-[#d1c2f2]/20 flex items-center justify-center border border-[#9c79e8]/30">
                      <contact.icon 
                        className="text-2xl sm:text-3xl transition-colors duration-300"
                        style={{ color: hoveredCard === index ? contact.color : '#d1c2f2' }}
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2">{contact.label}</p>
                      <p className="text-sm sm:text-base text-white font-medium group-hover:text-[#d1c2f2] transition-colors break-words">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-semibold text-[#d1c2f2] mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-4 sm:p-6 rounded-xl relative z-10"
                    title={social.label}
                  >
                    <social.icon className="text-2xl sm:text-3xl text-[#d1c2f2] hover:text-white transition-colors relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#9c79e8]/20 to-[#d1c2f2]/20 backdrop-blur-sm border border-[#9c79e8]/30 rounded-full hover:border-[#9c79e8]/50 transition-all duration-300 group">
              <span className="text-sm sm:text-base text-white font-medium">💼 Open to new opportunities</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}