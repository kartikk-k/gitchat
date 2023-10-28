"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProfileImg from '@/assets/avatars/Avatar2.png'
import ChatImage from '@/assets/images/chatImage.png'


function ChatSection() {

    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.div className='p-4 space-y-5 md:space-y-3 text-[#9CA8B4] font-medium'>
            {/* sender */}
            <div className='inline-flex'>
                <p className='p-3 border-2 max-w-[80%] border-[#383B3F] rounded-xl text-sm bg-background'>{`Do you mind taking a cab together to Github HQ??`}</p>
            </div>

            <div className='flex relative text-sm pb-4'>
                <p className='p-3 border-2 max-w-[80%] border-[#383B3F] rounded-xl bg-background'>
                    {`don\'t forget to bring docs`}
                </p>
                <span className='border-2 bottom-1 text-xxs flex items-center left-3 absolute h-6 px-2 rounded-full border-[#383B3F] bg-background'>👍</span>
            </div>

            <div>
                <p className='text-xs text-[#879099] px-2'>Today at  7:32 PM</p>
            </div>

            {/* receiver */}
            <div className='flex flex-col items-end'>
                {/* reply back */}
                <div className='flex gap-2 pr-2 pb-2'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xxs hover:underline cursor-pointer text-[#9CA8B4]'>{`don't forget to bring docs`}</span>
                        <Image src={ProfileImg} width={24} height={24} alt='profile' className='rounded-full' />
                    </div>
                    <div className='w-7 h-4 border-[2px] relative top-2.5 border-gray-400 border-l-0 border-b-0 rounded-tr-xl' />
                </div>

                <p className='p-3 border-2 max-w-[80%] border-primary text-white rounded-xl text-sm bg-primary'>
                    {`ok, let's meet at 12`}
                </p>
            </div>

            {!isLoading && (
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex justify-end'>
                    <p className='p-3 border-2 max-w-[80%] border-primary text-white rounded-xl text-sm bg-primary'>
                        {`animated msg`}
                    </p>
                </motion.div>
            )}

            <motion.div layout className='flex justify-end'>
                <p className='p-3 border-2 max-w-[80%] border-primary text-white rounded-xl text-sm bg-primary'>
                    {`does this work for you, if not then maybe we can connect on a call`}
                </p>
            </motion.div>

            <motion.div layout className='flex justify-end'>
                <p className='text-xs text-[#879099] px-2'>Today at  7:35 PM</p>
            </motion.div>

            {/* sender */}
            <motion.div layout className='inline-flex flex-col'>
                <div className='p-3 border-2 max-w-[80%] border-[#383B3F] space-y-2 overflow-hidden rounded-xl text-sm bg-background'>
                    <Image src={ChatImage} alt='send' className='object-cover w-full rounded-lg max-w-sm' />
                    <p className=''>{`Do you mind taking a cab together to Github HQ??`}</p>
                </div>
            </motion.div>

            <div>
                <p className='text-xs text-[#879099] px-2'>Today at  7:36 PM</p>
            </div>

        </motion.div>
    )
}

export default ChatSection