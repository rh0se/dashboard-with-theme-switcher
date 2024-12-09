import React from 'react';
import { useTheme } from '../ThemeContext';
import { IoToggleSharp } from "react-icons/io5";


const Header = () => {
const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
    <div>
    <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        </div>
        <div className='flex items-center' >
            <p className='mr-7'>{`${isDarkTheme? "Dark Mode":"Light Mode"}`}</p>
            <button className='text-4xl' onClick={toggleTheme}><IoToggleSharp className={`${isDarkTheme? 'rotate-180 text-darkToggle1': 'rotate-0 text-lightToggle1'}`}></IoToggleSharp></button>
        </div>    
    </div>
</div>
      
    </>
  )
}

export default Header;
