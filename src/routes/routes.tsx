import App from "@/App";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import DetailProject from "@/pages/DetailProject/DetailProject";
import Home from "@/pages/Home/Home";
import Projects from "@/pages/Projects/Projects";
import Stacks from "@/pages/Stacks/Stacks";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/stack",
        element: <Stacks />,
      },
      {
        path: "/project/detail-project/:projectName",
        element: <DetailProject />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
