import React from 'react'
import { useTheme } from '../ThemeContext';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
const MainPage = () => {
    const { isDarkTheme } = useTheme();
  return (
    <div className={`p-7 ${isDarkTheme? "bg-dark": "bg-light"} min-h-screen`}>  
    <Header />
    <TopCards />
    </div>
  )
}

export default MainPage
