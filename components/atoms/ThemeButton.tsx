"use client";

import { useTheme } from "next-themes";
import IconMaker from '../../utils/IconMaker';
import { EIconName } from '@/types/enum';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true); // i have hydratio error because of theme
    }, []);

    if (!mounted) {
        return
    }

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-gray-700 dark:bg-gray-300 dark:hover:bg-gray-200 hover:bg-gray-800 dark:text-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-400 dark:border-gray-600 rounded shadow" >
            {theme === "dark" ? <IconMaker name={EIconName.SUN} /> : <IconMaker name={EIconName.MOON} />}
        </button>
    );
}

export default ThemeButton;