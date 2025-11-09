import { Button } from "@/components/ui/button";
import Image from "next/image";
import ReactCSSTransitionGroup from "react-transition-group";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I am Himanshu!
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Building beautiful and functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src="/profile.jpg"
                alt="Himanshu"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              {/* <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                <User className="w-32 h-32 text-muted-foreground" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}