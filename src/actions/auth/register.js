"use server";
import { revalidatePath } from "next/cache"
import prisma  from "@/lib/db"
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { z } from "zod"
import { RegisterSchema } from "@/schema"
import bcrypt from "bcryptjs"

export default async function register(data) {
    const parsedData  = RegisterSchema.safeParse(data)
    if (!parsedData.success) {
        return { error: parsedData.error.flatten() }
    }

    const { username,name, password } = parsedData.data

    const userExist = await prisma.user.findUnique({
        where: { username },
    });
    if (userExist) {
        return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
        data: {
            username,
            nama : name,
            password: hashedPassword,
        },
    });

    return { success: true };
}