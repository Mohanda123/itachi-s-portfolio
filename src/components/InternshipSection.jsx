import { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";

const InternshipSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll(".scroll-animate");
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("in-view");
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

  const internships = [
    {
    id: 1,
    company: "VCODEX",
    role: "Python Full Stack Developer Intern",
    duration: "Present",
    description:"Developed and optimized the LifeConnect platform using Python Django, improving efficiency by 70%. Handled frontend/backend development, database integration, and API management.",
    techStack: ["Python", "Django", "Full Stack", "API", "Database"]
    },
    {
      id: 2,
      company: "Crisp Systems",
      role: "Blockchain Intern",
      duration: "July 11, 2023 – July 26, 2023",
      description:
        "Completed internship training in Blockchain technology, exploring decentralized systems and smart contracts as part of the B.Tech curriculum.",
      techStack: ["Blockchain", "Web3 Basics", "Crisp Labs"]
    },
    {
      id: 3,
      company: "Extazee Software Solutions",
      role: "IoT Trainee",
      duration: "July 17, 2024 – August 2, 2024",
      description:
        "Underwent IoT training covering architecture layers and real-world IoT applications across industries.",
      techStack: ["IoT", "Sensors", "Embedded Systems"]
    },
    {
      id: 4,
      company: "Coregenic IT Solution",
      role: "Python Developer Trainee",
      duration: "February 2024 – April 2024",
      description:
        "Completed a comprehensive 2-month course on core Python fundamentals with hands-on problem solving and project-based learning.",
      techStack: ["Python", "Problem Solving", "OOP"]
    }
  ];

  return (
    <section id="internships" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
              My <span className="text-primary">Internships</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Hands-on experiences that helped me apply my knowledge in real-world projects and team collaborations.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((intern) => (
              <div
                key={intern.id}
                className="bg-gradient-card p-6 rounded-lg border border-border scroll-animate"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{intern.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {intern.company} • <span>{intern.duration}</span>
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{intern.description}</p>
                <div className="flex flex-wrap gap-2">
                  {intern.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
