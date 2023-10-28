"use client"

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ChatsSidebar from '@/components/ChatsSidebar'
import { useSwipeable } from 'react-swipeable'

function ChatsLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    const openHandlers = useSwipeable({
        onSwipedRight: () => setIsSidebarOpen(true),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const closeHandlers = useSwipeable({
        onSwipedLeft: () => setIsSidebarOpen(false),
        trackMouse: true,
        preventScrollOnSwipe: true,
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='md:grid grid-cols-[300px,1fr] h-screen relative'>

            {/* desktop sidebar */}
            <div className='hidden md:block'>
                <ChatsSidebar />
            </div>

            {/* mobile sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        {...closeHandlers}
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                        className='md:hidden bg-background h-screen w-[300px] z-20 absolute top-0 left-0'
                    >
                        <ChatsSidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            <div {...openHandlers} className='bg-secondary h-full'>
                {children}
            </div>

            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className='bg-black/60 fixed top-0 md:hidden left-0 z- w-screen h-screen'
                />
            )}

        </motion.div>
    )
}

export default ChatsLayout