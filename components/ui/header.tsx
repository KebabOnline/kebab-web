"use client";

import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {

    const { open } = useSidebar();

    return (
        <div className="flex items-center w-full size-7">
            {!open && <SidebarTrigger />}
            <h1>Kebab.ws</h1>
        </div>
    );
}
