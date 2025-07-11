import { Heart } from 'lucide-react';
import kolamPattern from '../assets/kolam-pattern.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="font-tamil font-bold text-2xl text-primary mb-4 animate-glow-pulse">
                மோகன்
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Turning ideas into digital reality with code, care, and creativity.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block mx-auto text-muted-foreground hover:text-primary transition-fast animated-underline"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Cultural Element */}
            <div className="text-center md:text-right">
              <div className="inline-block">
                
                <p className="font-tamil text-accent text-sm mt-2">
                   படைப்பாற்றல் + புதுமை
                </p>
                <p className="text-xs text-muted-foreground">
                  Creativity + Innovation
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="text-primary mx-2 animate-pulse" size={16} fill="currentColor" />
                <span>by <span className="text-primary font-medium">Mohan</span></span>
              </div>

              {/* Year and Tamil Blessing */}
              <div className="text-center md:text-right">
                <p className="text-muted-foreground text-sm mb-1">
                  © {currentYear} All rights reserved
                </p>
                <p className="font-tamil text-accent text-sm">
                  வெற்றி பெறுவீர்
                </p>
                <p className="text-xs text-muted-foreground">
                  May you succeed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;