import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Database, Palette } from 'lucide-react';
import TextType from './TextType';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on mount
    const timeline = {
      headline: { delay: 0.5, duration: 2.5 },
      subtitle: { delay: 1.2, duration: 1.5 },
      cta: { delay: 2, duration: 1 },
    };

    // Create floating orbs
    const createOrbs = () => {
      if (!heroRef.current) return;
      
      for (let i = 0; i < 12; i++) {
        const orb = document.createElement('div');
        orb.className = 'nature-orb';
        orb.style.width = `${20 + Math.random() * 40}px`;
        orb.style.height = orb.style.width;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.animationDelay = `${Math.random() * 4}s`;
        heroRef.current.appendChild(orb);
      }
    };

    createOrbs();
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline Container */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <iframe 
          src='https://my.spline.design/vaporwavebackground-PEEWYlnTksJnc5lQNV8dHVDz/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-charcoal/70 via-deep-navy/50 to-royal-blue/30" />

      {/* Tech Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${6 + Math.random() * 12}px`,
              height: `${6 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20 md:mt-32">
        {/* Animated Greeting */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <TextType 
            text={["Salut, Je suis"]}
            as="span"
            className="text-lg md:text-xl text-primary font-medium"
            typingSpeed={100}
            pauseDuration={1000}
            showCursor={false}
            loop={false}
            initialDelay={500} variableSpeed={undefined} onSentenceComplete={undefined}          />
        </div>

        {/* Animated Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 mt-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <TextType 
            text={["Ayman El Badri"]}
            as="span"
            className="text-gradient"
            typingSpeed={120}
            pauseDuration={1500}
            showCursor={false}
            loop={false}
            initialDelay={1800} variableSpeed={undefined} onSentenceComplete={undefined}          />
        </h1>

        {/* Animated Subtitle with Multiple Roles */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <TextType 
            text={[
              "Développeur Full Stack",
              "Créateur d'Expériences Web",
              "Passionné de Technologie",
              "Développeur Frontend",
              "Développeur Backend"
            ]}
            as="span"
            className="text-muted-foreground"
            typingSpeed={75}
            pauseDuration={2000}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-primary animate-pulse"
            loop={true}
            initialDelay={3500} variableSpeed={undefined} onSentenceComplete={undefined}          />
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          Étudiant passionné par le développement web avec des bases solides en{' '}
          <span className="text-primary font-semibold">HTML, CSS, JavaScript</span> et{' '}
          <span className="text-primary font-semibold">C#</span>. 
          Créateur d'un système de rendez-vous dentaire dans le cadre d'un projet académique.
        </p>

        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '1.5s' }}>
          <div className="glass-card-nature p-4 hover:shadow-glow transition-all duration-300">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <div className="glass-card-nature p-4 hover:shadow-glow transition-all duration-300">
            <Database className="w-8 h-8 text-primary" />
          </div>
          <div className="glass-card-nature p-4 hover:shadow-glow transition-all duration-300">
            <Palette className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-scale-in" style={{ animationDelay: '1.8s' }}>
          <button
            onClick={scrollToNextSection}
            className="neuro-nature-button group inline-flex items-center space-x-3"
          >
            <span className="text-lg font-semibold">Collaborons Ensemble</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Status Indicator */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '2.1s' }}>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Disponible pour des opportunités</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;