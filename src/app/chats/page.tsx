import ChatHeader from '@/components/ChatHeader'
import ChatInput from '@/components/ChatInput'
import ChatSection from '@/components/ChatSection'
import React from 'react'

function Chat() {
    return (
        <div className='h-[100dvh] overflow-hidden flex flex-col'>
            {/* chat header */}
            <div className='shrink-0'>
                <ChatHeader />
                <hr className='border-gray-900 mx-2' />
            </div>

            {/* chat inbox */}
            <div className='flex h-full flex-col justify-between overflow-y-auto'>
                {/* chats */}
                <ChatSection />

                {/* input */}
                <div className='p-4 sticky bottom-0 shrink-0 bg-secondary'>
                    <ChatInput />
                </div>
            </div>
        </div>
    )
}

export default Chat