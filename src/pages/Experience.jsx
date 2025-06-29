

// import { FaLaptopCode } from "react-icons/fa";

// export default function Experience() {
//   return (
//     <section id="experience" className="p-8 relative">
//       <h2 className="text-5xl font-bold mb-8  text-center text-[#d1c2f2] mt-10 ">Experience</h2>

//       <div className="relative rounded-[24px] overflow-hidden shadow-xl max-w-6xl mx-auto">
//         {/* Background Image */}
//         <img
//           src="/icons/experience-bg.jpg"
//           alt="Experience background"
//           className="absolute inset-0 w-full h-full object-cover opacity-70"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#110f30e7] to-[#060333e7] backdrop-blur-md"></div>

//         {/* Content */}
//         <div className="relative z-10 p-10 text-white">
//           <div className="flex flex-col items-center text-center">
//             <FaLaptopCode className="text-5xl text-purple-300 mb-4" />
//             <h3 className="font-bold text-4xl mb-4 text-[#c9c7f2]">
//               Haawks IT Service Pvt Ltd – Full Stack Intern
//             </h3>
//           </div>
//           <p className="text-lg leading-relaxed mt-4">
//             Currently working as a Full Stack Developer Intern at Haawks IT
//             Service Pvt Ltd, where I’m contributing to the development of a
//             decentralized file storage platform. My responsibilities include
//             building responsive front-end interfaces using{" "}
//             <strong className="text-[#c9c7f2]">React</strong>, designing secure
//             authentication flows with{" "}
//             <strong className="text-[#c9c7f2]">Clerk</strong>, and integrating
//             back-end services with{" "}
//             <strong className="text-[#c9c7f2]">Node.js</strong>,{" "}
//             <strong className="text-[#c9c7f2]">Express</strong>, and{" "}
//             <strong className="text-[#c9c7f2]">MongoDB</strong>. I also
//             implemented file upload/download functionality using{" "}
//             <strong className="text-[#c9c7f2]">Filecoin</strong>, and ensured
//             seamless user experience through optimized API handling and clean UI
//             design. This internship has significantly sharpened my real-world
//             skills in full-stack development and decentralized technologies.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
























import { useState, useEffect, useRef } from "react";
import { FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCode, FaDatabase, FaCloud, FaUsers } from "react-icons/fa";

