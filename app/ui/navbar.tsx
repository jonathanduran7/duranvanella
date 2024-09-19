'use client'

import { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar() {

  const [theme, setTheme] = useState('light')

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="w-full flex justify-between">
      <ul className="flex gap-4">
        <li className="cursor-pointer underline font-bold">
          home
        </li>
        <li className="cursor-pointer">
          projects
        </li>
        <li className="cursor-pointer">
          contact
        </li>
      </ul>

      <div className='flex gap-3'>
        <div className='cursor-pointer'>
          <p>es/en</p>
        </div>
        <div className='cursor-pointer' onClick={handleThemeChange}>
          {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
        </div>
      </div>
    </div >
  );
}
