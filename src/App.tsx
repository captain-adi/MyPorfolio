import { Outlet } from "react-router-dom";
import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 px-15 xl:ml-18 py-15"> 
          <SidebarTrigger  className="absolute top-4 right-4 md:hidden " />
          <Outlet />
        <Footer/>
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
