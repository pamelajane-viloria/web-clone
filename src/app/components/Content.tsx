import React from 'react';
import Image from 'next/image';

function Content() {
    return (
        <div className='mt-5 px-4 flex lg:justify-center'>
            <div className='lg:w-[60vw]'>
                <h2 className='text-center font-bold text-purple-600 text-2xl'>ABC Company</h2>
                <ul className='text-xs lg:text-sm flex flex-col gap-1'>
                    <li className='font-bold text-sm lg:text-base mt-3'>Company Overview</li>
                    <li className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat scelerisque lorem ac rutrum. Vestibulum vel dolor at purus feugiat semper.</li>
                    <li className='font-bold text-sm lg:text-base mt-3'>Our Services</li>
                    <li className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat scelerisque lorem ac rutrum. Vestibulum</li>
                    <li className='mt-3'>
                        <ul className='grid grid-rows-2 grid-flow-col gap-4'>
                            <li className='border-8 border-zinc-500 rounded-[17px] bg-zinc-500 relative w-full'>
                                <Image
                                    src='/gallery-1.jpg'
                                    alt='Lorem Ipsum'
                                    layout='fill'
                                    objectFit='cover'
                                    className='rounded-[11px]'
                                />
                                <div className='absolute bg-zinc-500/50 bottom-0 py-1 w-full'>
                                    <p className='px-3 text-sm font-semibold'>Lorem Ipsum</p>
                                    <p className='px-3'>Lorem ipsum</p>
                                </div>
                            </li>
                            <li className='border-8 border-zinc-500 rounded-[17px] bg-zinc-500 relative w-full'>
                                <Image
                                    src='/gallery-2.avif'
                                    alt='Lorem Ipsum'
                                    layout='fill'
                                    objectFit='cover'
                                    className='rounded-[11px]'
                                />
                                <div className='absolute bg-zinc-500/50 bottom-0 py-1 w-full'>
                                    <p className='px-3 text-sm font-semibold'>Lorem Ipsum</p>
                                    <p className='px-3'>Lorem ipsum</p>
                                </div>
                            </li>                        
                            <li className='row-span-2 border-8 border-zinc-500 rounded-[17px] inline-block w-36 bg-zinc-500 relative w-full lg:h-screen h-80'>
                                <Image
                                    src='/gallery-2.jpg'
                                    alt='Lorem Ipsum'
                                    layout='fill'
                                    objectFit='cover'
                                    className='rounded-[11px]'
                                />
                                <div className='absolute bg-zinc-500/50 bottom-0 py-1 w-full'>
                                    <p className='px-3 text-sm font-semibold'>Lorem Ipsum</p>
                                    <p className='px-3'>Lorem ipsum</p>
                                </div>
                            </li>                        
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Content;