import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <div>
            <div className='relative h-[40vh]'>
                <Image 
                    src='/header-banner-img.jpg' 
                    alt='banner' 
                    layout="fill"
                    objectFit="cover"
                />
                <div className='absolute -bottom-12 left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
                    <Image
                        src='/header-profile-img.jpg'
                        alt='display picture'
                        width={110}
                        height={110}
                        className='rounded-full border-8 border-zinc-700 bg-zinc-700'
                    />
                </div>
            </div>
            <div className='mt-16 px-4'>
                <ul className='space-y-2 text-xs lg:text-base font-light lg:text-center'>
                    <li><h1 className='font-bold text-xl lg:text-2xl'>Janna Marie Smith</h1></li>
                    <li className='font-medium'>ABC Company | UI/UX Designer</li>
                    <li>jannamariesmith@gmail.com</li>
                    <li>+639123456789</li>
                    <li>
                        <ul className='flex gap-2 lg:justify-center'>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/facebook-icon.png'
                                    alt='facebook logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/messenger-icon.webp'
                                    alt='messenger logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/Instagram_icon.png.webp'
                                    alt='instagram logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/linkedin-icon.png'
                                    alt='linkedin logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/mail-svgrepo-com.png'
                                    alt='linkedin logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/phone-svgrepo-com (1).png'
                                    alt='linkedin logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                            <li className='bg-zinc-500 rounded-full p-1 text-center flex justify-items-center'>
                                <Image
                                    src='/globe-svgrepo-com.png'
                                    alt='linkedin logo'
                                    width={15}
                                    height={15}
                                    className='m-2'
                                />
                            </li>
                        </ul>
                    </li>
                    <li className='flex gap-2 lg:justify-center'>
                        <button className="basis-1/2 lg:basis-1/5 lg:mt-3 py-2 rounded-full font-bold bg-purple-600">Email</button>
                        <button className="basis-1/2 lg:basis-1/5 lg:mt-3 py-2 rounded-full font-bold border-2 border-purple-600 text-purple-600">Save</button>    
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;