import ChatHeader from '@/components/ChatHeader'
import ChatInput from '@/components/ChatInput'
import React from 'react'

function Chat() {
    return (
        <div className='h-full flex flex-col'>
            {/* chat header */}
            <div className='shrink-0'>
                <ChatHeader />
                <hr className='border-gray-900 mx-2' />
            </div>

            {/* chat inbox */}
            <div className='h-full flex flex-col justify-between'>
                {/* chats */}
                <div>chats</div>

                {/* input */}
                <div className='p-4 bg-secondary'>
                    <ChatInput />
                </div>
            </div>
        </div>
    )
}

export default Chat