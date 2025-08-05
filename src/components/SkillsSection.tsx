import { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Monitor, Server, GitBranch } from 'lucide-react';

// Custom hook for animated number counting
const useAnimatedNumber = (endValue: number, duration: number = 2000, startAnimation: boolean = false) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    if (!startAnimation) {
      setCurrentValue(0);
      return;
    }
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOutQuart * endValue);
      
      setCurrentValue(value);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, startAnimation]);
  
  return currentValue;
};

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'React', level: 70, icon: '⚛️' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'C#', level: 75, icon: '🔷' },
        { name: 'ASP.NET', level: 70, icon: '🌐' },
        { name: 'Node.js', level: 65, icon: '🟢' },
        { name: 'API REST', level: 70, icon: '🔗' },
      ]
    },
    {
      title: 'Base de Données',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'SQL Server', level: 70, icon: '🗄️' },
        { name: 'MongoDB', level: 60, icon: '🍃' },
        { name: 'MySQL', level: 65, icon: '🐬' },
        { name: 'Entity Framework', level: 65, icon: '🔧' },
      ]
    },
    {
      title: 'Outils & Design',
      icon: Palette,
      color: 'from-pink-500 to-violet-600',
      skills: [
        { name: 'Visual Studio', level: 80, icon: '💜' },
        { name: 'Git', level: 75, icon: '🔀' },
        { name: 'Figma', level: 60, icon: '🎨' },
        { name: 'Photoshop', level: 55, icon: '🖼️' },
      ]
    }
  ];

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, delay = 0 }: {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    delay?: number;
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    
    // Animated number counting
    const animatedPercentage = useAnimatedNumber(
      percentage, 
      1500, 
      isVisible
    );

    return (
      <div className="relative group">
        <svg width={size} height={size} className="transform -rotate-90 transition-transform duration-300 group-hover:scale-105">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out drop-shadow-lg"
            style={{ 
              transitionDelay: `${delay}ms`,
              filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))'
            }}
          />
          {/* Glow effect */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#glowGradient)"
            strokeWidth={strokeWidth + 2}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out opacity-30"
            style={{ transitionDelay: `${delay}ms` }}
          />
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-green))" />
              <stop offset="50%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--nature-light))" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-green))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--nature-light))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
        {/* Animated percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
              {animatedPercentage}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`section-title-nature ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Technologies & Outils
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Mon arsenal technique pour créer des applications web modernes et performantes
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass-card-nature p-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-glow`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-primary font-bold text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.7 + (categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills with Circular Progress */}
        <div className="mt-20">
          <h3 className={`text-3xl font-bold text-center text-gradient mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            Compétences Principales
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'HTML5', level: 90, icon: '🌐' },
              { name: 'JavaScript', level: 80, icon: '⚡' },
              { name: 'C#', level: 75, icon: '🔷' },
              { name: 'React', level: 70, icon: '⚛️' },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="glass-card-nature p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <CircularProgress 
                      percentage={skill.level} 
                      delay={1200 + index * 100}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold text-primary">{skill.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <div className="glass-card-nature p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-6">Mon Expertise en Chiffres</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">
                  {useAnimatedNumber(6, 2000, isVisible)}+
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Technologies</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">
                  {useAnimatedNumber(3, 2200, isVisible)}+
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Projets</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">
                  {useAnimatedNumber(100, 2400, isVisible)}%
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Motivation</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">
                  {useAnimatedNumber(1, 2600, isVisible)}
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;