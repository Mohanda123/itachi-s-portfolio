import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.scroll-animate');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 150);
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

  const projects = [
    {
      id: 1,
      title: "LIFECONNECT: AI-ENHANCED DONOR SYSTEM USING ML",
      description: "LifeConnect is a web-based platform designed to facilitate blood and organ donation by efficiently connecting donors with recipients.",
      category: "ai",
      tags: ["Python", "Machine Learning", "Web Development", "Healthcare"],
      github: "https://github.com/mohan/lifeconnect",
      live: "https://lifeconnect.herokuapp.com",
      featured: true
    },
    {
      id: 2,
      title: "VIBE SYNC",
      description: "Sync music and chat with your friends! A platform for real-time music sharing and social interaction.",
      category: "fullstack",
      tags: ["Python", "Real-time Sync", "Chat System", "Music API"],
      github: "https://github.com/mohan/vibe-sync",
      live: "https://vibe-sync.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "ACE YOUR RESUME",
      description: "A career guidance platform that offers resume optimization, interview training, and LinkedIn profile enhancement to help job seekers improve their chances.",
      category: "fullstack",
      tags: ["Career Guidance", "Resume Optimization", "Interview Training", "LinkedIn"],
      github: "https://github.com/mohan/ace-your-resume",
      live: "https://ace-your-resume.com",
      featured: true
    },
    {
      id: 4,
      title: "MAAN MAYIL",
      description: "An e-commerce website for selling traditional clay pots and clay items, promoting eco-friendly products and cultural heritage.",
      category: "fullstack",
      tags: ["E-commerce", "Cultural Heritage", "Traditional Crafts", "Eco-friendly"],
      github: "https://github.com/mohan/maan-mayil",
      live: "https://maan-mayil.com",
      featured: false
    },
    {
      id: 5,
      title: "PERSONAL CHAT BOT",
      description: "An intelligent chatbot designed for personal assistance and customer service interactions.",
      category: "ai",
      tags: ["Chatbot", "Natural Language Processing", "AI", "Customer Service"],
      github: "https://github.com/mohan/personal-chatbot",
      live: "https://personal-chatbot.netlify.app",
      featured: false
    },
    {
      id: 6,
      title: "Time Tutor",
      description: "imeTutor is a free, AI-powered study planner built specially for students who love to learn at night! . It helps you create smart, personalized study schedules, track your progress, and stay motivated — all with a fun and friendly vibe.",
      category: "ai",
      tags: ["AI", "ML", "fullstack"],
      github: "https://github.com/mohan/extaze-iot",
      live: "https://extaze-iot.com",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'ai', label: 'AI & ML' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'iot', label: 'IoT' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my work in full-stack development, AI, and cultural technology projects 
              that bridge tradition with innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                  activeFilter === filter.key
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="scroll-animate group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-card p-6 rounded-lg border border-border hover-glow transition-smooth h-full">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-fast">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center text-accent text-sm mb-2">
                          <Sparkles size={16} className="mr-1" />
                          Featured Project
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-fast"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-fast"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 scroll-animate">
            <div className="bg-gradient-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Like What You See?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects that combine innovation with cultural heritage. 
                Let's collaborate on something amazing!
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-glow transition-smooth"
              >
                Start a Project Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;