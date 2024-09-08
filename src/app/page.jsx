import { useSession, signIn, signOut} from "next-auth/react";
import StatCard from "@/components/home/StatCard"
import ComplaintItem from "@/components/home/ComplaintItem"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import { getLatestPengaduan, countStatusPengaduan } from '@/actions/pengaduan/action'


export default async function Home() {
    const [pengaduanList, countStatus] = await Promise.all([
        getLatestPengaduan(4),
        countStatusPengaduan()
    ]);

    const statusCounts = countStatus.reduce((acc, curr) => {
        acc[curr.status] = curr._count.status;
        return acc;
    }, {});

    const totalCount = countStatus.reduce((total, curr) => {
        return total + curr._count.status;
    }, 0);

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <PageTitle>Selamat Datang di Admas</PageTitle>

            {/* stats */}
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Jumlah Pengaduan"
                    value={totalCount}
                    change="+20.1% from last month"
                    color="blue"
                    className="bg-blue-100 text-blue-800"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-blue-600"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    }
                />
                <StatCard
                    title="Belum Diproses"
                    value={statusCounts["Pending"] || 0}
                    change="+19% from last month"
                    color="yellow"
                    //   className="bg-yellow-100"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-yellow-600"
                        >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <path d="M2 10h20" />
                        </svg>
                    }
                />
                <StatCard
                    title="Sedang Diproses"
                    value={statusCounts['Proses'] || 0}  // Safely access 'Proses' count
                    change="+5.1% from last month"
                    color="purple"
                    //   className="bg-purple-100"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-purple-600"
                        >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    }
                />
                <StatCard
                    title="Pengaduan Selesai"
                    value={statusCounts['Selesai'] || 0}  // Safely access 'Selesai' count
                    change="+180.1% from last month"
                    color="green"
                    className="bg-green-100 text-green-800"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-green-600"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    }
                />
            </div>

            {/* complaint list */}
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Pengaduan Terbaru</CardTitle>
                    <CardDescription>
                        {pengaduanList.length} Pengaduan belum di selesaikan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {pengaduanList.map((pengaduan) => (
                            <ComplaintItem
                                key={pengaduan.id}
                                name={pengaduan.masyarakat.username}
                                complaint={pengaduan.judul_pengaduan}
                                status={pengaduan.status}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
