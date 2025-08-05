import { useEffect, useRef, useState } from 'react';
import { Eye, Github, Star, ArrowRight, Calendar, Users, Database } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Développement Web 3D Interactif',
      description: 'Application web complète avec des éléments 3D interactifs et des animations avancées pour une expérience utilisateur immersive.',
      longDescription: 'Création d\'applications web modernes intégrant des éléments 3D, des animations fluides et des interfaces utilisateur innovantes. Utilisation de technologies de pointe pour créer des expériences web uniques.',
      category: 'Développement Web',
      technologies: ['React', 'Three.js', 'TypeScript', 'GSAP', 'WebGL'],
      featured: true,
      status: 'Terminé',
      icon: Calendar,
      image: '/images/3d-interactive-web.jpg',
      features: [
        'Éléments 3D interactifs',
        'Animations fluides',
        'Interface utilisateur moderne',
        'Performance optimisée',
        'Design responsive',
        'Expérience immersive'
      ]
    },
    {
      id: 2,
      title: 'Portfolio 3D Moderne',
      description: 'Site portfolio avec design futuriste, animations 3D et interface utilisateur innovante pour présenter mes compétences.',
      longDescription: 'Portfolio personnel avec design glassmorphique, intégrations 3D avancées et animations GSAP pour créer une présentation unique de mes projets et compétences.',
      category: 'Portfolio Personnel',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Spline 3D'],
      featured: true,
      status: 'En développement',
      icon: Users,
      image: '/images/3d-portfolio.jpg',
      features: [
        'Design glassmorphique',
        'Animations 3D avancées',
        'Interface interactive',
        'Responsive design',
        'Performance optimisée',
        'Présentation unique'
      ]
    },
    {
      id: 3,
      title: 'Site Web Gaming',
      description: 'Plateforme gaming avec interface utilisateur moderne, éléments interactifs et design inspiré des jeux vidéo.',
      longDescription: 'Développement d\'un site web dédié au gaming avec des éléments visuels inspirés des jeux vidéo, des animations dynamiques et une interface utilisateur engageante.',
      category: 'Gaming & Divertissement',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'WebGL'],
      featured: false,
      status: 'Terminé',
      icon: Database,
      image: '/images/gaming-website.jpg',
      features: [
        'Design gaming immersif',
        'Animations dynamiques',
        'Interface interactive',
        'Éléments visuels avancés',
        'Performance gaming',
        'Expérience utilisateur unique'
      ]
    },
    {
      id: 4,
      title: 'Interface Gaming 3D',
      description: 'Interface utilisateur 3D pour applications gaming avec des éléments interactifs et un design futuriste.',
      longDescription: 'Création d\'interfaces utilisateur 3D pour le secteur du gaming, intégrant des éléments visuels avancés, des animations fluides et une expérience utilisateur optimisée pour les joueurs.',
      category: 'UI/UX Gaming',
      technologies: ['React', 'Three.js', 'WebGL', 'GSAP', 'TypeScript'],
      featured: true,
      status: 'En développement',
      icon: Database,
      image: '/images/3d-gaming-ui.jpg',
      features: [
        'Interface 3D avancée',
        'Éléments interactifs',
        'Design futuriste',
        'Animations gaming',
        'Performance optimisée',
        'Expérience immersive'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'En développement': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Planifié': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="nature-orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${25 + Math.random() * 40}px`,
              height: `${25 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`section-title-nature ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Mes Projets
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Découvrez mes réalisations et projets qui démontrent mes compétences en développement full-stack
          </p>
        </div>

        {/* Projects Grid - 2 per row */}
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card-nature overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-white/90 font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gradient group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-xs text-yellow-400 ml-1 font-medium">Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md border border-muted/20 font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Fonctionnalités
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 neuro-nature-button px-4 py-2.5 flex items-center justify-center space-x-2 text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    <span>Détails</span>
                  </button>
                  <button className="px-4 py-2.5 bg-glass border border-primary/20 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action with Silk Background */}
        <div className={`relative text-center mt-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="relative glass-card-nature p-8 max-w-2xl mx-auto overflow-hidden">
            {/* Lightweight Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gradient mb-4">Intéressé par mes projets ?</h3>
              <p className="text-muted-foreground mb-6">
                Je suis toujours ouvert à discuter de nouvelles opportunités et collaborations
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="neuro-nature-button inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
              >
                <span>Discutons de votre projet</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;