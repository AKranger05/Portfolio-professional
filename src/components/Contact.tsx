import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
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

  const copyPhone = async () => {
    const phone = "+91 7905703544"; // Replace with your actual phone number
    try {
      await navigator.clipboard.writeText(phone);
      toast({
        title: "Phone number copied!",
        description: "Phone number has been copied to your clipboard.",
      });
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = phone;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        toast({
          title: "Phone number copied!",
          description: "Phone number has been copied to your clipboard.",
        });
      } catch (fallbackErr) {
        toast({
          title: "Copy failed",
          description: "Please copy manually: " + phone,
          variant: "destructive",
        });
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss new opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="glass-card p-6 hover-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-neon-purple to-cyber-pink">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground text-sm">akshat1972005@gmail.com</p>
                  <p className="text-muted-foreground text-sm">nahidcode05@gmail.com</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-neon-purple to-cyber-pink hover:from-cyber-pink hover:to-neon-purple"
                onClick={copyEmails}
              >
                Copy Emails
              </Button>
            </Card>
            
            <Card className="glass-card p-6 hover-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-electric-blue to-tech-green">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+91 7905703544</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background"
                onClick={copyPhone}
              >
                Copy Number
              </Button>
            </Card>
            
            <Card className="glass-card p-6 hover-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-tech-green to-cyber-pink">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-card p-8 hover-glow transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">Social Links</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/AKranger05" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-neon-purple/10 to-cyber-pink/10 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 group"
                >
                  <Github className="w-8 h-8 text-muted-foreground group-hover:text-neon-purple transition-colors" />
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-sm text-muted-foreground">View my repositories and contributions</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/contactakshattiwari05" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-electric-blue/10 to-tech-green/10 border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-electric-blue transition-colors" />
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Open to exciting opportunities and collaborations
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-tech-green to-electric-blue hover:from-electric-blue hover:to-tech-green hover-glow"
                  onClick={copyEmails}
                >
                  Let's Work Together
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;