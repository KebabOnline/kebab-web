import {Home, Gamepad, User, Twitter, Github } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarTrigger
} from "@/components/ui/sidebar"

const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Kebabmon",
      url: "/kebabmon",
      icon: Gamepad,
    }
]

const socials = [
    {
        title: "Github",
        url: "https://github.com/KebabOnline",
        icon: Github,
    },    
    {
        title: "Xitter",
        url: "https://x.com/KebabOffTheGrid",
        icon: Twitter,
    },
    {
        title: "SpaceHey",
        url: "https://spacehey.com/cashkebab",
        icon: User,
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarTrigger /> 
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Content</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Socials</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {socials.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
