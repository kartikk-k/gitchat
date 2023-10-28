import { Search } from 'lucide-react'
import React from 'react'

function SidebarSearch() {
    return (
        <div className='bg-secondary p-2 h-10 flex items-center gap-2 text-gray-400 rounded-xl'>
            <Search size={18} />
            <input
                type="text"
                name="search"
                placeholder='search here...'
                className='text-sm placeholder:font-normal font-medium w-full bg-transparent outline-none'
            />
        </div>
    )
}

export default SidebarSearch