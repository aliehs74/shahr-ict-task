"use client";

import { useDispatch } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { setTheme } from '@/redux/features/themeSlice';

const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
        return { isDarkMode: true, isUserChange: true };

    } else if (storedTheme === 'light') {
        return { isDarkMode: false, isUserChange: true };

    } else {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return { isDarkMode: isDark, isUserChange: false };
    }
};
 
const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initialTheme = getInitialTheme()  
        dispatch(setTheme(initialTheme));
    }, [dispatch]);

    return (
        <>
            {children}
        </>
    );
};

export default ThemeProvider;