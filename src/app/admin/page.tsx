"use client";
import { useRouter } from "next/navigation"

export default function Admin() {
    const router = useRouter();
    router.replace('/admin/dashboard');
    return (

        <div>Redirecting to Admin Panel Please Wait</div>
    )
}
