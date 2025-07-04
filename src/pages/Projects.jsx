// const projects = [
//   {
//     title: "FullStack Stock Marketing App",
//     description: "A stock trading platform with live market data.",
//     tech: ["React", "Firebase"],
//     github: "https://github.com/yourlink",
//     live: "https://yourliveurl.com",
//   },

//    {
//     title: "Website for a go gulf company",
//     description: "A consurtancy website to set sup thir bussiness in dubai.",
//     tech: ["React", "Css", "Tailwind CSS", ],
//     github: "https://github.com/yourlink2",
//     live: "https://dubai-website-seven.vercel.app/",
//   },
//    {
//     title: "Decentralized File Storage",
//     description: "A web app that lets users upload, download, and store files securely using Filecoin.",
//     tech: ["React", "Node.js", "Clerk", "MongoDB", "Filecoin"],
//     github: "https://github.com/yourlink2",
//     live: "https://yourliveurl2.com",
//   },
  
// ];

// export default function Projects() {
//   return (
//     <div  id="projects" className="p-8 ">
//        <h2 className="text-5xl font-bold mb-4 text-center">A small selection of <span className="text-[#9c79e8]">recent projects</span></h2>
//        <div className=" flex flex-wrap justify-center gap-10">
//           {projects.map((proj) => (
//         <div key={proj.title} className="h-100 w-100 mb-4 border-black bg-linear-45 from [#14101c]  to-[#130929] p-4 rounded-[20px]  ">
//           <img src="./src/assets/zerodha-photo.png" className="h-55 mb-5 rounded-[20px]"></img>
//           <h3 className="text-xl font-semibold">{proj.title}</h3>
//           <p>{proj.description}</p>
//           <p className="mb-2 mt-5">Tech: {proj.tech.join(", ")}</p>
//           <a href={proj.github} target="_blank">GitHub</a> | <a href={proj.live} target="_blank">Live</a>
//         </div>

        
        
//        ))}
//        </div>
       


//     </div>



 
//   );
// }


























import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";
import Zerodha from '../assets/zerodha-photo.png';
import GOGULF from '../assets/GOGULF.png';

const projects = [
  {
    title: "FullStack Stock Marketing App",
    description: "A comprehensive stock trading platform featuring real-time market data, advanced charting, portfolio management, and seamless trading experiences.",
    tech: ["React", "Firebase", "Chart.js", "WebSocket"],
    github: "https://github.com/yourlink",
    live: "https://zerodha-frontend-gbml.onrender.com/",
    image: Zerodha,
    category: "Full-Stack",
    status: "Completed"
  },
  {
    title: "Dubai Business Consultancy Website",
    description: "A professional consultancy website designed to help businesses establish their presence in Dubai with modern UI/UX and responsive design.",
    tech: ["React", "CSS", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourlink2",
    live: "https://dubai-website-seven.vercel.app/",
    image: GOGULF,
    category: "Frontend",
    status: "Live"
  },
  {
    title: "Decentralized File Storage",
    description: "A secure web application leveraging blockchain technology that enables users to upload, download, and store files using Filecoin's decentralized network.",
    tech: ["React", "Node.js", "Clerk", "MongoDB", "Filecoin"],
    github: "https://github.com/yourlink2",
    live: "https://yourliveurl2.com",
    image:Zerodha,
    category: "Blockchain",
    status: "In Progress"
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...new Set([...prev, index])]);
              }, index * 200);
            });
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
          .project-card {
            backdrop-filter: blur(16px);
            background: linear-gradient(135deg, rgba(20, 16, 28, 0.7), rgba(19, 9, 41, 0.8));
            border: 1px solid rgba(156, 121, 232, 0.2);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(156, 121, 232, 0.1), transparent);
            transition: left 0.8s ease;
          }

          .project-card:hover::before {
            left: 100%;
          }

          .project-card:hover {
            transform: translateY(-12px) scale(1.02);
            border-color: rgba(156, 121, 232, 0.5);
            box-shadow: 
              0 25px 50px rgba(156, 121, 232, 0.15),
              0 0 30px rgba(156, 121, 232, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          .project-image {
            transition: all 0.5s ease;
            position: relative;
            overflow: hidden;
          }

          .project-card:hover .project-image {
            transform: scale(1.05);
          }

          .project-image::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, rgba(156, 121, 232, 0.1), rgba(209, 194, 242, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-card:hover .project-image::after {
            opacity: 1;
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

          .action-btn {
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.2), rgba(209, 194, 242, 0.1));
            border: 1px solid rgba(156, 121, 232, 0.3);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .action-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: linear-gradient(135deg, rgba(156, 121, 232, 0.3), rgba(209, 194, 242, 0.2));
            border-radius: 50%;
            transition: all 0.4s ease;
            transform: translate(-50%, -50%);
          }

          .action-btn:hover::before {
            width: 300px;
            height: 300px;
          }

          .action-btn:hover {
            border-color: rgba(156, 121, 232, 0.6);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(156, 121, 232, 0.2);
          }

          .status-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            backdrop-filter: blur(10px);
          }

          .status-completed {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
            color: rgb(34, 197, 94);
            border: 1px solid rgba(34, 197, 94, 0.3);
          }

          .status-live {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));
            color: rgb(59, 130, 246);
            border: 1px solid rgba(59, 130, 246, 0.3);
          }

          .status-progress {
            background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1));
            color: rgb(251, 191, 36);
            border: 1px solid rgba(251, 191, 36, 0.3);
          }

          .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-out {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .section-title {
            background: linear-gradient(135deg, #ffffff, #d1c2f2);
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
        `
      }} />
      
      <section id="projects" className="py-20 px-6 relative overflow-hidden" ref={sectionRef}>
        {/* Floating background elements */}
        <div className="floating-bg top-20 left-10 w-40 h-40 bg-[#9c79e8] rounded-full blur-3xl"></div>
        <div className="floating-bg bottom-32 right-20 w-56 h-56 bg-[#d1c2f2] rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A small selection of{" "}
              <span className="highlight-text">recent projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions built with modern technologies, 
              from full-stack applications to blockchain-powered platforms.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card relative rounded-2xl p-6 group ${
                  visibleProjects.includes(index) ? 'animate-in' : 'animate-out'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Status Badge */}
                <div className={`status-badge ${
                  project.status === 'Completed' ? 'status-completed' :
                  project.status === 'Live' ? 'status-live' : 'status-progress'
                }`}>
                  {project.status}
                </div>

                {/* Project Image */}
                <div className="project-image relative mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-[#d1c2f2]">{project.category}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#d1c2f2] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag px-3 py-1 text-xs font-medium text-[#d1c2f2] rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium relative z-10"
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </a>
                    
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium relative z-10"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9c79e8]/5 to-[#d1c2f2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9c79e8]/20 to-[#d1c2f2]/20 backdrop-blur-sm border border-[#9c79e8]/30 rounded-full hover:border-[#9c79e8]/50 transition-all duration-300 group cursor-pointer">
              <FaRocket className="text-[#d1c2f2] group-hover:animate-bounce" />
              <span className="text-white font-medium">More projects coming soon!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
