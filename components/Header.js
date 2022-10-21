import React from 'react'
import Image from 'next/image'
import {    SearchIcon,
            GlobeAltIcon,
            MenuIcon,
            UserCircleIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex h-10 items-center cursor-pointer">
                <Image layout="fill" objectFit="contain" objectPosition="left" />
            </div>

            <div className="flex items-center md:border-2 rounded-full p-2">
                <input type="text" placeholder="Start your search" className="pl-5 bg-transparent outline-none text-sm text-gray-600 flex-grow md:shadow-sm"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6"/>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
