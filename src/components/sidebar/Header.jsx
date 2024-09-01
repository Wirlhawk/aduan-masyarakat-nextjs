"use client"
import {
    CircleUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signIn, signOut} from "next-auth/react";
import { SidebarSheet } from "./Sidebar";
import { Settings, LogOut  } from "lucide-react";

export default function Header() {
    const { data: session } = useSession();
    const handleLogout = async () => {
        await signOut({ redirect: false }); 
        window.location.href = "/login"; 
    };
    return (
        <header className="flex items-center gap-4 border-b bg-background px-4 h-14 lg:h-[60px] lg:px-6 ">
            <SidebarSheet />
            <div className="w-full flex-1" />
            <div className="flex flex-col items-start">
                <span className="text-sm font-bold">
                   {session?.user.username}
                </span>
                <span className="text-xs text-muted-foreground">
                    {session?.user.role}
                </span>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                    >
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4"/>
                        <span>Settings</span>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4"/>
                        <span>Log Out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}

