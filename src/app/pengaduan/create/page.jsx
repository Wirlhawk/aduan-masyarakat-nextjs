import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import FormPengaduan from '@/components/pengaduan/formPengaduan/FormPengaduan';
import FormPengaduanZod from '@/components/pengaduan/formPengaduan/FormPengaduanZod';

export default function page() {
  return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <PageTitle>Buat Pengaduan Baru</PageTitle>


          {/* <Card className="w-full">
              <CardHeader>
                  <CardTitle>Pengaduan</CardTitle>
                  <CardDescription>
                      Isi keterangan pengaduan anda dibawah ini.
                  </CardDescription>
              </CardHeader>
              <CardContent> */}
                <div className="w-full flex justify-between">

                  {/* <FormPengaduan/> */}
                  <FormPengaduanZod/>
                </div>
              {/* </CardContent>
          </Card> */}
      </main>
  );
}
