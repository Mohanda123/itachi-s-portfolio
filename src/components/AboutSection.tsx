import { useEffect, useRef } from 'react';
import { Code, Brain, Palette, Globe } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
import kolamPattern from '../assets/kolam-pattern.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.scroll-animate');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
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

  const skills = [
    { name: 'Python Development', percentage: 90, icon: Code },
    { name: 'Artificial Intelligence', percentage: 85, icon: Brain },
    { name: 'Machine Learning', percentage: 80, icon: Brain },
    { name: 'Data Science', percentage: 85, icon: Globe },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <img src={kolamPattern} alt="Kolam Pattern" className="w-32 h-32 animate-float" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image & Info */}
            <div className="scroll-animate">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-glow border-4 border-primary/30">
                  <img 
                    src={profilePhoto} 
                    alt="Mohan - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center animate-float">
                  <Brain className="text-accent-foreground" size={32} />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 scroll-animate">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">B.Tech Artificial Intelligence & Data Science</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My passion lies in the pursuit of a Bachelor of Technology (BTech) degree specializing in Artificial Intelligence and Data Science. 
                  My focus on Python development has endowed me with invaluable experience in this dynamic field. 
                  Rooted in a solid educational foundation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I bring strong problem-solving and analytical skills, experimental learning and strong logical thinking abilities. 
                  I work collaboratively in a team environment and adapt to evolving technologies and programming languages.
                </p>
              </div>

              {/* Tamil Quote */}
              <div className="tamil-quote bg-gradient-card p-6 rounded-lg border border-border">
                <p className="font-tamil text-lg text-primary mb-2">
                  "கல்வி கற்றால் அது நம் வாழ்வை மாற்றும்"
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Education, when learned, transforms our life"
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 scroll-animate">
              Technical <span className="text-primary">Expertise</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="scroll-animate">
                  <div className="bg-gradient-card p-6 rounded-lg border border-border hover-glow transition-smooth">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <skill.icon className="text-primary-foreground" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <div className="flex justify-between items-center mt-2">
                          <div className="w-full bg-muted rounded-full h-2 mr-4">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-primary font-semibold">{skill.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;