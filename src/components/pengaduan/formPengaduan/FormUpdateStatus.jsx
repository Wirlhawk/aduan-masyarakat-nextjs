"use client"
import React from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"
import { updatePengaduanStatus } from '@/actions/pengaduan/action'
import { useFormStatus } from "react-dom";

export default function FormUpdateStatus({status, id}) {
    const statusSchema = z.object({
        status: z.enum(["Pending", "Proses", "Selesai"], {
            message: "Pilihan Status Tidak Valid",
        }),
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm({
        resolver: zodResolver(statusSchema),
    })

    async function onSubmit(data) {
        await updatePengaduanStatus(id,data.status )
    }

    const { pending } = useFormStatus()


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={ status || "Pending" }>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Ubah Status Proses Pengaduan" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Proses">Proses</SelectItem>
                                <SelectItem value="Selesai">Selesai</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={pending}>Submit</Button>
            </form>
        </Form>
    )
}
