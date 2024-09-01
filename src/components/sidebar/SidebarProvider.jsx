'use client'
import { Sidebar } from './Sidebar'
import Header from './Header'
import { usePathname } from "next/navigation";

const disabledRoute = ["/login", "/register"];


export default function SidebarProvider({ children }) {
    const pathName = usePathname();
    if (disabledRoute.includes(pathName)) {
        return children 
    }

    return (
        <div className="flex h-screen w-full">
            <Sidebar/>
            <div className="flex flex-1 flex-col">
                <div className='h-14'>
                    <Header />
                </div>
                
                <div className="overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}