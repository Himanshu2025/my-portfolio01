import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'Python',
  'MongoDB'
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">About Me</h2>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I&apos;m a passionate full-stack developer focused on creating elegant
                solutions to complex problems. With expertise in modern web
                technologies, I bring ideas to life through clean code and
                thoughtful design.
              </p>
              <p>
                My journey in software development has equipped me with a
                diverse skill set and a deep understanding of user-centered
                design principles. I&apos;m always eager to learn new
                technologies and take on challenging projects.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <Badge key={skill} className="hover:shadow-md transition-shadow">
                <p className="font-medium">{skill}</p>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}