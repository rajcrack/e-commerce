import React, { useContext } from 'react'
import Links from './Links'
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi'
import { usePathname } from 'next/navigation';
import LoadingSpinner from '@/components/loadingSpinner';
import { LoadingContext } from '@/lib/global/context/context';

interface Props {
    openNav: () => void
}

const NavBar = ({ openNav }: Props) => {
    const usePath = usePathname();
    const { loading } = useContext(LoadingContext);
    return (<>

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
        <div className={`transition-all duration-500 ease-in-out w-[160px] bg-white shadow-lg  h-[58px] fixed z-[200000] right-[21px] mt-[31px] border-[2px] border-gray-400 ${loading ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[200px]"}`}>
            < LoadingSpinner />
        </div>
    </>
    )
}

export default NavBar