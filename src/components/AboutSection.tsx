import { useEffect, useRef, useState } from 'react';
import { User, Star, TrendingUp, CheckCircle } from 'lucide-react';
import aymanAvatar from '@/assets/ayman-avatar.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML5', percentage: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', percentage: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 80, color: 'from-yellow-500 to-yellow-600' },
    { name: 'C#', percentage: 75, color: 'from-purple-500 to-purple-600' },
    { name: 'React', percentage: 70, color: 'from-cyan-500 to-cyan-600' },
    { name: 'SQL Server', percentage: 70, color: 'from-red-500 to-red-600' },
  ];

  const qualities = [
    { icon: Star, title: 'Sérieux', description: 'Engagement total dans chaque projet' },
    { icon: TrendingUp, title: 'Adaptable', description: 'Flexibilité face aux nouvelles technologies' },
    { icon: CheckCircle, title: 'Motivé', description: 'Passion constante pour l\'apprentissage' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="nature-orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`section-title-nature ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            À Propos de Moi
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Découvrez mon parcours, mes compétences et ma passion pour le développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="glass-card-nature p-8 relative">
              {/* Featured Project Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent text-charcoal-pro px-4 py-2 rounded-full text-sm font-bold shadow-glow">
                ⭐ Projet Vedette
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src={aymanAvatar}
                    alt="Ayman El Badri"
                    className="w-32 h-32 rounded-full border-4 border-primary/30 shadow-glow"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gradient mb-2">Ayman El Badri</h3>
                <p className="text-lg text-primary mb-4">Étudiant Développeur Full Stack Passionné</p>
                <p className="text-muted-foreground leading-relaxed">
                  Étudiant avec une solide foundation en développement web, créateur d'un système de rendez-vous 
                  dentaire complet. Sérieux, adaptable et motivé à apprendre dans une entreprise.
                </p>
              </div>

              {/* Featured Project Highlight */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-primary mb-2">🦷 Système de Rendez-vous Dentaire</h4>
                <p className="text-muted-foreground text-sm">
                  Application web complète développée dans le cadre d'un projet académique, 
                  incluant la gestion des patients et des praticiens.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['HTML5', 'CSS3', 'JavaScript', 'C#', 'SQL Server'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qualities */}
              <div className="grid grid-cols-3 gap-4">
                {qualities.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="font-semibold text-sm mb-1">{title}</h5>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="glass-card-nature p-8">
              <div className="flex items-center mb-8">
                <User className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gradient">Compétences Techniques</h3>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.percentage}%</span>
                    </div>
                    
                    <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-glow`}
                        style={{
                          width: isVisible ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${0.5 + index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">1+</div>
                    <div className="text-sm text-muted-foreground">Projet Principal</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">6+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;