import React from 'react'
import { useTheme } from '../ThemeContext';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
const MainPage = () => {
    const { isDarkTheme } = useTheme();
  return (
    <div className={`pt-7 md:px-20 xl:px-36 px-7 ${isDarkTheme? "bg-dark": "bg-light"} min-h-screen`}>  
    <Header />
    <TopCards />
    </div>
  )
}

export default MainPage
