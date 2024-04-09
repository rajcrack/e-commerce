"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    title: string,
    href: string
}
const Tile = ({ title, href }: Props) => {
    const pathName = usePathname();
    return (
        <Link href={`/admin` + href}><div className={`w-full shadow-lg text-white cursor-pointer border border-gray-500 rounded-md hover:bg-[#ff3c00] pr-3 pl-3 pb-2 pt-2 active:bg-blue-800 ${pathName.endsWith(href) && 'bg-[#ff3c00]'} transition-all duration-300 mb-3`}>{title}</div></Link>
    )
}

export default Tile