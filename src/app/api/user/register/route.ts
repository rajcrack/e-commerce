import { UserRegister } from '@/lib/_secured/User';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, phone, password } = await request.json();
        const user = await UserRegister({ name, email, phone, password });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            error: error
        });
    }
}