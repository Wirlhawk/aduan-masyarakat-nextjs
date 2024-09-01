"use client";
import Link from "next/link";
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    ShoppingCart,
    Users,
    PlusCircle,
    Slack,
    Atom,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSession } from "next-auth/react";

const mainRoutes = [
    {
        href: "/",
        text: "Home",
        role: ["Masyarakat", "Petugas", "Admin"],
        icon: <Home className="h-5 w-5" />
    },
    {
        href: "/pengaduan/create",
        text: "Buat Pengaduan",
        role: ["Masyarakat", "Petugas", "Admin"],
        icon: <PlusCircle className="h-5 w-5" />
    },
    {
        href: "/pengaduan",
        text: "List Pengaduan",
        role: ["Masyarakat", "Petugas", "Admin"],
        icon: <Menu className="h-5 w-5" />
    },
    {
        href: "/akun",
        text: "Akun",
        role: ["Petugas", "Admin"],
        icon: <Users className="h-5 w-5" />
    },
    {
        href: "#",
        text: "Analisis",
        role: ["Petugas", "Admin"],
        icon: <LineChart className="h-5 w-5" />
    }
];

export const Sidebar = () => {
    const { data: session } = useSession();
    const pathName = usePathname();

    const authorizedRoutes = mainRoutes.filter(({ role }) =>
        role.includes(session?.user.role)
    );


    return (
        <div className="hidden border-r bg-background md:block md:w-64 lg:w-72">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-primary"
                    >
                        <Atom className="h-6 w-6" />
                        <span>Lapor Pak</span>
                    </Link>
                    <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8"
                    >
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>

                <nav className="flex-1 px-2 py-2 text-base font-medium lg:px-4">
                    {authorizedRoutes.map(({ href, text, icon }) => (
                        <NavLink
                            key={href}
                            href={href}
                            icon={icon}
                            text={text}
                        />
                    ))}
                    
                </nav>
            </div>
        </div>
    );
};

export const SidebarSheet = () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
            >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <NavLink
                    href="#"
                    icon={<Home className="h-5 w-5" />}
                    text="Dashboard"
                />
                <NavLink
                    href="#"
                    icon={<ShoppingCart className="h-5 w-5" />}
                    text="Orders"
                    badge="6"
                    active
                />
                <NavLink
                    href="#"
                    icon={<Package className="h-5 w-5" />}
                    text="Products"
                />
                <NavLink
                    href="#"
                    icon={<Users className="h-5 w-5" />}
                    text="Customers"
                />
                <NavLink
                    href="#"
                    icon={<LineChart className="h-5 w-5" />}
                    text="Analytics"
                />
            </nav>
        </SheetContent>
    </Sheet>
);

export const NavLink = ({ href, icon, text, badge }) => {
    const pathName = usePathname();
    const active = pathName == href;
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base transition-all hover:text-primary ${
                active ? "bg-muted text-primary" : "text-muted-foreground"
            }`}
        >
            {icon}
            {text}
            {badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {badge}
                </Badge>
            )}
        </Link>
    );
};
