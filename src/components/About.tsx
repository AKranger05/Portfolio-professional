import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and exploring the intersection of web development and cloud computing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-card p-6 hover-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-neon-purple to-cyber-pink">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6 hover-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-electric-blue to-tech-green">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground">B.Tech Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground">Babu Banarasi Das University • Expected 2027</p>
                  <p className="text-sm font-medium text-electric-blue">Specialization: Cloud Computing & Machine Learning</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6 hover-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-cyber-pink to-neon-purple">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Leadership</h3>
                  <p className="text-muted-foreground">Basketball Team Representative</p>
                  <p className="text-sm text-muted-foreground">Spring Dale College</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated B.Tech Computer Science student with a passion for creating scalable web solutions and exploring cutting-edge cloud technologies. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in frontend development using React and modern JavaScript frameworks, I'm constantly learning and adapting to new technologies in the rapidly evolving tech landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to build meaningful applications that solve real-world problems while continuously growing as a software developer.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {["Problem Solving", "Team Leadership", "Adaptability", "Communication"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gradient-to-r from-neon-purple/20 to-cyber-pink/20 border border-neon-purple/30 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;