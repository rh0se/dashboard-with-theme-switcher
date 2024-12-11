import React from 'react';
import { useTheme } from '../ThemeContext';
import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import InstagramIcon from '../images/icon-instagram.svg';
import YoutubeIcon from '../images/icon-youtube.svg';
import UpIcon from '../images/icon-up.svg';
import DownIcon from '../images/icon-down.svg';

const TopCards = () => {
    const { isDarkTheme } = useTheme();  
  return (
    <>
    <section className={`${isDarkTheme? "text-white": "text-DarkGrayishBlue"} font-bold text-sm grid grid-cols-1 lg:grid-cols-4 gap-6 md:grid-cols-2`}>
        <article className={` ${isDarkTheme ? "dark-cards" : "light-cards"} top-cards border-t-Facebook-color border-t-4`}>
            <div className='socials'>
                <img src={FacebookIcon} alt='facebook logo'></img>
                <p className={`${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"} font-bold`}>@nathanf</p>
            </div>
            <div>
            <h1 className='text-6xl'>1987</h1>
            <p className={`font-normal text-xs tracking-[5px] ${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"}`}>FOLLOWERS</p>
            </div>
            <div className='up'><img src={UpIcon} alt={UpIcon}></img><span>12</span><span>Today</span></div>
        
        </article>
        <article className={` ${isDarkTheme ? "dark-cards" : "light-cards"} top-cards border-t-Twitter-color border-t-4`}>
        <div className='socials'>
                <img src={TwitterIcon} alt='twitter logo'></img>
                <p className={`${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"} font-bold`}>@nathanf</p>
            </div>
            <div>
            <h1 className='text-6xl'>1044</h1>
            <p className={`font-normal text-xs tracking-[5px] ${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"}`}>FOLLOWERS</p>
            </div>
            <div className='up'><img src={UpIcon} alt={UpIcon}></img><span>99</span><span>Today</span></div>
        </article>
        <article className={` ${isDarkTheme ? "dark-cards" : "light-cards"} top-cards border-t-Instagram-color1 border-t-4`}>
        <div className='socials'>
                <img src={InstagramIcon} alt='instagram logo'></img>
                <p className={`${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"} font-bold`}>@realnathanf</p>
            </div>
            <div>
            <h1 className='text-6xl'>11k</h1>
            <p className={`font-normal text-xs tracking-[5px] ${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"}`}>FOLLOWERS</p>
            </div>
            <div className='up'><img src={UpIcon} alt={UpIcon}></img><span>1099</span><span>Today</span></div>
        </article>
        <article className={` ${isDarkTheme ? "dark-cards" : "light-cards"} top-cards border-t-YouTube border-t-4`}>
        <div className='socials'>
                <img src={YoutubeIcon} alt='Youtube logo'></img>
                <p className={`${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"} font-bold`}>Nathan F.</p>
            </div>
            <div>
            <h1 className='text-6xl'>8239</h1>
            <p className={`font-normal text-xs tracking-[5px] ${isDarkTheme ? "text-DesaturatedBlue" : "text-DarKGrayishBlue"}`}>SUBSCRIBERS</p>
            </div>
            <div className='down'><img src={DownIcon} alt='Down Icon'></img><span>144</span><span>Today</span></div>
        </article>


    </section>
      
    </>
  )
}

export default TopCards
