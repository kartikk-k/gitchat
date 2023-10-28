import React from 'react'
import Image from 'next/image'
import ProfileImg from '@/assets/avatars/Avatar2.png'
import { Button } from './ui/Button'
import { Search } from 'lucide-react'
import { InfoCircle } from 'iconsax-react'

function ChatHeader() {
    return (
        <div className='flex items-center p-4 justify-between cursor-default'>
            <div className='flex items-center gap-4'>
                <div className='w-10 relative h-10'>
                    <Image src={ProfileImg} alt='Maren Culhane' className='rounded-[20px]' />
                    <div className={`w-[7px] h-[7px] rounded-full outline outline-4 outline-background absolute bottom-0.5 right-0 bg-green-500`}
                    />
                </div>
                <div className='font-medium'>
                    <h1 className='text-sm'>Adison Siphron</h1>
                    <p className='text-xs text-gray-400'>@adison_sip</p>
                </div>
            </div>

            <div className='space-x-6'>
                <Button variant={'ghost'} size={'icon'} className='w-auto'>
                    <Search size={20} strokeWidth={1.5} />
                </Button>
                <Button variant={'ghost'} size={'icon'} className='w-auto'>
                    <InfoCircle size={20} />
                </Button>
            </div>
        </div>
    )
}

export default ChatHeader