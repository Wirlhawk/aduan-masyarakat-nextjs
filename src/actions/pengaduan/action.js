"use server"
import { revalidatePath } from "next/cache"
import prisma  from "@/lib/db"
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { z } from "zod"
import { PengaduanSchema } from "@/schema"

export async function createPengaduan(data) {
    const session = await getServerSession(authOptions)
    const parsedData  = PengaduanSchema.safeParse(data)
    if (!parsedData.success) {
        return { error: parsedData.error.flatten() }
    }

    const { judul,isi } = parsedData.data

    await prisma.pengaduan.create({
        data: {
            judul_pengaduan : judul,
            isi_pengaduan : isi,
            id_masyarakat : session.user.id,
        },
    });
    revalidatePath("/")
    revalidatePath("/pengaduan");

    return { success: true }
}

export async function getAllPengaduan() {
    const pengaduanList = await prisma.pengaduan.findMany({
        include: {
            masyarakat: true, 
        },
        orderBy: {
            tanggal: "desc",
        },
    })

    return pengaduanList;
}

export async function getLatestPengaduan(number) {
    const pengaduanList = await prisma.pengaduan.findMany({
        include: {
            masyarakat: true, 
        },
        orderBy: {
            tanggal: "desc",
        },
        take: number
    })

    return pengaduanList;
}

export async function getPengaduan(id) {
    return await prisma.pengaduan.findUnique({
        where: {
            id
        },
        include: {
            masyarakat: true,

        },
    })
}

export async function updatePengaduanStatus(id,status) {
    await prisma.pengaduan.update({
        where : {
            id
        },
        data : {
            status 
        }
    })
    revalidatePath(`/pengaduan/${id}`)
}

export async function countStatusPengaduan() {
    return await prisma.pengaduan.groupBy({
        by: ['status'],
        _count: {
            status: true,
        },
    });
};



