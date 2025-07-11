import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroTemple from '../assets/hero-temple.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Machine Learning Engineer',
    'Innovation Builder'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    const typeWriter = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTemple})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Kolam Pattern Overlay */}
      <div className="absolute inset-0 kolam-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="scroll-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter">
            <span className="text-foreground">Hello, I'm </span>
            <span className="text-primary text-glow animate-glow-pulse">Mohan</span>
          </h1>
          
          <div className="h-20 mb-8">
            <h2 className="text-2xl md:text-4xl font-tamil font-medium text-accent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            "I'm Mohan, a passionate full-stack developer and AI enthusiast.
             I love turning complex problems into smart, user-friendly solutions."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-glow transition-smooth"
            >
              Explore My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Tamil Greeting */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="font-tamil text-accent mb-2">வணக்கம்</p>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;