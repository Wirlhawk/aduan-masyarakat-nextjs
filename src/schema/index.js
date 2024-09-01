import * as z from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(1,{
        message: "Please enter your username",
    }),
    name: z.string().min(1, {
        message: "Please enter your name",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
});

export const LoginSchema = z.object({
    username: z.string().min(1,{
        message: "Please enter your username",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
});

export const PengaduanSchema = z.object({
    judul: z.string().min(1, {
        message: "Masukan judul pengaduan",
    }),
    isi: z.string().min(20, {
        message: "Masukan isi pengaduan (minimal 20)",
    }),
    // foto: z.custom((file) => file instanceof File,{
    //         message: "Masukkan file foto pengaduan",
    //     })
    //     .refine((file) => file.size <= 5 * 1024 * 1024, {
    //         message: "Ukuran file tidak boleh lebih dari 5MB",
    //     })
    //     .refine(
    //         (file) =>
    //             ["image/jpeg", "image/png", "image/gif"].includes(
    //                 file.type
    //             ),
    //         {
    //             message: "Jenis file harus berupa JPEG, PNG, atau GIF",
    //         }
    //     )
    //     .optional()
});
