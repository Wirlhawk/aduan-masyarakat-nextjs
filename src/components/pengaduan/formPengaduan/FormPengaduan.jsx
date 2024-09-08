"use client";

import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Upload, X, CirclePlus  } from "lucide-react";

export default function FormPengaduan() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImage(null);
        setImagePreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        setBody("");
        setImage(null);
        setImagePreview(null);
    };

    return (
        <Card className="w-full ">
            <CardHeader>
                <CardTitle className="text-2xl font-bold inline-flex items-center gap-2">
                    <CirclePlus/>
                    <span>
                        Buat Pengaduan
                    </span>
                </CardTitle>
                <CardDescription>Isi form di bawah untuk membuat pengaduan</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Judul Pengaduan</Label>
                        <Input
                            id="title"
                            placeholder="Enter the title of your complaint"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="body">Isi Pengaduan</Label>
                        <Textarea
                            id="body"
                            placeholder="Describe your complaint in detail"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                            className="min-h-[150px] resize-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="image">Upload Gambar (opsional)</Label>
                        <div className="flex items-center justify-center w-full">
                            <Label
                                htmlFor="image"
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
                                            Upload Gambar
                                        </p>
                                    </div>
                                )}

                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </Label>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full" onClick={handleSubmit}>
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
}
