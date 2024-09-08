import React from 'react'
import ListPengaduan from '@/components/pengaduan/ListPengaduan'
import { getAllPengaduan, getLatestPengaduan } from '@/actions/pengaduan/action'
import PageTitle from "@/components/PageTitle";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function page() {
    const listPengaduan = await getAllPengaduan();
    // console.log(listPengaduan)   
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-y-hidden">
          <PageTitle>List Pengaduan</PageTitle>
          <ListPengaduan listPengaduan={listPengaduan} />
          {/* <Card ClassName="w-full bg-blue-500"></Card> */}
      </main>
    );
}




