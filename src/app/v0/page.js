"use client";

import React, { useState } from "react";
import { Bell, Home, LogOut, Menu, PlusCircle, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Component() {
    const [activeTab, setActiveTab] = useState("home");

    const NavItems = ({ onItemClick }) => (
        <>
            <li>
                <Button
                    variant={activeTab === "home" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                        activeTab === "home" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => {
                        setActiveTab("home");
                        onItemClick();
                    }}
                >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                </Button>
            </li>
            <li>
                <Button
                    variant={activeTab === "submit" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                        activeTab === "submit"
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                    }`}
                    onClick={() => {
                        setActiveTab("submit");
                        onItemClick();
                    }}
                >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Submit Complaint
                </Button>
            </li>
            <li>
                <Button
                    variant={activeTab === "list" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                        activeTab === "list" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => {
                        setActiveTab("list");
                        onItemClick();
                    }}
                >
                    <Menu className="mr-2 h-4 w-4" />
                    Complaint List
                </Button>
            </li>
            <li>
                <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                        activeTab === "profile"
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                    }`}
                    onClick={() => {
                        setActiveTab("profile");
                        onItemClick();
                    }}
                >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                </Button>
            </li>
        </>
    );

    return (
        <div className="flex h-screen bg-background text-foreground">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-card text-card-foreground border-r border-border">
                <div className="flex items-center justify-center h-16 border-b border-border">
                    <h1 className="text-xl font-bold text-primary">
                        LaporPak
                    </h1>
                </div>
                <nav className="flex-1 overflow-y-auto">
                    <ul className="p-2 space-y-1">
                        <NavItems onItemClick={() => {}} />
                    </ul>
                </nav>
                <div className="p-4 border-t border-border">
                    <Button
                        variant="outline"
                        className="w-full text-primary border-primary hover:bg-primary/10"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between p-4 bg-card text-card-foreground border-b border-border h-16">
                    <div className="flex items-center space-x-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden text-primary"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 p-0">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between h-16 px-4 border-b border-border">
                                        <h1 className="text-xl font-bold text-primary">
                                            LaporPak
                                        </h1>
                                        <SheetTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <X className="h-6 w-6" />
                                            </Button>
                                        </SheetTrigger>
                                    </div>
                                    <nav className="flex-1 overflow-y-auto">
                                        <ul className="p-2 space-y-1">
                                            <NavItems onItemClick={() => {}} />
                                        </ul>
                                    </nav>
                                    <div className="p-4 border-t border-border">
                                        <Button
                                            variant="outline"
                                            className="w-full text-primary border-primary hover:bg-primary/10"
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            Logout
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-primary"
                        >
                            <Bell className="h-6 w-6" />
                        </Button>
                        <Avatar>
                            <AvatarImage
                                src="/placeholder-avatar.jpg"
                                alt="User"
                            />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 overflow-y-auto p-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Complaints
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-primary"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,234</div>
                                <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-[hsl(var(--chart-2)/0.1)]">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-[hsl(var(--chart-2))]">
                                    Resolved Complaints
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-[hsl(var(--chart-2))]"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-[hsl(var(--chart-2))]">
                                    867
                                </div>
                                <p className="text-xs text-[hsl(var(--chart-2))]">
                                    +180.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-[hsl(var(--chart-4)/0.1)]">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-[hsl(var(--chart-4))]">
                                    Pending Complaints
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-[hsl(var(--chart-4))]"
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
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-[hsl(var(--chart-4))]">
                                    367
                                </div>
                                <p className="text-xs text-[hsl(var(--chart-4))]">
                                    +19% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Resolution Rate
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-primary"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">70.2%</div>
                                <p className="text-xs text-muted-foreground">
                                    +5.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Recent Complaints</CardTitle>
                            <CardDescription>
                                You have 3 unresolved complaints
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                <div className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage
                                            src="/avatars/01.png"
                                            alt="Avatar"
                                        />
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            Olivia Martin
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Broken streetlight on Main St.
                                        </p>
                                    </div>
                                    <Badge className="ml-auto bg-primary/10 text-primary">
                                        In Progress
                                    </Badge>
                                </div>
                                <div className="flex items-center">
                                    <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                                        <AvatarImage
                                            src="/avatars/02.png"
                                            alt="Avatar"
                                        />
                                        <AvatarFallback>JL</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            Jackson Lee
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Pothole on Oak Avenue
                                        </p>
                                    </div>
                                    <Badge className="ml-auto bg-[hsl(var(--chart-4)/0.1)] text-[hsl(var(--chart-4))]">
                                        Pending
                                    </Badge>
                                </div>
                                <div className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage
                                            src="/avatars/03.png"
                                            alt="Avatar"
                                        />
                                        <AvatarFallback>IN</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            Isabella Nguyen
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Noise complaint from neighbor
                                        </p>
                                    </div>
                                    <Badge className="ml-auto bg-[hsl(var(--chart-2)/0.1)] text-[hsl(var(--chart-2))]">
                                        Resolved
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
}
