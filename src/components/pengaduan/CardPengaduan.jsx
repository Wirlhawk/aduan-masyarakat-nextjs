import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreVertical } from 'lucide-react'
import StatusBadge from '@/components/StatusBadge';
import Link from 'next/link'

export default function ComplaintCard ({ pengaduan }) {
    return (
        <Link href={`/pengaduan/${pengaduan.id}`}>
            <Card >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        @{pengaduan.masyarakat.username}
                    </CardTitle>
                    <StatusBadge status={pengaduan.status}/>
                </CardHeader>
                
                <CardContent className="my-auto">
                    <div className="text-2xl font-bold">{pengaduan.judul_pengaduan}</div>
                    <p className="text-xs text-muted-foreground">{pengaduan.isi_pengaduan}</p>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground"></div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Update status</DropdownMenuItem>
                            <DropdownMenuItem>Assign to staff</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardFooter>
            </Card>
        </Link>
  )
}