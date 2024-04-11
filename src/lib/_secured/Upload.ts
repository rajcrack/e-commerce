import { put } from '@vercel/blob';
export const UploadFunction = async ({ fileName, body }: { fileName: string, body: any }) => {

    const blob = await put(fileName, body, {
        access: "public"
    });

    return blob;
}


// const blob = await put(filename, request.body, {
//     access: 'public',
//   });
