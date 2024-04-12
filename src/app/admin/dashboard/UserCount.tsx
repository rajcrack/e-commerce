"use client";
import AdminCard from '@/components/admin/AdminCard';
import React, { useEffect, useState } from 'react'

export default function UserCount() {
    const [data, setData] = useState({
        activeUser: 0,
        inActiveUser: 0
    });
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('/api/admin/dashboard', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const { data } = await response.json();
            const { activeUser, inActiveUser } = data;
            setData({
                activeUser: activeUser,
                inActiveUser: inActiveUser
            });
        }
        getUsers();
    }, []);
    return (
        <>   <AdminCard heading="Active Users" count={data.activeUser} height={20} bgColor='bg-green-600' fgColor='text-white' url="/users/active" />
            <AdminCard heading="InActive Users" count={data.inActiveUser} height={20} bgColor='bg-red-400' fgColor='text-white' url="/users/inactive" /></>
    )
}
