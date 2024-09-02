import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabMasyarakat from '../../components/akun/TabMasyarakat';
import TabPetugas from '../../components/akun/TabPetugas';
import PageTitle from "@/components/PageTitle";
import { getAllUser } from '@/actions/akun/action';

export default async function page() {
    // const masyarakat = await getAllUser("Masyarakat")
    // const petugas = await getAllUser("Petugas")
    const [masyarakat, petugas] = await Promise.all([
        getAllUser("Masyarakat"),
        getAllUser("Petugas")
    ])
    
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <PageTitle>Manage Akun</PageTitle>

            <Tabs defaultValue="masyarakat">
                <TabsList className=" justify-start rounded-lg border  ">
                    <TabsTrigger value="masyarakat">Masyarakat</TabsTrigger>
                    <TabsTrigger value="petugas">Petugas</TabsTrigger>
                </TabsList>
                <TabsContent value="masyarakat">
                    <TabMasyarakat users={masyarakat} />
                </TabsContent>
                <TabsContent value="petugas" >
                    <TabPetugas users={petugas} />
                </TabsContent>
            </Tabs>
        </main>
    );
}