const experiences = [
  {
    company: "Haawks IT Service Pvt Ltd",
    position: "Full Stack Developer Intern",
    duration: "202 - Present",
    location: "Remote",
    type: "Internship",
    description: "Contributing to the development of a decentralized file storage platform with cutting-edge technologies and modern development practices.",
    responsibilities: [
      "Building responsive front-end interfaces using React with modern hooks and state management",
      "Designing secure authentication flows with Clerk for seamless user experience",
      "Integrating back-end services with Node.js, Express, and MongoDB for robust data handling",
      "Implementing file upload/download functionality using Filecoin blockchain technology",
      "Optimizing API performance and ensuring clean, maintainable UI design patterns"
    ],
    technologies: [
      { name: "React", icon: FaCode },
      { name: "Node.js", icon: FaDatabase },
      { name: "MongoDB", icon: FaDatabase },
      { name: "Filecoin", icon: FaCloud },
      { name: "Clerk", icon: FaUsers }
    ],
    achievements: [
      "Improved file upload performance by 40%",
      "Implemented secure authentication for 1000+ users",
      "Contributed to 5+ major feature releases"
    ]
  }
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
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

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .experience-card {
            backdrop-filter: blur(20px);
            background: linear-gradient(135deg, rgba(17, 15, 48, 0.8), rgba(6, 3, 51, 0.9));
            border: 1px solid rgba(156, 121, 232, 0.3);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .experience-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(156, 121, 232, 0.1), transparent);
            transition: left 1s ease;
          }

          .experience-card:hover::before {
            left: 100%;
          }

          .experience-card:hover {
            transform: translateY(-8px);
            border-color: rgba(156, 121, 232, 0.6);
            box-shadow: 
              0 25px 50px rgba(156, 121, 232, 0.2),
              0 0 30px rgba(156, 121, 232, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          .timeline-line {
            position: absolute;
            left: 2rem;
            top: 4rem;
            bottom: 2rem;
            width: 2px;
            background: linear-gradient(to bottom, #9c79e8, #d1c2f2);
            opacity: 0.6;
          }

          .timeline-dot {
            position: absolute;
            left: 1.5rem;
            top: 3.5rem;
            width: 12px;
            height: 12px;
            background: linear-gradient(135deg, #9c79e8, #d1c2f2);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(156, 121, 232, 0.5);
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(156, 121, 232, 0.5); }
            50% { box-shadow: 0 0 30px rgba(156, 121, 232, 0.8); }
          }

          .tech-badge {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            border: 1px solid rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
          }

          .tech-badge:hover {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.3), rgba(209, 194, 242, 0.2));
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 5px 15px rgba(156, 121, 232, 0.2);
          }

          .responsibility-item {
            position: relative;
            padding-left: 1.5rem;
            transition: all 0.3s ease;
          }

          .responsibility-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 6px;
            height: 6px;
            background: linear-gradient(135deg, #9c79e8, #d1c2f2);
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .responsibility-item:hover {
            color: #d1c2f2;
            transform: translateX(8px);
          }

          .responsibility-item:hover::before {
            box-shadow: 0 0 10px rgba(156, 121, 232, 0.6);
            transform: scale(1.5);
          }

          .achievement-badge {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
            border: 1px solid rgba(34, 197, 94, 0.3);
            color: rgb(34, 197, 94);
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
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #9c79e8, #d1c2f2);
            border-radius: 2px;
          }

          .floating-bg {
            position: absolute;
            opacity: 0.1;
            pointer-events: none;
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
          }

          .company-logo {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            border: 2px solid rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
          }

          .company-logo:hover {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 10px 25px rgba(156, 121, 232, 0.3);
          }
        `
      }} />
      
      <section id="experience" className="py-20 px-6 relative overflow-hidden" ref={sectionRef}>
        {/* Floating background elements */}
        <div className="floating-bg top-20 left-10 w-40 h-40 bg-[#9c79e8] rounded-full blur-3xl"></div>
        <div className="floating-bg bottom-32 right-20 w-56 h-56 bg-[#d1c2f2] rounded-full blur-3xl" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6 inline-block">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building innovative solutions and gaining hands-on experience with cutting-edge technologies
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Elements */}
                <div className="timeline-line"></div>
                <div className="timeline-dot"></div>

                {/* Experience Card */}
                <div className={`experience-card ml-16 rounded-2xl p-8 ${isVisible ? 'animate-in' : 'animate-out'}`}
                     style={{ animationDelay: `${index * 200}ms` }}>
                  
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="company-logo w-16 h-16 rounded-xl flex items-center justify-center">
                        <FaLaptopCode className="text-2xl text-[#d1c2f2]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                        <p className="text-[#d1c2f2] font-semibold text-lg">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaCalendarAlt className="text-[#9c79e8]" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaMapMarkerAlt className="text-[#9c79e8]" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-[#9c79e8]" />
                        <span className="px-3 py-1 bg-[#9c79e8]/20 text-[#d1c2f2] rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h4 className="text-[#d1c2f2] font-semibold mb-3 flex items-center gap-2">
                      <FaCode className="text-[#9c79e8]" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-badge flex items-center gap-2 px-4 py-2 rounded-lg">
                          <tech.icon className="text-[#9c79e8] text-sm" />
                          <span className="text-[#d1c2f2] font-medium text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-[#d1c2f2] font-semibold mb-4 flex items-center gap-2">
                      <FaBriefcase className="text-[#9c79e8]" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="responsibility-item text-gray-300">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-[#d1c2f2] font-semibold mb-3 flex items-center gap-2">
                      <FaUsers className="text-[#9c79e8]" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span key={achIndex} className="achievement-badge px-3 py-1 rounded-full text-sm font-medium">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9c79e8]/20 to-[#d1c2f2]/20 backdrop-blur-sm border border-[#9c79e8]/30 rounded-full hover:border-[#9c79e8]/50 transition-all duration-300 group cursor-pointer">
              <FaBriefcase className="text-[#d1c2f2] group-hover:animate-bounce" />
              <span className="text-white font-medium">Open to new opportunities</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}