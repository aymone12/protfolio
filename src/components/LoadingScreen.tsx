import { useEffect, useState } from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('');

  const stages = [
    { progress: 20, text: "Chargement des compétences..." },
    { progress: 45, text: "Préparation des projets..." },
    { progress: 70, text: "Optimisation de l'expérience..." },
    { progress: 90, text: "Finalisation..." },
    { progress: 100, text: "Prêt !" }
  ];

  useEffect(() => {
    let currentStageIndex = 0;
    const interval = setInterval(() => {
      if (currentStageIndex < stages.length) {
        const stage = stages[currentStageIndex];
        setProgress(stage.progress);
        setCurrentStage(stage.text);
        currentStageIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  const techParticles = [
    { icon: Code, label: 'HTML', delay: 0 },
    { icon: Database, label: 'C#', delay: 0.2 },
    { icon: Palette, label: 'CSS', delay: 0.4 },
    { icon: Zap, label: 'JS', delay: 0.6 },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-dark-charcoal via-deep-navy to-royal-blue flex items-center justify-center">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      {/* Main Content */}
      <div className="text-center z-10 max-w-md mx-auto px-6">
        {/* Name Animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-light-blue mb-2 animate-fade-in-up">
            AYMAN EL BADRI
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Développeur Full Stack
          </p>
          <p className="text-lg text-primary animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionné par le développement web
          </p>
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {techParticles.map(({ icon: Icon, label, delay }, index) => (
            <div
              key={index}
              className="flex flex-col items-center animate-scale-in"
              style={{ animationDelay: `${delay}s` }}
            >
              <div className="glass-card-nature p-4 mb-2 hover:shadow-glow transition-all duration-300">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="loading-bar w-full mb-4">
            <div 
              className="loading-progress transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground text-lg min-h-[1.5rem]">
            {currentStage}
          </p>
        </div>

        {/* Progress Percentage */}
        <div className="text-3xl font-bold text-primary">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;