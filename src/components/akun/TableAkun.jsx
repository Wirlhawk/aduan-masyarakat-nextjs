import React from 'react'
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
import TableDropdown from './TableDropdown';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

const PostDate = (createdAt) => {
  return format(new Date(createdAt), 'dd-MM-yyyy')
};

export default function TableAkun({users,action,type}) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>List {type}</CardTitle>
                    <CardDescription>
                        List semua akun {type}
                    </CardDescription>
                </div>
                {action}
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Nama</TableHead>
                            <TableHead>Telp</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-bold">
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.nama}</TableCell>
                                <TableCell>{user.telp || 'null'}</TableCell>
                                <TableCell>{PostDate(user.createdAt)}</TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <TableDropdown user={user} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
