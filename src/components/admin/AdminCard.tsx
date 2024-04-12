import Link from 'next/link';

interface Props {
    heading: string
    count: number | string
    bgColor?: string
    fgColor?: string
    height?: number | string | null | undefined
    url?: string
}
export default function AdminCard({ heading, count, bgColor, height, fgColor, url }: Props) {
    if (!bgColor) {
        bgColor = "bg-white";
    }
    if (!height) {
        height = "h-[300px]";
    }
    if (!fgColor) {
        fgColor = 'text-black';
    }
    else {
        height = `h-[${height}px]`;
    }

    if (url) {
        url = `${'/admin' + url}`;
    }
    return (
        <Link href={`${url ?? '#'}`}>
            <div className={`m-5 p-7 flex w-full max-w-[350px] flex-col items-center justify-center ${bgColor} ${height} gap-3  shadow-xl  rounded-md ${fgColor}`}>
                <span className='text-[20px] font-semibold'>{heading}</span>
                <span className='text-[22px] font-bold'> {count}</span>
            </div>
        </Link>
    )
}

