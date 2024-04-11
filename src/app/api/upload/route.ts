import { UploadFunction } from '@/lib/_secured/Upload';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        // const { searchParams } = new URL(request.url);
        // const filename = searchParams.get('filename') ?? "randomFile";
        const blobData = await UploadFunction({ fileName: (file as File).name, body: file });
        return NextResponse.json({ file: blobData, message: "file stored successfully" });
    } catch (error) {
        return NextResponse.error();
    }
}