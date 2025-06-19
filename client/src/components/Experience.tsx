import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/constants";
import { Briefcase, Calendar, CheckCircle, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional experience and key projects that demonstrate my expertise in full-stack Java development
          </p>
        </div>

        <div className="space-y-8">
          {personalInfo.workExperience.map((experience, index) => (
            <Card key={index} className="bg-white shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="text-primary mr-3 h-5 w-5" />
                      <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-lg text-primary font-semibold">{experience.company}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {experience.type}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {experience.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-gray-700 text-sm leading-relaxed">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="text-accent mr-2 h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-700 text-sm leading-relaxed">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Experience Note */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Looking for New Opportunities</h3>
              <p className="text-gray-600 mb-4">
                I'm actively seeking a Graduate Engineer Trainee role in telecom or network infrastructure projects 
                where I can apply my technical skills and passion for innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  Available for Immediate Joining
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  Open to Relocation
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                  Remote Work Ready
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}