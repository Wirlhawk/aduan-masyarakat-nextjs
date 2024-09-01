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
    Slack
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Sidebar = () => (
    <div className="hidden border-r bg-background md:block md:w-64 lg:w-72">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                >
                    <Slack className="h-6 w-6" />
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
                <NavLink
                    href="#"
                    icon={<Home className="h-5 w-5" />}
                    text="Home"
                    active
                />
                <NavLink
                    href="#"
                    icon={<PlusCircle className="h-5 w-5" />}
                    text="Submit Complaint"
                    // badge="6"
                />
                <NavLink
                    href="#"
                    icon={<Menu className="h-5 w-5" />}
                    text="Complaint List"
                    
                />
                <NavLink
                    href="#"
                    icon={<Users className="h-5 w-5" />}
                    text="Account"
                />
                <NavLink
                    href="#"
                    icon={<LineChart className="h-5 w-5" />}
                    text="Analytics"
                />
            </nav>
        </div>
    </div>
)

const SidebarSheet = () => (
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
)

const NavLink = ({ href, icon, text, badge, active }) => (
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
)

const Header = () => (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
        <SidebarSheet/>
        <div className="w-full flex-1" />
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
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
)

const StatCard = ({ title, value, change, color, icon }) => (
    <Card className={`bg-${color}-100`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className={`text-sm font-medium text-${color}-800`}>
                {title}
            </CardTitle>
            {icon}
        </CardHeader>
        <CardContent>
            <div className={`text-2xl font-bold text-${color}-800`}>
                {value}
            </div>
            <p className={`text-xs text-${color}-600`}>{change}</p>
        </CardContent>
    </Card>
)

const ComplaintItem = ({ name, complaint, status }) => (
    <div className="flex items-center">
        <Avatar className="h-9 w-9">
            <AvatarImage
                src="/placeholder.svg?height=36&width=36"
                alt="Avatar"
            />
            <AvatarFallback>
                {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
            </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">{complaint}</p>
        </div>
        <Badge
            className={`ml-auto bg-${status.color}-100 text-${status.color}-800`}
        >
            {status.text}
        </Badge>
    </div>
)

const Dashboard = () => {
    return (
        <div className="flex min-h-screen w-full">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <div className="flex items-center">
                        <h1 className="text-lg font-semibold md:text-2xl">
                            Selamat Datang
                        </h1>
                    </div>

                    {/* stats */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            title="Total Complaints"
                            value="1,234"
                            change="+20.1% from last month"
                            color="blue"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-blue-600"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Resolved Complaints"
                            value="867"
                            change="+180.1% from last month"
                            color="green"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-green-600"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Pending Complaints"
                            value="367"
                            change="+19% from last month"
                            color="yellow"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-yellow-600"
                                >
                                    <rect
                                        width="20"
                                        height="14"
                                        x="2"
                                        y="5"
                                        rx="2"
                                    />
                                    <path d="M2 10h20" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Resolution Rate"
                            value="70.2%"
                            change="+5.1% from last month"
                            color="purple"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-purple-600"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            }
                        />
                    </div>

                    {/* complaint list */}
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Recent Complaints</CardTitle>
                            <CardDescription>
                                You have 3 unresolved complaints
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                <ComplaintItem
                                    name="Olivia Martin"
                                    complaint="Broken streetlight on Main St."
                                    status={{
                                        color: "yellow",
                                        text: "In Progress",
                                    }}
                                />
                                <ComplaintItem
                                    name="Jackson Lee"
                                    complaint="Pothole on Oak Avenue"
                                    status={{ color: "red", text: "Pending" }}
                                />
                                <ComplaintItem
                                    name="Isabella Nguyen"
                                    complaint="Noise complaint from neighbor"
                                    status={{
                                        color: "green",
                                        text: "Resolved",
                                    }}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
