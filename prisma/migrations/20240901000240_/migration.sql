/*
  Warnings:

  - You are about to drop the column `isi_laporan` on the `Pengaduan` table. All the data in the column will be lost.
  - Added the required column `isi_pengaduan` to the `Pengaduan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `judul_pengaduan` to the `Pengaduan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengaduan" DROP COLUMN "isi_laporan",
ADD COLUMN     "isi_pengaduan" TEXT NOT NULL,
ADD COLUMN     "judul_pengaduan" TEXT NOT NULL;
