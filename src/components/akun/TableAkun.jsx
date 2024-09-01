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
import TableDropdown from './TableDropDown';
import { Card } from '../ui/card';


export default function TableAkun({users}) {
    return (
        <Card>
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
                            <TableCell>{user.telp}</TableCell>
                            <TableCell>{user.createdAt}</TableCell>
                            <TableCell>
                                <TableDropdown user={user} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}
