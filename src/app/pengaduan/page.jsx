import React from 'react'
import ListPengaduan from '@/components/pengaduan/ListPengaduan'
import { getAllPengaduan } from '@/actions/pengaduan/action'

export default async function page() {
    const listPengaduan = await getAllPengaduan()
    console.log(listPengaduan)
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl text-primary">
                  List Pengaduan
              </h1>
          </div>
        <ListPengaduan listPengaduan = {listPengaduan} />

      </main>
  );
}




