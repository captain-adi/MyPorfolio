import App from "@/App";
import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import Projects from "@/pages/Projects/Projects";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
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
        element: <Projects />
      }
    ]
  }
]);

export default router;
