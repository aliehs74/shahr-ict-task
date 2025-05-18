import React from 'react'
import ThemeButton from '../atoms/ThemeButton'
import Link from 'next/link'
import IconMaker from '@/utils/IconMaker'
import { EIconName } from '@/types/enum'

const Header = () => {
    const navTitle = ['Home', 'About', 'Contact'];

    return (
        <header className="dark:bg-white bg-gray-800  shadow-sm flex justify-center items-center p-4" >
            <div className='flex w-1/6'>
                <IconMaker name={EIconName.HEADER_LOGO} props={{ className: 'w-8 h-8 mr-2 text-gray-200 dark:text-gray-800 ' }} />
                <h1 className="text-lg font-bold text-gray-200 dark:text-gray-800">Products Explorer</h1>
            </div>

            <nav className="flex flex-auto space-x-6 justify-center">
                {navTitle.map((title, index) => <Link href="#" key={index} className="text-gray-400 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-900">{title}</Link>)}
            </nav>

            <div className='flex w-1/6 justify-end'>
                <ThemeButton />
            </div>

        </header >
    )
}

export default Header


