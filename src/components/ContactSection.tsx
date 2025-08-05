import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, User, MessageCircle, CheckCircle, Github, Linkedin, Twitter, Clock, Phone } from 'lucide-react';
import aymanAvatar from '@/assets/ayman-avatar.jpg';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const subjects = [
    'Opportunité de Collaboration',
    'Offre de Stage',
    'Discussion de Projet',
    'Question Technique',
    'Autre'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/aymanelbadri',
      color: 'hover:text-gray-400',
      description: 'Mes projets et contributions'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/aymanelbadri',
      color: 'hover:text-blue-400',
      description: 'Profil professionnel'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/aymanelbadri',
      color: 'hover:text-sky-400',
      description: 'Actualités tech'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`section-title-nature ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Contactez-moi
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Prêt à collaborer sur votre prochain projet ? Discutons de vos besoins !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="glass-card-nature p-8">
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gradient">Envoyez-moi un message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Nom Complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input-nature pl-12"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Adresse Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input-nature pl-12"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input-nature"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-input-nature resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neuro-nature-button w-full flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="glass-card-nature p-8">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <img
                    src={aymanAvatar}
                    alt="Ayman El Badri"
                    className="w-24 h-24 rounded-full border-4 border-primary/30 shadow-glow"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-3 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gradient mb-2">Ayman El Badri</h3>
                <p className="text-primary font-medium mb-2">Full Stack Développeur</p>
                <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Disponible pour des opportunités</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">aymanelbadriscg@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">Casablanca, Maroc</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Disponibilité</p>
                    <p className="text-muted-foreground"> Projets Freelance</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground">+212 620 5962 02</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-primary/20 pt-8">
                <h4 className="font-semibold text-primary mb-4 text-center">Suivez-moi</h4>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map(({ name, icon: Icon, url, color, description }, index) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 group ${color} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <Icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">{name}</span>
                      <span className="text-xs text-muted-foreground text-center">{description}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Vous avez un projet en tête ?
                </p>
                <p className="text-primary font-medium">
                  Collaborons ensemble pour le réaliser !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;