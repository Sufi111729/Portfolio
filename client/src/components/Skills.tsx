import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/constants";
import { Code, Layers, Database, Wrench, Network, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      gradient: "from-yellow-400 to-orange-500",
      skills: personalInfo.skills.languages,
      type: "progress"
    },
    {
      title: "Frameworks",
      icon: Layers,
      gradient: "from-green-400 to-blue-500",
      skills: personalInfo.skills.frameworks,
      type: "badges"
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-purple-400 to-pink-500",
      skills: personalInfo.skills.databases,
      type: "badges"
    },
    {
      title: "Tools",
      icon: Wrench,
      gradient: "from-red-400 to-yellow-500",
      skills: personalInfo.skills.tools,
      type: "badges"
    }
  ];

  const additionalSkills = [
    {
      title: "Networking",
      icon: Network,
      description: personalInfo.skills.networking
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: personalInfo.skills.softSkills
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical expertise spans across multiple technologies, with strong proficiency in Java development, modern web frameworks, and database management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white shadow-sm card-hover border-0">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.type === "progress" ? (
                      // Progress bars for languages
                      category.skills.map((skill: any, skillIndex: number) => (
                        <div key={skillIndex} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 text-sm">{skill.name}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      // Badges for other categories
                      <div className="flex flex-wrap gap-2">
                        {(category.skills as string[]).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="bg-white shadow-sm border-0">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <IconComponent className="text-primary mr-3 h-5 w-5" />
                    {skill.title}
                  </h4>
                  {skill.description ? (
                    <p className="text-gray-700">{skill.description}</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {skill.skills?.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
