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
import {MoreVertical} from 'lucide-react'
import CardPengaduan from './CardPengaduan'

export default function ListPengaduan({listPengaduan}) {
    
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {listPengaduan.map((pengaduan) => (
                <CardPengaduan key={pengaduan.id} pengaduan={pengaduan} />
            ))}
        </div>
    );
};
