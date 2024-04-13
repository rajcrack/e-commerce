"use client";
import { AdminDeskTopLayout } from "@/components/admin/Sidebar/DeskTopLayout";



// export const metadata: Metadata = {
//     title: {
//         default: "Admin",
//         template: "%s | Admin"
//     },
//     description: "The Admin Dashboard Prepared to view by Admin only.",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <main className="flex lg:flex-row gap-2 bg-[#efefef]">
            <div className="lg:w-[300px] w-[200px] bg-[#273247] border-r-2 shadow-sm h-full fixed top-0 left-0 overflow-hidden z-[200]">
                <AdminDeskTopLayout />
            </div>
            <div className="lg:ml-[300px] ml-200px w-full">

                {children}

            </div>
        </main>

    );
}
