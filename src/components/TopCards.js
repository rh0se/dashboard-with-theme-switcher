import React from 'react';
import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import InstagramIcon from '../images/icon-instagram.svg';
import YoutubeIcon from '../images/icon-youtube.svg';
import UpIcon from '../images/icon-up.svg';
import DownIcon from '../images/icon-down.svg';

const TopCards = () => {
  return (
    <>
    <section className='text-white'>
        <article className='text-white dark-cards top-cards'>
            <div>
                <img src={FacebookIcon} alt='facebook logo'></img>
                <p>@nathanf</p>
            </div>
            <h1>1987</h1>
            <p>Followers</p>
            <div><img src={UpIcon} alt={UpIcon}></img><span>12</span><span>Today</span></div>
        </article>
        <article className='text-white dark-cards top-cards'>
        <div>
                <img src={TwitterIcon} alt='twitter logo'></img>
                <p>@nathanf</p>
            </div>
            <h1>1044</h1>
            <p>Followers</p>
            <div><img src={UpIcon} alt={UpIcon}></img><span>99</span><span>Today</span></div>
        </article>
        <article className='text-white dark-cards top-cards'>
        <div>
                <img src={InstagramIcon} alt='instagram logo'></img>
                <p>@realnathanf</p>
            </div>
            <h1>11k</h1>
            <p>Followers</p>
            <div><img src={UpIcon} alt={UpIcon}></img><span>1099</span><span>Today</span></div>
        </article>
        <article className='text-white dark-cards top-cards'>
        <div>
                <img src={YoutubeIcon} alt='Youtube logo'></img>
                <p>Nathan F.</p>
            </div>
            <h1>11k</h1>
            <p>Subscribers</p>
            <div><img src={DownIcon} alt='Down Icon'></img><span>144</span><span>Today</span></div>
        </article>
        

    </section>
      
    </>
  )
}

export default TopCards
