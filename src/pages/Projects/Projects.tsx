import Connect from "@/components/connect/Connect";
import { Card, CardContent } from "@/components/ui/card";
import { projectData } from "@/data/projectData";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="py-16">
      <h1 className="text-5xl font-bold mb-20">My Remarkable Projects</h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 ">
        {projectData.map((project, index) => {
          return (
            <Link to={project.link} target="_blank">    
            <Card key={index}>
              <CardContent>
                <div
                  className="w-full h-[400px] rounded-lg mb-4 relative overflow-hidden group"
                  aria-label={project.title}
                >
                  <span
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-300 will-change-transform"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <style>{`
                    .group:hover span {
                      transform: scale(1.05);
                    }
                  `}</style>
                </div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
              </CardContent>
            </Card>
              </Link>
          );
        })}
      </div>
      {/* Project list goes here */}
      <Connect />
    </div>
  );
}

export default Projects;
