import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/constants";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function Education() {
  const borderColors = ["border-primary", "border-secondary"];
  const badgeColors = ["bg-primary/10 text-primary", "bg-secondary/10 text-secondary"];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="text-primary mr-3 h-5 w-5" />
              Academic Background
            </h3>
            
            {personalInfo.education.map((edu, index) => (
              <Card key={index} className={`bg-white shadow-sm border-l-4 ${borderColors[index]} border-t-0 border-r-0 border-b-0`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                      <p className={`font-medium ${index === 0 ? 'text-primary' : 'text-secondary'}`}>{edu.institution}</p>
                    </div>
                    <Badge className={badgeColors[index]}>
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="text-accent mr-3 h-5 w-5" />
              Professional Certifications
            </h3>
            
            {personalInfo.certifications.map((cert, index) => (
              <Card key={index} className="bg-white shadow-sm border-l-4 border-accent border-t-0 border-r-0 border-b-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-accent font-medium">{cert.issuer}</p>
                    </div>
                    <Badge className="bg-accent/10 text-accent">
                      {cert.year}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {cert.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-900">Covered Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Languages */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="text-gray-600 mr-3 h-5 w-5" />
                  Languages
                </h4>
                <div className="space-y-3">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{lang.name}</span>
                      <Badge 
                        variant="outline"
                        className={
                          lang.level === "Native" ? "bg-green-100 text-green-800" :
                          lang.level === "Professional" ? "bg-blue-100 text-blue-800" :
                          "bg-purple-100 text-purple-800"
                        }
                      >
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
