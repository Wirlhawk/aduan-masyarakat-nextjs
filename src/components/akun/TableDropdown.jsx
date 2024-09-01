import React from "react";
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
import { Trash2, Pencil, EllipsisVertical } from "lucide-react";


export default function Tabledropdown({user}) {
    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <EllipsisVertical className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>@{user.username}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Pencil  className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem className="text-destructive hover:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>Edit Akun Pengguna</DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4 py-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Username"
                            defaultValue={user.username}
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="nama">Nama</Label>
                        <Input
                            type="text"
                            id="nama"
                            placeholder="Nama"
                            defaultValue={user.nama}
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="telp">Telp</Label>
                        <Input
                            type="text"
                            id="telp"
                            placeholder="Telp"
                            defaultValue={user.telp}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit">Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
