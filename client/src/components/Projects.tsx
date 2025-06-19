import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";
import { ExternalLink, Github, Code } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in full-stack development and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personalInfo.projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden card-hover border border-gray-100">
              <img
                src={index === 0 
                  ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                }
                alt="Modern tech background with code"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  <Badge 
                    variant={project.type === "Full Stack" ? "default" : "secondary"}
                    className={project.type === "Full Stack" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                  >
                    {project.type}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {project.backendCode && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.backendCode} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Backend
                      </a>
                    </Button>
                  )}
                  {project.frontendCode && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.frontendCode} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Frontend
                      </a>
                    </Button>
                  )}
                  {project.sourceCode && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Placeholder */}
        <div className="mt-12 text-center">
          <Card className="gradient-primary text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-blue-100 mb-6">Currently working on exciting new projects involving cloud computing and DevOps practices</p>
              <Button asChild variant="secondary">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Repositories
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
