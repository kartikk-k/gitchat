"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ChatsSidebar from '@/components/ChatsSidebar'

function ChatsLayout({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-[300px,1fr] h-screen'>
            <div className=''>
                <ChatsSidebar />
            </div>

            <div className='bg-secondary p-4 text-xs'>
                {children}
            </div>

        </motion.div>
    )
}

export default ChatsLayout