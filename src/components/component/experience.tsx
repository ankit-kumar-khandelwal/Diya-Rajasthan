import React from 'react';
import { Star, Paintbrush, Footprints, Workflow } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function Experience() {
  const experiences = [
    {
      title: "Star-Studded Line Up",
      description: "Experience performances by renowned artists and emerging talents.",
      icon: Star
    },
    {
      title: "Discovery of New Talent",
      description: "Witness the unveiling of groundbreaking new artists and creators.",
      icon: Star
    },
    {
      title: "Immersive Art Installations",
      description: "Explore captivating art installations that transport you to new realms.",
      icon: Paintbrush
    },
    {
      title: "Self-Reflective Exercises",
      description: "Engage in thought-provoking workshops that inspire personal growth.",
      icon: Footprints
    },
    {
      title: "Interactive Workshops",
      description: "Participate in engaging workshops that foster collaboration and learning.",
      icon: Workflow
    }
  ];

  return (
    <section className="w-full py-0 md:py-0 lg:py-0 bg-gradient-to-b from-muted to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8"> {/* Adjust mb-12 to mb-8 or remove it */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            5 Things You'll Experience at AAROHAN 2024
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the highlights that make AAROHAN 2024 a must-attend event.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {experiences.map((experience, index) => (
            <Card key={index} className="transition-all hover:shadow-lg flex flex-col items-center">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <experience.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{experience.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{experience.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
