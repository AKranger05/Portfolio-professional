import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Cloud, Brain, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-neon-purple to-cyber-pink",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-cyber-pink to-neon-purple",
      skills: [
        { name: "Responsive Design", level: 85 },
        { name: "User Experience", level: 75 },
        { name: "Design Systems", level: 70 },
        { name: "Component Libraries", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Constantly evolving and learning new technologies to build better solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card p-6 hover-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-br ${category.gradient}`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="glass-card p-8 text-center hover-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <button 
                onClick={() => window.open('#', '_blank')}
                className="p-4 rounded-lg bg-gradient-to-br from-neon-purple/20 to-cyber-pink/20 border border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300 hover-glow text-left"
              >
                <h4 className="font-semibold text-lg mb-2">IBM Web Development Basics</h4>
                <p className="text-muted-foreground mb-2">Foundation in modern web development practices</p>
                <span className="text-xs text-neon-purple">Click to view →</span>
              </button>
              <button 
                onClick={() => window.open('#', '_blank')}
                className="p-4 rounded-lg bg-gradient-to-br from-electric-blue/20 to-tech-green/20 border border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300 hover-glow text-left"
              >
                <h4 className="font-semibold text-lg mb-2">Oracle Web Development Foundations</h4>
                <p className="text-muted-foreground mb-2">Associate level certification</p>
                <span className="text-xs text-electric-blue">Click to view →</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;