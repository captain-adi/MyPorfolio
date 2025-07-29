import Connect from "@/components/connect/Connect";
import CountUp from "@/components/countUP/countUp";
import { Card, CardContent } from "@/components/ui/card";
import { stack } from "@/data/stack";

function Stacks() {
  return (
    <div className="py-16">
      <h1 className="text-5xl font-bold mb-20">My Tech Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {stack.map((project, index) => {
          return (
            <Card>
              <CardContent key={index} className="">
                <div className="flex justify-between  items-center">
                  <div className="flex   py-5 rounded-lg gap-6">
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="h-15 w-15"
                    />
                    <div>
                      <h3 className=" font-bold capitalize">{project.title}</h3>
                      <p className="text-muted-foreground font-light">
                        {project.usedfor}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <CountUp
                      duration={2000}
                      end={project.knowledgeInPercent ?? 0}
                    />
                  </div>
                </div>
                <p className="text-muted-foreground font-light">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Connect/>
    </div>
  );
}

export default Stacks;
