"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Admin() {
    const router = useRouter();
    useEffect(() => {
        function goToDashboard() {
            router.replace('/admin/dashboard');
        }
        goToDashboard();
    }, []);
    return (

        <div>Redirecting to Admin Panel Please Wait</div>
    )
}
