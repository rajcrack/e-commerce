import { FunctionUserList } from '@/lib/_secured/admin/user';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const q = searchParams.get('type');
        let activity: boolean = (q == "active") ? true : false;
        console.log(activity);
        const usersList = await FunctionUserList(activity);

        return NextResponse.json({ usersList });
    } catch (error) {
        return NextResponse.error();
    }
}


export async function PUT(request: Request) {
    try {
        const { id, isActive } = await request.json();

        return NextResponse.json({ message: 'updated Successfully' });
    } catch (error) {
        return NextResponse.error();
    }
}