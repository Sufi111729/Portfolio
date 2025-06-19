import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/constants";
import { Target, MapPin, Clock, Users } from "lucide-react";

export default function About() {
  const stats = [
    { value: "2+", label: "Years Experience", color: "bg-primary/5 text-primary" },
    { value: "5+", label: "Projects Completed", color: "bg-secondary/5 text-secondary" },
    { value: "24/7", label: "Available", color: "bg-accent/5 text-accent" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="bg-gray-50 border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="text-primary mr-3 h-5 w-5" />
                  About Me
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hello! I'm <strong>{personalInfo.name}</strong>, a passionate Full Stack Java Developer based in {personalInfo.location}. 
                    I specialize in building robust web applications using modern technologies like Spring Boot, React, and MySQL.
                  </p>
                  <p>
                    {personalInfo.objective}
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-primary font-medium">Current Status:</p>
                    <p className="text-gray-600">{personalInfo.availability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Highlights</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-700">2+ years of hands-on development experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-gray-700">Expertise in full-stack Java development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-700">Strong background in REST APIs and microservices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Experience with modern frontend frameworks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center ${stat.color} rounded-lg p-4`}>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Modern coding workspace setup"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <Card className="gradient-primary text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Location & Availability
                </h4>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="mr-2">📍</span>
                    {personalInfo.location} (Open to relocation)
                  </p>
                  <p className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Available for immediate joining
                  </p>
                  <p className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Open to remote opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
