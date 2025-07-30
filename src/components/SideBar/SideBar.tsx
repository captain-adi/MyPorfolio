import {
  Calendar,
  Contact,
  Home,
  Inbox,
  Search,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircleMore,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Inbox,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Calendar,
  },
  {
    title: "Stacks",
    url: "/stack",
    icon: Search,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
];
// Array of social links and icons
const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourprofile",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "WhatsApp",
    icon: MessageCircleMore,
    url: "https://wa.me/yourphonenumber",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourprofile",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className=" w-72 p-0 border mr-1 " variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col items-center p-6">
            <img
              src="./profile.png  "
              alt="profile"
              className="w-48 rounded-lg object-cover mb-4"
            />
            <div className="bg-green-600 text-sm px-3 py-1 rounded-full mb-6">
              <Link download={"resume.pdf"} to="./resume.pdf" target="_blank" className="cursor-pointer">
              <span className="text-white flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-white animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                See My Resume
              </span>
              </Link>
            </div>
            <SidebarMenu className=" flex  gap-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="dark:hover:bg-white dark:hover:text-black px-4 py-5  hover:bg-gray-800 hover:text-green-400"
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="mt-auto px-4 py-6 border-t">
          <div className="flex justify-center gap-7 mb-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
