import React from "react";
import ListPengaduan from "@/components/pengaduan/ListPengaduan";
import {
    getAllPengaduan,
    getLatestPengaduan,
} from "@/actions/pengaduan/action";
import PageTitle from "@/components/PageTitle";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash2, ArrowUpFromDot } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
// import { getServerSession } from 'next-auth'
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import StatusBadge from '@/components/StatusBadge';
import { getPengaduan } from '@/actions/pengaduan/action'
import FormUpdateStatus from '@/components/pengaduan/formPengaduan/FormUpdateStatus'

const PostDate = (createdAt) => {
    return format(new Date(createdAt), "dd-MM-yyyy");
};

export default async function page({ params }) {
    const pengaduanId = parseInt(params.id) 
    const pengaduan = await getPengaduan(pengaduanId)
    // const session = await getServerSession(authOptions)

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-y-hidden">
            <PageTitle>Pengaduan</PageTitle>
            <Card className="grid gap-5">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <Avatar className="w-12 h-12 mt-1">
                            <AvatarImage
                                // src="https://github.com/shadcn.png"
                                alt="Avatar"
                            />
                            <AvatarFallback>
                                {pengaduan.masyarakat.username.split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <CardTitle>@{pengaduan.masyarakat.username}</CardTitle>
                    </div>

                    <StatusBadge status={pengaduan.status}/>
                </CardHeader>

                <CardContent>
                    <h1 className="font-bold text-2xl">{pengaduan.judul_pengaduan}</h1>
                    <p className="text-muted-foreground">
                        {pengaduan.isi_pengaduan}
                    </p>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">{PostDate(pengaduan.tanggal)}</p>
                    {/* <Dialog>
                        <Button asChild variant="outline">
                            <DialogTrigger>Ubah Status</DialogTrigger>
                        </Button>
                        </Dialog> */}
                    <Dialog>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="mr-4">
                                <EllipsisVertical className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DialogTrigger asChild>
                                    <DropdownMenuItem>
                                        <ArrowUpFromDot className="mr-2 h-4 w-4" />
                                        <span>Ubah Status</span>
                                    </DropdownMenuItem>
                                </DialogTrigger>
                                <DropdownMenuItem className="text-destructive hover:text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Hapus</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Ubah Status Pengaduan</DialogTitle>
                            </DialogHeader>
                            <FormUpdateStatus status={pengaduan.status} id={pengaduan.id}/>         
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </main>
    );
}


