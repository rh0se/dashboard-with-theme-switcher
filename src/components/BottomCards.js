import React from 'react'
import { useTheme } from '../ThemeContext';
import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import InstagramIcon from '../images/icon-instagram.svg';
import YoutubeIcon from '../images/icon-youtube.svg';
import UpIcon from '../images/icon-up.svg';
import DownIcon from '../images/icon-down.svg';

const BottomCards = () => {
    const { isDarkTheme } = useTheme();
    return (
        <div className='md:mt-12'>

            <h1 className={`${isDarkTheme ? "text-white" : "text-DarKGrayishBlue"} text-2xl font-extrabold`}>Overview - Today</h1>
            <section className={`font-bold text-sm grid grid-cols-1 lg:grid-cols-4 gap-6 md:grid-cols-2 mt-8`}>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Page Views</span>
                        <img src={FacebookIcon} alt='facebook logo'></img>
                    </div>
                    <div>
                        <h1>87</h1>
                        <div className='up text-base font-base'><img src={UpIcon} alt='up icon'></img><span>3%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Page Views</span>
                        <img src={FacebookIcon} alt='facebook logo'></img>
                    </div>
                    <div>
                        <h1>52</h1>
                        <div className='down text-base font-base'><img src={DownIcon} alt='down'></img><span>2%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Likes</span>
                        <img src={InstagramIcon} alt='facebook logo'></img>
                    </div>
                    <div>
                        <h1>5462</h1>
                        <div className='up text-base font-base'><img src={UpIcon} alt='up icon'></img><span>2257%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Profile Views</span>
                        <img src={InstagramIcon} alt='facebook logo'></img>
                    </div>
                    <div>
                        <h1>52k</h1>
                        <div className='up text-base font-base'><img src={UpIcon} alt='up icon'></img><span>1375%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Retweets</span>
                        <img src={TwitterIcon} alt='twitter bird'></img>
                    </div>
                    <div>
                        <h1>117</h1>
                        <div className='up text-base font-base'><img src={UpIcon} alt='up icon'></img><span>303%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Likes</span>
                        <img src={TwitterIcon} alt='twitter bird'></img>
                    </div>
                    <div>
                        <h1>507</h1>
                        <div className='up text-base font-base'><img src={UpIcon} alt='up icon'></img><span>553%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Likes</span>
                        <img src={YoutubeIcon} alt='YouTube Logo'></img>
                    </div>
                    <div>
                        <h1>107</h1>
                        <div className='down text-base font-base'><img src={DownIcon} alt='down icon'></img><span>19%</span></div>
                    </div>
                </article>
                <article className={` ${isDarkTheme ? "dark-cards dark-b-cards" : "light-cards light-b-cards"} bottom-cards`}>
                    <div>
                        <span>Total Views</span>
                        <img src={YoutubeIcon} alt='YouTube Logo'></img>
                    </div>
                    <div>
                        <h1>1407</h1>
                        <div className='down text-base font-base'><img src={DownIcon} alt='down icon'></img><span>12%</span></div>
                    </div>
                </article>
            </section>

        </div>
    )
}

export default BottomCards;