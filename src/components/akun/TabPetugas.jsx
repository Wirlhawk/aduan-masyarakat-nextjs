import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TableAkun from "./TableAkun";

const users = [
    {
        id: 1,
        username: "admin",
        nama: "admin",
        telp: "0851314146",
        createdAt: "2022-02-12",
    },
    {
        id: 2,
        username: "Pak Riyaldi",
        nama: "karil",
        telp: "053181358853",
        createdAt: "2032-05-12",
    },

];

export default function TabPetugas() {
    return <TableAkun users={users} />;
}