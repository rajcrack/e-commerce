import React from 'react'
import Links from './Links'
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi'
import { usePathname } from 'next/navigation';

interface Props {
    openNav: () => void
}

const NavBar = ({ openNav }: Props) => {
    const usePath = usePathname();
    return (
        <div className='flex items-center justify-between pl-7 pr-7 pt-3 pb-3 h-[90px] z-30'>
            {/* Logo */}
            <div>
                {!usePath.includes('/admin') && <Image src='/logo.png' alt='logo' width={200} height={200} />}
            </div>
            {/* others */}
            <div className='flex items-center'>
                {/* links */}
                <div className='pl-[32px] pr-[32px] hidden lg:block'>
                    <Links />
                </div>
                <div className="block lg:hidden text-[32px]"><BiMenu onClick={openNav} /></div>
            </div>
        </div>
    )
}

export default NavBar