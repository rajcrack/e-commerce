import AdminCard from "@/components/admin/AdminCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function AdminDashboard() {
    return (
        <div className='w-full h-full grid grid-cols-5 gap-10 pl-10 pr-20'>
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
            <AdminCard heading="Total Users" count={70} />
        </div>
    )
}
