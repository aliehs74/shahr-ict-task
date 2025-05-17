"use client";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { toggleTheme } from '@/redux/features/themeSlice';

export const useTheme = () => {
    const dispatch = useDispatch();
    const { isDarkMode, isUserChange } = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        if (isUserChange)
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode, isUserChange]);

    const changeTheme = () => dispatch(toggleTheme());

    return { isDarkMode, changeTheme };
};
