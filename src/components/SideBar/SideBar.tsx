import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

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
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="  p-0 border mr-1 " variant="inset">
      <SidebarContent >
        <SidebarGroup>
         
          <SidebarGroupContent className="flex flex-col items-center p-6">
              <img
          src="./profile.jpg"
          alt="profile"
          className="w-48 rounded-lg object-cover mb-4"
        />
          <div className="bg-green-600 text-sm px-3 py-1 rounded-full mb-6">
          <span className="text-white">● Available for Work</span>
        </div>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
      </SidebarContent>
    </Sidebar>
  )
}