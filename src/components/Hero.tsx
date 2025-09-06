import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume file from the public folder
    const link = document.createElement('a');
    link.href = '/Akshat_Tiwari_Resume.docx'; // Place your resume file in the public folder
    link.download = 'Akshat_Tiwari_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmails = async () => {
    const emails = "akshat1972005@gmail.com, nahidcode05@gmail.com";
    try {
      await navigator.clipboard.writeText(emails);
      toast({
        title: "Email addresses copied!",
        description: "Email addresses have been copied to your clipboard.",
      });
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = emails;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        toast({
          title: "Email addresses copied!",
          description: "Email addresses have been copied to your clipboard.",
        });
      } catch (fallbackErr) {
        toast({
          title: "Copy failed",
          description: "Please copy manually: " + emails,
          variant: "destructive",
        });
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-neon-purple to-cyber-pink opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-tech-green opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Akshat</span>
            <br />
            <span className="text-foreground">Tiwari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & Cloud Computing Specialist
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            B.Tech Computer Science student crafting scalable solutions with React, JavaScript, and modern cloud technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-cyber-pink hover:from-cyber-pink hover:to-neon-purple hover-glow transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-slide-up mb-12" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/AKranger05" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 hover-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/contactakshattiwari05" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 hover-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button 
              onClick={copyEmails}
              className="text-muted-foreground hover:text-cyber-pink transition-colors duration-300 hover-glow cursor-pointer"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
        
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
      </div>
    </section>
  );
};

export default Hero;