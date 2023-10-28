"use client"

import React from 'react'
import { Button } from './ui/Button'
import { Paperclip, Smile } from 'lucide-react'

function ChatInput() {

    const [message, setMessage] = React.useState('')

    return (
        <div className='bg-background py-1 flex items-start justify-between rounded-lg min-h-[48px] px-1'>
            <div className='flex w-full gap-2'>
                <Button variant={'ghost'} size={'icon'}>
                    <Smile size={24} strokeWidth={1.5} />
                </Button>
                <div className='flex items-center w-full'>
                    <div
                        onInput={(e) => setMessage(e.currentTarget.textContent || '')}
                        className='w-full relative z-10 outline-none text-gray-300'
                        contentEditable
                        aria-multiline
                        autoFocus
                        placeholder='type your message here...'
                    >
                    </div>

                    {!message.length && (
                        <p className='absolute z-0 text-sm text-gray-400 select-none'>type your message here...</p>
                    )}
                </div>
            </div>

            <div>
                <Button variant={'ghost'} size={'icon'}>
                    <Paperclip size={20} strokeWidth={1.5} />
                </Button>
            </div>
        </div>
    )
}

export default ChatInput