"use client";

import { useTheme } from '@/hooks/useTheme'
import React from 'react'

const ThemeButon = () => {
    const { isDarkMode, changeTheme } = useTheme()
    return (
        <button
            onClick={()=>changeTheme()}
            className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
            {isDarkMode ? '🌞' : '🌙'}
        </button>)
}

export default ThemeButon