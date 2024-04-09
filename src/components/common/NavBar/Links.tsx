"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React from 'react'
import { NavLinks } from './ResponsiveNav';



const Links = () => {
    const usePathName = usePathname();
    return (
        <div className='flex items-center space-x-20'>
            {NavLinks.map((item, index) => (
                <div key={index} className={`text-[18px] font-medium hover:text-blue-500 ${usePathName === item.href && 'text-blue-600'}`}>
                    <Link href={item.href}>{item.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default Links