import AdminCard from "@/components/admin/AdminCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function AdminDashboard() {
    return (
        <>
            <div className='w-[80%] mx-auto h-full grid grid-cols-3 justify-center'>
                <AdminCard heading="Total Users" count={70} height={30} />
                <AdminCard heading="Total Users" count={70} height={30} />
                <AdminCard heading="Total Users" count={70} height={30} />
                <AdminCard heading="Total Users" count={70} height={300} />
                <AdminCard heading="Total Users" count={70} height={300} />
                <AdminCard heading="Total Users" count={70} height={300} />
                <AdminCard heading="Total Users" count={70} />
                <AdminCard heading="Total Users" count={70} />
                <AdminCard heading="Total Users" count={70} />
            </div>
        </>
    )
}
