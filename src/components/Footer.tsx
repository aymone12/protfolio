import { Heart, Code, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À Propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'C#', 'SQL Server'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/aymanelbadri' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/aymanelbadri' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aymanelbadri' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Ayman El Badri
              </h3>
              <p className="text-primary font-medium mb-4">
                Développeur Full Stack Passionné
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Étudiant dévoué avec une passion pour le développement web moderne. 
                Créateur d'expériences numériques innovantes et de solutions techniques robustes.
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-2 bg-primary/20 text-primary px-3 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">Ouvert aux opportunités</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-glass border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Navigation</h4>
            <nav className="space-y-3">
              {navigationLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Compétences */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Compétences</h4>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Ayman El Badri. Tous droits réservés.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-1 mt-1">
                <span className="text-xs text-muted-foreground">Développé avec</span>
                <Heart className="w-3 h-3 text-red-400 fill-current" />
                <span className="text-xs text-muted-foreground">en React & GSAP</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Code className="w-4 h-4" />
                <span>React • TypeScript • Tailwind CSS</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-glass border border-primary/20 rounded-lg hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                Retour en haut
              </span>
            </button>
          </div>
        </div>

        {/* Final Touch */}
        <div className="text-center mt-8 pt-8 border-t border-primary/10">
          <p className="text-xs text-muted-foreground/60">
            Étudiant passionné • Toujours prêt à apprendre • Disponible pour collaborer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;