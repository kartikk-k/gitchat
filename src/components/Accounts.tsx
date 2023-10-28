import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/Button'
import { MoreVertical } from 'lucide-react'
import Avatar1 from '@/assets/avatars/Avatar1.png'
import Avatar2 from '@/assets/avatars/Avatar2.png'
import Avatar3 from '@/assets/avatars/Avatar3.png'
import Avatar4 from '@/assets/avatars/Avatar4.png'


const testAccountsData = [
    {
        id: 1,
        name: 'Lydia Siphron',
        username: 'lydia_designs',
        lastChat: 'Meet me tomorrow a...',
        profile: Avatar1,
        status: 'idle'
    }, {

        id: 2,
        name: 'Adison Siphron',
        username: 'adison_sips',
        lastChat: 'Can you send me the ne...',
        profile: Avatar2,
        status: 'active'
    }, {

        id: 3,
        name: 'Charlie Herwitz',
        username: 'charlie',
        lastChat: 'Congratulations 🎉',
        profile: Avatar3,
        status: 'idle'
    }, {

        id: 4,
        name: 'Ryan Bergson',
        username: 'ryan_bergson',
        lastChat: 'Cool! I\'ll check it out...',
        profile: Avatar4,
        status: 'inactive'
    }
]

function Accounts() {
    const [accounts, setAccounts] = React.useState(testAccountsData)
    const [activeAccount, setActiveAccount] = React.useState(accounts[1].id)
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.div
            className='space-y-5 px-3'
        >
            {accounts.map((account, index) => (
                <motion.div
                    layout
                    key={account.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.4, ease: 'easeIn' }}
                    onClick={() => setActiveAccount(account.id)}
                    className={`group flex items-center justify-between p-2 cursor-pointer rounded-xl duration-300 ${activeAccount === account.id ? 'bg-secondary' : ''}`}
                >
                    <div className='flex items-center gap-2'>
                        <div className='relative w-10 h-10 select-none'>
                            <Image src={account.profile} alt={account.name} className='rounded-[20px] group-hover:rounded-[10px] duration-200' />
                            <div className={`w-[7px] h-[7px] rounded-full outline outline-4 outline-background absolute bottom-0.5 right-0
                        ${account.status === 'active' ? 'bg-green-500' : account.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'}`}
                            />
                        </div>

                        <div className='font-medium'>
                            <h1 className='text-sm '>{account.name}</h1>
                            <div className='h-4 overflow-hidden text-xs text-gray-400'>
                                <p className='group-hover:-translate-y-4 duration-200'>{account.lastChat}</p>
                                <p className='group-hover:-translate-y-4 duration-200'>@{account.username}</p>
                            </div>
                        </div>
                    </div>

                    <Button variant={'ghost'} size={'icon'} className='w-auto'>
                        <MoreVertical size={18} />
                    </Button>

                </motion.div>
            ))
                // : (
                // <div className='space-y-5'>
                //     <div className='animate-pulse py-2 flex items-center gap-2'>
                //         <div className='w-10 h-10 rounded-full bg-gray-500' />
                //         <div className='space-y-1'>
                //             <div className='w-16 h-4 bg-gray-500 rounded' />
                //             <div className='w-32 h-3 bg-gray-500 rounded' />
                //         </div>
                //     </div>

                //     <div className='animate-pulse py-2 flex items-center gap-2'>
                //         <div className='w-10 h-10 rounded-full bg-gray-500' />
                //         <div className='space-y-1'>
                //             <div className='w-16 h-4 bg-gray-500 rounded' />
                //             <div className='w-32 h-3 bg-gray-500 rounded' />
                //         </div>
                //     </div>

                //     <div className='animate-pulse py-2 flex items-center gap-2'>
                //         <div className='w-10 h-10 rounded-full bg-gray-500' />
                //         <div className='space-y-1'>
                //             <div className='w-16 h-4 bg-gray-500 rounded' />
                //             <div className='w-32 h-3 bg-gray-500 rounded' />
                //         </div>
                //     </div>

                //     <div className='animate-pulse py-2 flex items-center gap-2'>
                //         <div className='w-10 h-10 rounded-full bg-gray-500' />
                //         <div className='space-y-1'>
                //             <div className='w-16 h-4 bg-gray-500 rounded' />
                //             <div className='w-32 h-3 bg-gray-500 rounded' />
                //         </div>
                //     </div>
                // </div>
                // )
            }

        </motion.div>
    )
}

export default Accounts