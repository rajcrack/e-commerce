import { UserLogin } from '@/lib/_secured/User';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { data, password } = await request.json();
        const user = await UserLogin({
            data, password
        });

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            error: error
        });
    }
}