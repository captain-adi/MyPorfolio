import Connect from "@/components/connect/Connect";
import { Button } from "@/components/ui/button";
import { stack } from "@/data/stack";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="  px-6 md:px-20 py-16 space-y-20">
      {/* Top Section */}
      <section className="flex flex-col gap-12">
        <h1 className="text-4xl font-bold mb-6">Get to Know Me</h1>
        <p className="text-muted-foreground  leading-relaxed max-w-5xl">
          I’m Aditya, a dedicated front-end developer with a strong focus on building responsive and user-friendly web interfaces using React.js. I enjoy crafting clean, efficient code and continuously improving my skills to stay aligned with modern web development practices. I'm also exploring backend technologies to expand my full-stack capabilities and actively learning data structures and algorithms to strengthen my problem-solving abilities. With a strong passion for technology and continuous learning, I’m committed to creating impactful digital experiences.
        </p>
        <div className="flex items-center mt-6">
          <img src="./location3.gif" className="h-6 w-6" alt="location" />
          <span className="ml-2 text-sm">Bilaspur, Chhattisgarh India</span>
          <span className="flex-grow border-t border-dotted border-gray-700 ml-4"></span>
        </div>
      </section>

      {/* Education Section */}
      <section className="border mt-10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="flex items-start gap-4">
          <GraduationCap className="mt-1 text-green-400" />
          <div>
            <h3 className="font-bold">Bachelor's Degree In Computer Application</h3>
            <p className="text-muted-foreground text-sm">
              Govt E Raghavendra Rao Science College, Bilaspur
            </p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <div>
        <h2 className="text-2xl font-bold mb-10">Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stack.map((project, index) => {
            return (
              <div
                key={index}
                className="border flex  items-center px-6 py-10 rounded-lg gap-2.5"
              >
                <img
                  src={project.icon}
                  alt={project.title}
                  className="h-15 w-15"
                />
                <div>
                  <h3 className=" font-bold capitalize">{project.title}</h3>
                  <p className="text-muted-foreground">{project.usedfor}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end">
        <Link to="/projects">
          <Button
            className="flex items-center gap-2 px-6 py-4 hover:text-green-400 cursor-pointer group border border-gray-600"
            variant="outline"
          >
            See More Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Link>
      </div>

      <Connect />
    </div>
  );
}

export default About;
