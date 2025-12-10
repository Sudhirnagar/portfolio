import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Mobile Development', icon: Smartphone, color: 'from-blue-500 to-cyan-500', items: ['Flutter', 'Firebase', 'Android', 'iOS'] },
    { name: 'Programming Languages', icon: Code, color: 'from-purple-500 to-pink-500', items: ['C', 'C++', 'Dart', 'SQL'] },
    { name: 'DSA & Problem Solving', icon: Palette, color: 'from-green-500 to-emerald-500', items: ['CodeChef (1612)', '5★ HackerRank', '750+ Problems', 'Algorithms'] }
  ];

  const projects = [
    {
      title: 'Chat Application',
      description: 'Real-time chat app with Google Sign-In, text/photo messaging, and AI chatbot integration using Google Gemini API. Optimized for low-bandwidth conditions.',
      tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'Gemini API'],
      gradient: 'from-violet-600 to-indigo-600',
      link: 'https://github.com/Sudhirnagar/chat_app'
    },
    {
      title: 'FeedYou - Food Delivery App',
      description: 'Cross-platform food delivery application with admin panel, real-time order management, and Stripe payment integration.',
      tech: ['Flutter', 'Firebase', 'Stripe', 'Admin Panel'],
      gradient: 'from-cyan-600 to-blue-600',
      link: 'https://github.com/Sudhirnagar/food-delevery-app'
    },
    {
      title: 'ML Research - Multi-label Classification',
      description: 'Summer research on Similarity-based Multi-label Classification using Rough Entropy with PyTorch on Scene and Flags datasets.',
      tech: ['PyTorch', 'Machine Learning', 'Python', 'Research'],
      gradient: 'from-fuchsia-600 to-purple-600',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SUDHIR KUMAR NAGAR
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img
                  src="./photo1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Flutter Developer & Problem Solver
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            B.Tech CSE Student at IIIT Vadodara | Building scalable mobile applications with Flutter & Firebase
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              View Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-slate-700 rounded-full font-semibold hover:border-cyan-400 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a B.Tech Computer Science student at IIIT Vadodara with a passion for mobile app development and competitive programming. I specialize in building cross-platform applications using Flutter and Firebase.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With a Max Rating of 1612 on CodeChef, 5-Star on HackerRank, and 750+ DSA problems solved, I combine strong algorithmic skills with practical development experience. I've also completed research on Similarity-based Multi-label Classification using Rough Entropy.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Sudhirnagar" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sudhir-kumar-nagar-65315b259/" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sudhirnagar2003@gmail.com" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-slate-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6`}>
                  <skill.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-center gap-2">
                      <ArrowRight size={16} className="text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Project <ExternalLink size={16} />
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-400 mb-12">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-slate-800 rounded-xl border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-slate-800 rounded-xl border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 bg-slate-800 rounded-xl border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        <p>© 2024 Sudhir Kumar Nagar. All rights reserved.</p>
        <p className="mt-2 text-sm">IIIT Vadodara | B.Tech CSE | Expected 2026</p>
      </footer>
    </div>
  );
}