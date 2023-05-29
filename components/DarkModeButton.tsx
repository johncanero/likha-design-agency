'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';


function DarkModeButton() {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<div className='md:ml-3 md:mt-3 lg:mt-4'>
			{currentTheme === 'light' ? (
				<MoonIcon
					className="w-5 md:w-6 h-6 cursor-pointer text-stone-700"
					onClick={() => setTheme('dark')}
				/>
			) : (

				<SunIcon
					className="w-5 md:w-6 h-6 cursor-pointer text-amber-300 md:text-stone-700"
					onClick={() => setTheme('light')}
				/>
			)}
		</div>
	);
}

export default DarkModeButton;
