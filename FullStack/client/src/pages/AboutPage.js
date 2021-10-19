import img1 from '../img/card.png';
import img2 from '../img/market.jpg';
import img3 from '../img/sell.jpg';
import '../css/AboutPage.css';
import { useState } from 'react';
import HomeCards from '../components/home-cards/HomeCards';


function  AboutPage () {
    const [offset, setOffset] = useState()

    const handleScroll = ()=> {setOffset(window.pageYOffset)};

    window.addEventListener('scroll', handleScroll);

    return (
         <>

    <div class="aboutDesktop">
        <div className="zoom">
          <img src={img1} alt="Card" id="img3" style={{width: 1000, left: '23%', top: `-${5 + offset * 0.3 + '%'}`}}></img>
        </div>


        <div class="wrapper">

        <div>
          <p class="text1" style={{bottom: `${70 + offset * 0.3 + '%'}`}}>Meet the card.</p>
        </div>

        <div className="zoom">
         <div><img src={img1} alt="Card" id="img3" style={{width: 200, bottom: `${60 + offset * 0.3 + '%'}`}}></img></div>
        </div>


        <div className="zoom">
          <div><img src={img2} alt="Staff Working" id="img3" style={{borderRadius: 10, top: 0, left: 150, width: 600, bottom: `${70 + offset * 0.3 + '%'}`}}></img></div>
        </div>

        <div>
          <p class="text2" style={{bottom: `${70 + offset * 0.3 + '%'}`}}>You just put your daughter company in the card</p>
        </div>


        <div>
          <p class="text3" style={{bottom: `${70 + offset * 0.3 + '%'}`}}>And we do the rest.</p>
        </div>

        <div className="zoom">
          <div><img src={img3} alt="Product" id="img3" style={{borderRadius: 10, top: 0, right: 150, width: 600, bottom: `${70 + offset * 0.3 + '%'}`}}></img></div>
        </div>

        </div>
    </div>



    <div class="aboutMobile">
      
        <p>Meet the card.</p>
        <HomeCards></HomeCards>
        <p>You just put your daughter company in the card</p>
        <img src={img2} alt="Staff Working" id="mobImg"></img>
        <p>And we do the rest.</p>
        <img src={img3} alt="Product" id="mobImg"></img>

    </div>

    </>

    )
}

export default AboutPage;