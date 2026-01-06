import { Outlet } from "react-router-dom";
import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <SidebarProvider>
        <div className="md:hidden block">
          <AppSidebar />
        </div>

        <main className="flex-1   px-6 container mx-auto">
          <SidebarTrigger className="absolute top-4 right-4 md:hidden " />
          <Outlet />
          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
