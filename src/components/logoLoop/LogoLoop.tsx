import { stack as stackData } from "@/data/stack";

function LogoLoop() {
  return (
    <div className="relative overflow-hidden mb-10">
      {/* Inline CSS */}
      <style>
        {`
          @keyframes logo-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .logo-scroll {
            animation: logo-scroll 20s linear infinite;
            width: max-content;
          }
        `}
      </style>

      <div className="flex gap-10 logo-scroll">
        {[...stackData, ...stackData].map((data, index) => (
          <div>
            <img
              key={index}
              src={data.icon}
              alt=""
              className={`size-15 shrink-0 ${
                data.icon === "shadcn-ui.svg" && "bg-white"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoLoop;
