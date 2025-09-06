import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Coffee, Heart, Lock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Projects = () => {
  const handlePrivateRepo = () => {
    toast({
      title: "Repository is Private",
      description: "This repository contains proprietary code and is currently private for security reasons.",
    });
  };

  const projects = [
    {
      title: "Coffee Website",
      description: "A responsive coffee-themed website built with React and Tailwind CSS, featuring modern UI design and smooth user experience.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      image: "☕",
      icon: <Coffee className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600",
      features: ["Responsive Design", "Modern UI/UX", "Interactive Elements", "Performance Optimized"],
      liveUrl: "https://brewcraft.vercel.app",
      githubUrl: "https://github.com/AKranger05/Coffee-website",
      isPrivate: false
    },
    {
      title: "Tinder-Inspired Portfolio",
      description: "An innovative portfolio design inspired by Tinder's swipe interface, showcasing creative problem-solving and modern web technologies.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify/Vercel"],
      image: "💝",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      features: ["Swipe Interactions", "Video Integration", "Advanced Animations", "Self-hosted Media"],
      liveUrl: "https://akshat-tiwari-portfolio.vercel.app",
      githubUrl: "#",
      isPrivate: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work and creative solutions to real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card overflow-hidden hover-glow transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-20 absolute inset-0 flex items-center justify-center">
                  {project.image}
                </div>
                <div className="relative z-10 text-white flex items-center gap-3">
                  {project.icon}
                  <span className="text-xl font-bold">{project.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-neon-purple rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-neon-purple/20 to-cyber-pink/20 border border-neon-purple/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-neon-purple to-cyber-pink hover:from-cyber-pink hover:to-neon-purple flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className={`border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background ${
                      project.isPrivate ? 'opacity-70' : ''
                    }`}
                    onClick={project.isPrivate ? handlePrivateRepo : () => window.open(project.githubUrl, '_blank')}
                  >
                    {project.isPrivate ? <Lock className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center py-8">
          <p className="text-xl text-muted-foreground">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;