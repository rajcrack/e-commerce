import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

const Footeer = () => {
    return (
        <div className='bg-[rgba(29,81,179,0.25)] w-[100%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-4 pt-10 pb-10  m-auto max-w-[90%] place-items-center'>
                {/* footer div 1 */}
                <div className=' gap-9 flex flex-col'>
                    <div> <Image src='/jiva-logo.png' alt='logo' width={125} height={50} /></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe, beatae culpa blanditiis praesentium, </p>
                    </div>

                </div>
                {/* footer div 2 */}
                <div className='text-center md:text-start'>
                    <div className='font-semibold text-[24px] text-[rgba(28,81,179,1)]'>
                        Important Link
                    </div>
                    <div className='font-normal text-[18px] flex flex-col gap-2'>
                        <span></span>
                        <Link href='/home'> <span>Home</span></Link>
                        <Link href='/donate'> <span>Donate</span></Link>
                        <Link href='/about'> <span>About</span></Link>
                        <Link href='/contact'> <span>Contact Us</span></Link>

                    </div>
                </div>
                {/* footer div 3 */}
                <div className='text-center md:text-start'>
                    <div className='font-semibold text-[24px] text-[rgba(28,81,179,1)]'>
                        Contact Us                    </div>
                    <div className='font-normal text-[18px] flex flex-col gap-2'>
                        <span></span>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='bg-blue-600 text-white text-[18px] rounded-full p-2'>   <FaWhatsapp /></span>
                            <span>+91 1234567890</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='bg-blue-600 text-white text-[18px] rounded-full p-2'>   <TfiEmail /></span>
                            <span>info@jivaadmin@gmail.com</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='bg-blue-600 text-white text-[18px] rounded-full p-2'><IoLocationOutline /></span>
                            <span>Pune Near Bharti Vidhya</span>
                        </div>
                    </div>
                </div>
                {/* footer div 4 */}

            </div>
            {/* bottom Section */}
            <div className='pt-1 bg-white max-w-[90%] m-auto'></div>
            <div className='flex max-w-[90%] m-auto pt-4 pb-4 justify-between items-center'>
                <div>@Copyrightjivasmile</div>
                <div className='text-blue-800 flex flex-row gap-3 text-[20px]'><FaFacebookF /><FaInstagram /><FaXTwitter /><FaLinkedinIn /></div>

            </div>
        </div>
    )
}

export default Footeer