import React from 'react';
import { useTheme } from '../ThemeContext';
import { IoToggleSharp } from "react-icons/io5";


const Header = () => {
const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
    <div>
    <div className='flex md:flex-row gap-4 flex-col md:justify-between md:items-center'>
        <div className='flex flex-col'>
        <h1 className={`${isDarkTheme? "text-white": "text-VeryDarkBlue"} text-2xl font-extrabold` } >Social Media Dashboard</h1>
        <p className={`${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"} text-xs font-bold`}>Total Followers: 23,004</p>
        </div>
        <div className='flex md:p-0 pt-2 items-center justify-between md:border-0 border-t-2 border-DesaturatedBlue' >
            <p className={`${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"} text-xs mr-3 font-bold`}>{`${isDarkTheme? "Dark Mode":"Light Mode"}`}</p>
            <button className='text-4xl' onClick={toggleTheme}><IoToggleSharp className={`${isDarkTheme? 'rotate-180 text-darkToggle1': 'rotate-0 text-lightToggle1'}`}></IoToggleSharp></button>
        </div>    
    </div>
</div>
      
    </>
  )
}

export default Header;
