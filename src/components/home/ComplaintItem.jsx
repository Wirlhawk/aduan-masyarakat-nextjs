import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatusBadge  from "@/components/StatusBadge";

export default function ComplaintItem ({ name, complaint, status, className }) {
  return (
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
        <span className="ml-auto">
            <StatusBadge status={status}/>
        </span>
    </div>
  )
}
