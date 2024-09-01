"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Upload, X, CirclePlus, LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PengaduanSchema } from "@/schema";
import { createPengaduan } from "@/actions/pengaduan/action";
import { useFormStatus } from "react-dom";

export default function FormPengaduanZod() {
    // const [imagePreview, setImagePreview] = useState(null);
    const [isLoading,setIsLoading] = useState(false)
    const { pending } = useFormStatus();


    const form = useForm({
        resolver: zodResolver(PengaduanSchema),
        defaultValues: {
            judul: "",
            isi: "",
        },
    });

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         form.setValue("foto", file);

    //         // Generate and set the image preview URL
    //         const previewUrl = URL.createObjectURL(file);
    //         setImagePreview(previewUrl);
    //     }
    // };

    // const removeImage = () => {
    //     form.setValue("foto", null);
    //     setImagePreview(null);
    // };

    const onSubmit = async (data) => {
        setIsLoading(true);
        const res = await createPengaduan(data);
        form.reset()
        setIsLoading(false);
    };


    return (
        <Card className="w-full md:w-1/2">
            <CardHeader>
                <CardTitle className="text-2xl font-bold inline-flex items-center gap-2">
                    <CirclePlus />
                    <span>Form Pengaduan</span>
                </CardTitle>
                <CardDescription>
                    Isi form di bawah untuk membuat pengaduan
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="judul"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Judu Pengaduan</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Masukan Judul Pengaduan"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isi"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Isi Pengaduan</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Masukan isi pengaduan"
                                            {...field}
                                            className="min-h-[100px] resize-none"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="foto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gambar (opsional)</FormLabel>
                                    <FormControl>
                                        <Label
                                            htmlFor="foto"
                                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                        >
                                            {imagePreview ? (
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="w-full h-full object-contain rounded-lg"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="icon"
                                                        className="absolute top-2 right-2"
                                                        onClick={removeImage}
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                                    <p className="mb-2 text-sm text-gray-500 font-semibold">
                                                        Klik Untuk Mengupload
                                                        Gambar
                                                    </p>
                                                </div>
                                            )}
                                            <Input
                                                id="foto"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    handleImageChange(e);
                                                    field.onChange(
                                                        e.target.files[0]
                                                    ); // Manually trigger onChange
                                                }}
                                                {...field}
                                            />
                                        </Label>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <Button disabled={pending} className="w-full disabled:bg-gray-500" >
                            { isLoading ? <LoaderCircle className="animate-spin"/> : "Submit"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

