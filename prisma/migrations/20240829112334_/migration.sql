-- CreateEnum
CREATE TYPE "Role" AS ENUM ('masyarakat', 'petugas', 'admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'proses', 'selesai');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "telp" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'masyarakat',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengaduan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isi_laporan" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "id_masyarakat" INTEGER NOT NULL,

    CONSTRAINT "Pengaduan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tanggapan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isi_tanggapan" TEXT NOT NULL,
    "id_pengaduan" INTEGER NOT NULL,
    "id_petugas" INTEGER NOT NULL,

    CONSTRAINT "Tanggapan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Pengaduan" ADD CONSTRAINT "Pengaduan_id_masyarakat_fkey" FOREIGN KEY ("id_masyarakat") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanggapan" ADD CONSTRAINT "Tanggapan_id_pengaduan_fkey" FOREIGN KEY ("id_pengaduan") REFERENCES "Pengaduan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanggapan" ADD CONSTRAINT "Tanggapan_id_petugas_fkey" FOREIGN KEY ("id_petugas") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
