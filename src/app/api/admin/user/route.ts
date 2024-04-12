import { FunctionUserList } from '@/lib/_secured/admin/user';
import prisma from '@/lib/prisma';
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
        const url = new URL(request.url);
        const { searchParams } = url;
        const call = searchParams.get('update');
        if (call == "isActive") {
            const { id, isActive } = await request.json();
            const user = await prisma.user.update({
                data: { isActive: isActive },
                where: {
                    id: id
                }
            });
            return NextResponse.json({ user, message: 'updated Successfully' });

        }
        return NextResponse.json({ message: 'Please Provide the data you want to update.' });
    } catch (error) {
        return NextResponse.error();
    }
}