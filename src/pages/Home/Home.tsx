import { Button } from "@/components/ui/button";
import { projectData } from "@/data/projectData";
import { stack } from "@/data/stack";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
   
      <div className=" px-15  ">
        <section className="w-full items-center">
          <div className="w-full flex flex-col gap-6 px-6 py-12">
            <h1 className="text-5xl font-bold mb-6">
              Hello Everyone! I'm Aditya.
            </h1>

            <p className="text-muted-foreground text-lg my-8 max-w-2xl">
              A passionate Frontend developer with a knack for turning ideas
              into visually stunning, user-friendly websites.
            </p>

            <div className="flex justify-between gap-2 text-muted-foreground text-sm mb-16">
              <div className="flex items-center gap-2">
            
                <img src="./location3.gif" className="h-6" alt="" />
                <span>Bilaspur, Chhattisgarh India</span>
                <span className="flex-grow border-dotted border-t border-gray-600 mx-4"></span>
              </div>
              <Button
                className="flex items-center gap-2 p-5 hover:text-green-400 "
                variant={"outline"}
              >
                More about Me <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Project sections  */}
        <div className="">
          <h2 className="text-2xl font-bold mb-10">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
            {projectData.slice(0, 2).map((project, index) => {
              return (
                <div
                  key={index}
                  className=" w-full h-fit cursor-pointer  rounded-lg  flex flex-col gap-3"
                >
                  <img
                    src={project.image}
                    className="h-3/4 w-full rounded-2xl"
                    alt={project.title}
                  />
                  <p className="text-green-400 uppercase ">Web Design</p>
                  <h3>{project.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end my-10">
          <Button
            className="flex items-center gap-2 p-5 hover:text-green-400 "
            variant={"outline"}
          >
            More about Me <ArrowRight size={16} />
          </Button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-10">Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stack.map((project, index) => {
              return (
                <div key={index} className="border flex  items-center px-6 py-10 rounded-lg gap-2.5">
                  <img src={project.icon} alt={project.title} className="h-15 w-15" />
                  <div>
                  <h3 className=" font-bold capitalize">{project.title}</h3>
                  <p className="text-muted-foreground">{project.usedfor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
          <div className="flex justify-end my-10">
          <Button
            className="flex items-center gap-2 p-5 hover:text-green-400 "
            variant={"outline"}
          >
            View All Stacks <ArrowRight size={16} />
          </Button>
        </div>

        
          <h1 className="text-[214px] cursor-pointer font-bold mb-10">Let's Connect!</h1>
      
      </div>
    
  );
}

export default Home;

