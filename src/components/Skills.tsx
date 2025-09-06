import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Cloud, Brain, Palette } from "lucide-react";
import { useState, useEffect } from "react";

interface LanguageStats {
  [key: string]: number;
}

const Skills = () => {
  const [languageStats, setLanguageStats] = useState<LanguageStats>({});
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
      const combinedStats: LanguageStats = {};
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
      const percentages: LanguageStats = {};
      
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
      // Fallback to your actual skills if API fails
      setLanguageStats({
        TypeScript: 35,
        JavaScript: 30,
        CSS: 20,
        HTML: 15
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-neon-purple to-cyber-pink",
      skills: topLanguages.length > 0 ? topLanguages : [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Python", level: 70 },
        { name: "CSS", level: 90 }
      ],
      isGitHubData: topLanguages.length > 0
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
      ],
      isGitHubData: false
    }
  ];

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
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  {category.isGitHubData && (
                    <p className="text-xs text-muted-foreground">
                      {isLoading ? "Loading from GitHub..." : "Live data from GitHub repositories"}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {isLoading && category.isGitHubData ? "..." : `${skill.level}%`}
                      </span>
                    </div>
                    <Progress 
                      value={isLoading && category.isGitHubData ? 0 : skill.level} 
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