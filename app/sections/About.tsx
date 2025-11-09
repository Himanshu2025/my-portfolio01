"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  // Languages
  'TypeScript',
  'JavaScript',
  '.NET',
  'C#',
  'Python',
  'Java',
  
  // Backend
  'Node.js',
  'FastAPI',
  'REST APIs',
  'GraphQL',
  'Linux CLI',
  
  // Cloud & DevOps
  'AWS',
  'Azure',
  'DigitalOcean',
  'Firebase',
  'Oracle Cloud',
  'Cloudflare',
  'Docker',
  'Kubernetes',
  
  // Tools & Platforms
  'Github',
  'CI/CD',
  'Jenkins',
  'Terraform',
  'Jira',
  'Agile/Scrum',
  'Confluence',
  'Jest',
  
  // Frontend
  'Reactjs',
  'Next.js',
  'Vue.js',
  'CSS3',
  
  // Databases
  'PostgreSQL',
  'MySQL',
  'NoSQL',
  'MongoDB',
  'Prisma',
  'TypeORM',
  
  // AI Tools
  'Claude Code',
  'Cursor',
  'Github Co-pilot'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    I&apos;m a passionate developer focused on creating elegant
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
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-3 py-1.5 text-sm"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}