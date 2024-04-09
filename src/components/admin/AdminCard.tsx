import React from 'react'

interface Props {
    heading: string
    count: number | string
    bgColor?: string
}
export default function AdminCard({ heading, count, bgColor }: Props) {
    if (!bgColor) {
        bgColor = "bg-white";
    }
    return (
        <div className={`h-[200px] m-5 p-7 flex w-full flex-col items-center justify-center ${bgColor} gap-3 shadow-xl drop-shadow-md rounded-md`}>
            <span className='text-[25px] font-semibold'>{heading}</span>
            <span className='text-[30px] font-bold'> {count}</span>
        </div>
    )
}
