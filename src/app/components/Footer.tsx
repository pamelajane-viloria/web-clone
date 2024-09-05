import React from 'react';
import Image from 'next/image';

function Footer() {
    const iconStyle = {
        margin: '2px'
    }
    
    return (
        <div className='my-10'>
            <ul className=' flex flex-col justify-center text-center gap-2'>
                <li className='font-bold text-xl lg:text-2xl text-purple-600'>ABC Company</li>
                <li className='flex justify-center'>
                    <ul className='flex flex-row gap-2'>
                        <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                            <Image
                                src='/facebook-icon.png'
                                alt='facebook logo'
                                width={15}
                                height={15}
                                style={iconStyle}
                            />
                        </li>
                        <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                            <Image
                                src='/messenger-icon.webp'
                                alt='messenger logo'
                                width={15}
                                height={15}
                                style={iconStyle}
                            />
                        </li>
                        <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                            <Image
                                src='/Instagram_icon.png.webp'
                                alt='instagram logo'
                                width={15}
                                height={15}
                                style={iconStyle}
                            />
                        </li>
                    </ul>
                </li>
                <li className='text-xs font-light'>Copyright 2024 ABC Company. All Right Reserved</li>
            </ul>
        </div>
    );
}

export default Footer;