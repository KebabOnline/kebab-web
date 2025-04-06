"use client";

import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {

    const { open } = useSidebar();

    return (
        <div className="flex items-center w-full size-7">
            {/* Mobile Header */}
            <div className="flex md:hidden items-center w-full">
                <SidebarTrigger />
                <h1 className="absolute left-1/2 transform -translate-x-1/2">Kebab.ws</h1> {/* Center h1 on mobile */}
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center">
                {!open && <SidebarTrigger />} {/* Only show header when sidebar is closed*/}
                <h1>Kebab.ws</h1>
            </div>
        </div>
    );
}
