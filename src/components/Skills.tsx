import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Palette } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [languageStats, setLanguageStats] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchGitHubLanguageStats = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.github.com/users/AKranger05/repos?per_page=100');
      const repos = await response.json();
      
      const languagePromises = repos
        .filter((repo: any) => !repo.fork && !repo.archived) // Exclude forked and archived repos
        .map(async (repo: any) => {
          const langResponse = await fetch(repo.languages_url);
          return await langResponse.json();
        });

      const languageArrays = await Promise.all(languagePromises);
      
      // Combine all language stats
      const combinedStats: { [key: string]: number } = {};
      languageArrays.forEach(languages => {
        Object.entries(languages).forEach(([lang, bytes]) => {
          // Filter out config files and focus on main languages
          if (!['Dockerfile', 'Shell', 'Batchfile', 'PowerShell', 'Makefile'].includes(lang)) {
            combinedStats[lang] = (combinedStats[lang] || 0) + (bytes as number);
          }
        });
      });

      // Calculate percentages
      const totalBytes = Object.values(combinedStats).reduce((sum, bytes) => sum + bytes, 0);
      const percentages: { [key: string]: number } = {};
      
      Object.entries(combinedStats).forEach(([lang, bytes]) => {
        const percentage = Math.round((bytes / totalBytes) * 100);
        // Only include languages with at least 2% usage to avoid clutter
        if (percentage >= 2) {
          percentages[lang] = percentage;
        }
      });

      setLanguageStats(percentages);
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      // Fallback to manual stats if API fails
      setLanguageStats({
        JavaScript: 40,
        TypeScript: 25,
        CSS: 15,
        HTML: 12,
        Python: 8
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubLanguageStats();
  }, []);

  // Get top 4 languages for display
  const topLanguages = Object.entries(languageStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 4)
    .map(([name, percentage]) => ({ name, level: percentage }));

  const openCertificate = (filename: string) => {
    window.open(`/${filename}`, '_blank');
  };

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
          {/* Programming Languages Card */}
          <Card className="glass-card p-6 hover-glow transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-neon-purple to-cyber-pink">
                <div className="text-white">
                  <Code2 className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Programming Languages</h3>
                {topLanguages.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {isLoading ? "Loading from GitHub..." : "Live data from GitHub repositories"}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              {(topLanguages.length > 0 ? topLanguages : [
                { name: "JavaScript", level: 85 },
                { name: "TypeScript", level: 75 },
                { name: "Python", level: 70 },
                { name: "CSS", level: 90 }
              ]).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {isLoading && topLanguages.length > 0 ? "..." : `${skill.level}%`}
                    </span>
                  </div>
                  <Progress 
                    value={isLoading && topLanguages.length > 0 ? 0 : skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Frameworks & Tools Card */}
          <Card className="glass-card p-6 hover-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-cyber-pink to-neon-purple">
                <div className="text-white">
                  <Palette className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Frameworks & Tools</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "React", "Tailwind CSS", "Vite", "Node.js", 
                "Git/GitHub", "Linux", "Vercel", "HTML5", "CSS3"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-muted-foreground/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-neon-purple to-cyber-pink rounded-full"></div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="mt-16">
          <Card className="glass-card p-8 text-center hover-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <button 
                onClick={() => openCertificate('SkillsBuild.pdf')}
                className="p-4 rounded-lg bg-gradient-to-br from-neon-purple/20 to-cyber-pink/20 border border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300 hover-glow text-left"
              >
                <h4 className="font-semibold text-lg mb-2">IBM Web Development Basics</h4>
                <p className="text-muted-foreground mb-2">Foundation in modern web development practices</p>
                <span className="text-xs text-neon-purple">Click to view →</span>
              </button>
              <button 
                onClick={() => openCertificate('Akshat OCI Foundations Associate Certificate.pdf')}
                className="p-4 rounded-lg bg-gradient-to-br from-electric-blue/20 to-tech-green/20 border border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300 hover-glow text-left"
              >
                <h4 className="font-semibold text-lg mb-2">Oracle Cloud Infrastructure Associate</h4>
                <p className="text-muted-foreground mb-2">Associate level certification</p>
                <span className="text-xs text-electric-blue">Click to view →</span>
              </button>
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground italic">More to come</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;