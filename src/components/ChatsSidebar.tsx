import { Add, Mirror, Setting2, Sort } from 'iconsax-react'
import React from 'react'
import { Button } from './ui/Button'
import SidebarSearch from './SidebarSearch'
import Accounts from './Accounts'
import Image from 'next/image'
import ProfileImg from '@/assets/avatars/Profile.png'

function ChatsSidebar() {
    return (
        <div className='flex flex-col h-full justify-between'>
            {/* top */}
            <div className='py-4 space-y-4'>
                {/* header */}
                <div className='px-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2 group cursor-pointer'>
                        <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'>
                            <Mirror className='p-0 group-hover:p-0.5 duration-200' />
                        </div>
                        <div>
                            <h1 className='text-sm font-medium'>Gitchat</h1>
                            <p className='text-xs text-gray-400'>v-0.0.1</p>
                        </div>
                    </div>

                    <div>
                        <Button variant={'ghost'} size={'icon'}>
                            <Add />
                        </Button>
                        <Button variant={'ghost'} size={'icon'}>
                            <Sort />
                        </Button>
                    </div>
                </div>

                <hr className='border-gray-600 mx-3' />

                {/* search */}
                <div className='px-4'>
                    <SidebarSearch />
                </div>

                {/* people */}
                <div>
                    <Accounts />
                </div>
            </div>

            {/* bottom */}
            <div>
                <hr className='border-gray-600 mx-3' />
                {/* logged in user */}
                <div className='px-2 py-4 flex items-center justify-between'>
                    <div className='flex px-2 items-center gap-2 group'>
                        <div className='relative w-10 h-10 select-none'>
                            <Image src={ProfileImg} alt='Maren Culhane' className='rounded-[20px]' />
                            <div className={`w-[7px] h-[7px] rounded-full outline outline-4 outline-background absolute bottom-0.5 right-0 bg-yellow-500`}
                            />
                        </div>

                        <div className='font-medium'>
                            <h1 className='text-sm '>Maren Culhane</h1>
                            <div className='h-4 overflow-hidden text-xs text-gray-400'>
                                <p className='group-hover:-translate-y-4 duration-200'>@maren_codes</p>
                                <p className='group-hover:-translate-y-4 duration-200'>idle</p>
                            </div>
                        </div>
                    </div>
                    <Button variant={'ghost'} size={'icon'} >
                        <Setting2 size={20} variant='Bold' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChatsSidebar