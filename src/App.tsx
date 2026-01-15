import { Outlet } from "react-router-dom";
import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Footer from "./components/footer/Footer";
import CardNav from "./components/CardNav";

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "#about/company",
          ariaLabel: "About Company",
        },
        {
          label: "Careers",
          href: "#about/careers",
          ariaLabel: "About Careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "#projects/featured",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Case Studies",
          href: "#projects/case-studies",
          ariaLabel: "Project Case Studies",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "#projects/featured",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Case Studies",
          href: "#projects/case-studies",
          ariaLabel: "Project Case Studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", href: "#contact/email", ariaLabel: "Email us" },
        { label: "Twitter", href: "#contact/twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#contact/linkedin", ariaLabel: "LinkedIn" },
      ],
    },
  ];
  return (
    <>
      <SidebarProvider>
        <div className="md:hidden block">
          <AppSidebar />
        </div>

        <main className="flex-1 flex flex-col">
          <div className="md:block hidden">
            <CardNav
              logo="/logo.png"
              logoAlt="Company Logo"
              items={items}
              baseColor="#fff"
              menuColor="#000"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
            />
          </div>
          <div className="px-6 container mx-auto flex-1">
            <SidebarTrigger className="absolute top-4 right-4 md:hidden " />
            <Outlet />
          </div>
          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
