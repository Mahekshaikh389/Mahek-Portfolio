
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import Mahekimage from '../assets/Mahek-photo.jpg';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .animated-border {
            background: linear-gradient(45deg, #9c79e8, #d1c2f2, #9c79e8);
            background-size: 300% 300%;
            animation: gradient-shift 3s ease infinite;
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .slide-up {
            animation: slideUp 0.8s ease-out;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in-left {
            animation: fadeInLeft 1s ease-out;
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .fade-in-right {
            animation: fadeInRight 1s ease-out 0.3s both;
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .floating-element {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .profile-glow {
            box-shadow: 0 0 50px rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
          }

          .profile-glow:hover {
            box-shadow: 0 0 80px rgba(156, 121, 232, 0.5);
            transform: scale(1.05);
          }

          .text-gradient {
            background: linear-gradient(135deg, #d1c2f2, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .highlight-text {
            background: linear-gradient(135deg, #9c79e8, #d1c2f2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .social-icon {
            background: rgba(156, 121, 232, 0.1);
            border: 1px solid rgba(156, 121, 232, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            background: rgba(156, 121, 232, 0.2);
            border-color: rgba(156, 121, 232, 0.5);
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 10px 25px rgba(156, 121, 232, 0.2);
          }

          .scroll-indicator {
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          .parallax-bg {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.6;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .btn-glow {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .btn-glow::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
          }

          .btn-glow:hover::before {
            left: 100%;
          }

          .btn-glow:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(156, 121, 232, 0.3);
          }

          .typewriter-container {
            min-height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .tech-tag {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            border: 1px solid rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
          }

          .tech-tag:hover {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.3), rgba(209, 194, 242, 0.2));
            transform: translateY(-2px);
          }

          .greeting-badge {
            background: rgba(156, 121, 232, 0.1);
            border: 1px solid rgba(156, 121, 232, 0.3);
            backdrop-filter: blur(10px);
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(156, 121, 232, 0.3); }
            50% { box-shadow: 0 0 30px rgba(156, 121, 232, 0.5); }
          }

          .status-badge {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
            border: 1px solid rgba(34, 197, 94, 0.3);
            color: rgb(34, 197, 94);
            animation: statusPulse 2s ease-in-out infinite;
          }

          @keyframes statusPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `
      }} />
      
      <div id="home" className="relative  flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 2xl:px-60 py-8  mt-10lg:py-0 overflow-hidden">
        
        {/* Dynamic Background Elements */}
        <div 
          className="parallax-bg w-96 h-96 bg-[#9c79e8]"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${10 + mousePosition.x * 0.05}%`,
          }}
        />
        <div 
          className="parallax-bg w-64 h-64 bg-[#d1c2f2]"
          style={{
            bottom: `${15 + mousePosition.y * 0.08}%`,
            right: `${20 + mousePosition.x * 0.07}%`,
          }}
        />

        {/* Left Content Section */}
        <div className={`w-full lg:flex-1 relative z-10 ${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
          <div id="about" className="p-4 sm:p-6 lg:p-10 min-h-screen flex items-center justify-center slide-up">
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              
              {/* Greeting Badge */}
              <div className="greeting-badge inline-flex items-center px-4 py-2 rounded-full mb-6">
                <span className="text-[#d1c2f2] text-sm font-medium">👋 Hello, I'm</span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gradient leading-tight">
                Mahek Shaikh
              </h1>
              
              {/* Dynamic Typewriter */}
              <div className="typewriter-container text-xl sm:text-2xl lg:text-3xl font-medium mb-8">
                <span className="highlight-text">
                  <Typewriter
                    words={['Full-Stack Developer', 'Problem Solver', 'Tech Innovator', 'Code Enthusiast']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={2000}
                  />
                </span>
              </div>

              {/* About Description with Enhanced Styling */}
              <div className="space-y-6 text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg">
                  I'm a final-year <span className="highlight-text font-semibold">Electronics and Telecommunication</span> student at MIT-WPU
                  with a strong passion for building real-world, impactful applications. I specialize in{" "}
                  <span className="highlight-text font-semibold">full-stack web development</span>, working with modern technologies.
                </p>
                
                <p className="text-base sm:text-lg">
                  During my internship at{" "}
                  <span className="highlight-text font-semibold">Haawks IT Service Pvt Ltd</span>, I built decentralized storage systems,
                  authentication flows, and file management features using cutting-edge tools like Clerk and Filecoin.
                </p>
                
                <p className="text-base sm:text-lg">
                  I'm always eager to learn new technologies, tackle challenging problems, and collaborate on exciting projects. 
                  My goal is to use technology to solve real-world problems and create meaningful user experiences.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8 mb-8">
                {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'].map((tech) => (
                  <span key={tech} className="tech-tag px-3 py-1 text-sm font-medium text-[#d1c2f2] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 mb-8 justify-center lg:justify-start">
                <div className="p-[2px] rounded-xl animated-border">
                  <button className="btn-glow px-8 py-4 bg-[#120a24] hover:bg-[#1a0f2e] text-white w-full sm:w-48 rounded-xl font-semibold relative z-10">
                    View Projects
                  </button>
                </div>

                <div className="p-[2px] rounded-xl animated-border">
                  <a href="/Mahek_Resume.docx.pdf" download>
                    <button className="btn-glow px-8 py-4 text-white w-full sm:w-48 rounded-xl font-semibold flex items-center justify-center gap-2 relative z-10">
                      <FaDownload className="text-sm" />
                      Download CV
                    </button>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8 justify-center lg:justify-start">
                <a href="#" className="social-icon p-3 rounded-full hover:text-[#d1c2f2] transition-colors">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/mahek-shaikh-3b628a1bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BuNGA81khS5qP71GIx2KcGQ%3D%3D" className="social-icon p-3 rounded-full hover:text-[#d1c2f2] transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="scroll-indicator flex flex-col items-center lg:items-start text-[#9c79e8] opacity-70">
                <span className="text-sm mb-2">Scroll to explore</span>
                <FaArrowDown className="text-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={`relative z-10 flex-shrink-0 ${isVisible ? 'fade-in-right' : 'opacity-0'}`}>
          <div className="relative flex justify-center">
            {/* Floating decorative elements */}
            <div className="floating-element absolute -top-8 -left-8 w-16 h-16 bg-[#9c79e8]/20 rounded-full backdrop-blur-sm"></div>
            <div className="floating-element absolute -bottom-6 -right-6 w-12 h-12 bg-[#d1c2f2]/30 rounded-full backdrop-blur-sm" style={{animationDelay: '2s'}}></div>
            
            {/* Profile Image */}
            <div className="profile-glow w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm transition-all duration-500 relative">
              <img
                src={Mahekimage}
                alt="Mahek Shaikh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              
              {/* Status Badge */}
              <div className="status-badge absolute top-4 right-4 px-3 py-1 backdrop-blur-sm text-xs font-semibold rounded-full">
                Available for Work
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="px-3 py-1 bg-[#9c79e8]/20 backdrop-blur-sm border border-[#9c79e8]/30 rounded-full text-xs font-medium text-[#d1c2f2]">
                1 Years
              </div>
              <div className="px-3 py-1 bg-[#9c79e8]/20 backdrop-blur-sm border border-[#9c79e8]/30 rounded-full text-xs font-medium text-[#d1c2f2]">
                10+ Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
