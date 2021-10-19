import img1 from '../img/Cards.png';
import '../css/HomePage.css';
import { useState } from 'react';
import HomeCards from '../components/home-cards/HomeCards';


function  HomePage () {
  const [offset, setOffset] = useState()

  const handleScroll = ()=> {setOffset(window.pageYOffset)};

  window.addEventListener('scroll', handleScroll);
  

  return (
    <>

    <div class="classMobile"><img src={img1} alt="Cards" id="img3" style={{top: `-${5 + offset * 0.3 + '%'}`}}></img></div>

    <div class="classDesktop"><img src={img1} alt="Cards" id="img3" style={{left: '23%', top: `-${5 + offset * 0.3 + '%'}`}}></img></div>
    
    <div className="content">
      <h2>Helping you to focus on what's important.</h2>
      <p>The idea of publishing your daughter company so others will buy it.</p>
    </div>

    <div class="desktopCards"><HomeCards></HomeCards><HomeCards></HomeCards><HomeCards></HomeCards></div>

    <div class="tabletCards"><HomeCards></HomeCards></div>

    <div class="mobileCards"><HomeCards></HomeCards></div>

    <div className="content">
      <p>Ever wanted to cut loose a company you own?</p>
      <p>Have too much debt and want to get rid of it?</p>
      <p>COVID-19 hit you pretty bad?</p>
      <p>Just want to sell your daughter company?</p>
      <h2>Just create a card with your daughter company details and we will back to you shortly!</h2>
      </div>

    </>
  )
}

export default HomePage;