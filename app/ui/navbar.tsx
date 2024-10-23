'use client'

import { useContext } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../context/ThemeContext';
import Link from 'next/link';

export default function Navbar() {

  const { theme, handleThemeChange } = useContext(ThemeContext)

  return (
    <div className="w-full flex justify-between text-black dark:text-darkForeground">
      <ul className="flex gap-4">
        <Link href="/" className="cursor-pointer underline font-bold">
          home
        </Link>
        <Link href="/blog" className='cursor-pointer'>
          blog
        </Link>
      </ul>

      <div className='flex gap-3'>
        <div className='cursor-pointer hidden'>
          <p>es/en</p>
        </div>
        <div className='cursor-pointer' onClick={handleThemeChange}>
          {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
        </div>
      </div>
    </div >
  );
}
