import { FunctionUserList } from '@/lib/_secured/admin/dashboard';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const data = await FunctionUserList();

        return NextResponse.json({ data, message: 'GET request success' });
    } catch (error) {
        return NextResponse.error();
    }
}
