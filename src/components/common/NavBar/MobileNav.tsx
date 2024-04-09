import React from 'react'
import { ImCross } from 'react-icons/im';
import { NavLinks } from './ResponsiveNav';
import Link from 'next/link';



interface Props {
    closeNav: () => void;
    nav: boolean;
}
const MobileNav = ({ closeNav, nav }: Props) => {
    const navStyle = nav ? 'translate-x-0' : 'translate-x-[-100%]';
    return (
        <div className={`fixed flex flex-row-reverse ${navStyle} lg:hidden left-0 right-0 bottom-0 top-0 transition-all duration-500 bg-[#000000e0] z-[1002]`}>
            {/* Nav Div */}
            <div className={`bg-white ${navStyle} transition-all duration-500 delay-200 flex items-center justify-center w-[40%] h-[100%]`}>
                <ul className='space-y-10'>
                    {NavLinks.map((link, index) => (<li key={index}><Link href={link.href}>{link.title}</Link></li>))}

                </ul>
            </div>
            <ImCross onClick={closeNav} className='absolute top-[2rem] w-[1.5rem] h-[1.5rem] right-[2rem] text-black cursor-pointer' />

        </div>
    )
}

export default MobileNav