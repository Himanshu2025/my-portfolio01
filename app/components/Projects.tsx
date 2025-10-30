import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of the project and the technologies used to build it.",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of the project and the technologies used to build it.",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of the project and the technologies used to build it.",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-muted"></div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardFooter className="gap-4">
                <Button variant="default" size="sm" asChild>
                  <a href={project.liveUrl}>View Project →</a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl}>GitHub</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}