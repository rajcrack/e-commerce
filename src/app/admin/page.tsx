import { redirect } from "next/navigation"

export default function Admin() {
    redirect('/admin/dashboard');
    // router.replace('/admin/dashboard');
    return (
        <div>Redirecting to Admin Panel Please Wait</div>
    )
}
