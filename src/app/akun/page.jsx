import React from 'react'
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
import TabMasyarakat from '../../components/akun/TabMasyarakat';
import TabPetugas from '../../components/akun/TabPetugas';
import PageTitle from "@/components/PageTitle";


// const users = [
//     {
//         id: 1,
//         username: "wirl",
//         nama: "ray",
//         telp: '0851314146',
//         createdAt: '2022-02-12'
//     },
//     {
//         id: 2,
//         username: "RazernySigma",
//         nama: "karil",
//         telp: '053181358853',
//         createdAt: '2032-05-12'
//     },
//     {
//         id: 3,
//         username: "lulus314",
//         nama: "lulus",
//         telp: '0851314146',
//         createdAt: '2022-02-12'
//     },
//     {
//         id: 3,
//         username: "lulus314",
//         nama: "lulus",
//         telp: '0851314146',
//         createdAt: '2022-02-12'
//     },
// ];

// function TableDropdown({user}) {
//     return (
//         <Dialog>
//             <DropdownMenu>
//                 <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                     <DropdownMenuLabel>@{user.username}</DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DialogTrigger asChild>
//                         <DropdownMenuItem>
//                             <span>Edit</span>
//                         </DropdownMenuItem>
//                     </DialogTrigger>
//                     <DropdownMenuItem className="text-destructive hover:text-destructive">
//                         Delete
//                     </DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>

//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>Edit Profile</DialogTitle>
//                     <DialogDescription>Edit Akun Pengguna</DialogDescription>
//                 </DialogHeader>

//                 <div className="flex flex-col gap-4 py-4">
//                     <div className="grid w-full items-center gap-1.5">
//                         <Label htmlFor="username">Username</Label>
//                         <Input
//                             type="text"
//                             id="username"
//                             placeholder="Username"
//                             defaultValue={user.username}
//                         />
//                     </div>
//                     <div className="grid w-full items-center gap-1.5">
//                         <Label htmlFor="nama">Nama</Label>
//                         <Input
//                             type="text"
//                             id="nama"
//                             placeholder="Nama"
//                             defaultValue={user.nama}
//                         />
//                     </div>
//                     <div className="grid w-full items-center gap-1.5">
//                         <Label htmlFor="telp">Telp</Label>
//                         <Input
//                             type="text"
//                             id="telp"
//                             placeholder="Telp"
//                             defaultValue={user.telp}
//                         />
//                     </div>
//                 </div>

//                 <DialogFooter>
//                     <Button type="submit">Confirm</Button>
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     );
// }

// function TableDemo() {
//     return (
//         <Table>
//             <TableHeader>
//                 <TableRow>
//                     <TableHead>ID</TableHead>
//                     <TableHead>Username</TableHead>
//                     <TableHead>Nama</TableHead>
//                     <TableHead>Telp</TableHead>
//                     <TableHead>Created At</TableHead>
//                     <TableHead>Aksi </TableHead>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {users.map((user) => (
//                     <TableRow key={user.id}>
//                         <TableCell className="font-bold">
//                             {user.id}
//                         </TableCell>
//                         <TableCell>{user.username}</TableCell>
//                         <TableCell>{user.nama}</TableCell>
//                         <TableCell>{user.telp}</TableCell>
//                         <TableCell>{user.createdAt}</TableCell>
//                         <TableCell><TableDropdown user={user} /></TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     );
// }

export default function page() {
  return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <PageTitle>Manage Akun</PageTitle>


                <Tabs defaultValue="masyarakat" >
                    <TabsList className=" justify-start rounded-lg border  ">
                        <TabsTrigger value="masyarakat">Masyarakat</TabsTrigger>
                        <TabsTrigger value="petugas">Petugas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="masyarakat">
                        <TabMasyarakat/>
                    </TabsContent>
                    <TabsContent value="petugas">
                        <TabPetugas/>
                    </TabsContent>
                </Tabs>
        </main>
  );
}
