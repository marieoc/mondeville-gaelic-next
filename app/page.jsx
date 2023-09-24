'use client' // ?

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react';
// import simpleParallax from 'simple-parallax-js';


const Home = () => {  

  const scrollEffect = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i=0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } 
    }
  }
    

  useEffect(() => {
    window.addEventListener('scroll', scrollEffect)

    return () => {
      window.removeEventListener('scroll', scrollEffect);
    }

  }, [])



  return (
    <main className='home_page__wrapper'>
      <div className="homepage_bg">
        <div className="linear-gradient-black-top"></div>
        <div className="linear-gradient-black-bottom"></div>
      </div>

      {/* NEWS */}
      <section className="news_section__wrapper flex flex-col align-items">
        <h2 className="double-border reveal">Actualités</h2>

        <div className="news_card__wrapper flex flex-wrap flex-center reveal">
          <div className="news_card double-border-card-effect">
            <Image 
              src="/img/affiche_entrainement.jpeg"
              alt="News Article"
              width={300}
              height={360}
            />
            <div className="next_btn__wrapper flex flex-center">
              <a href="" className="next_btn simple-border">Lire la suite</a>
            </div>
          </div>

          <div className="news_card double-border-card-effect">
            <Image 
              src="/img/affiche_entrainement2.jpeg"
              alt="News Article"
              width={300}
              height={360}
            />
            <div className="next_btn__wrapper flex flex-center">
              <a href="" className="next_btn simple-border">Lire la suite</a>
            </div>
          </div>

          <div className="news_card double-border-card-effect">
            <Image 
              src="/img/bg2.jpeg"
              alt="News Article"
              width={300}
              height={360}
            />
            <div className="next_btn__wrapper flex flex-center">
              <a href="" className="next_btn simple-border">Lire la suite</a>
            </div>
          </div>
        </div>
      </section>


      {/* SPONSORS */}
      <section className="sponsors_section__wrapper flex flex-col align-items">
        <div className="linear-gradient-black-top"></div>
        <div className="linear-gradient-black-bottom"></div>
        <div className="sponsor-bg"></div>

        <h2 className="double-border reveal">Nos sponsors</h2>
        <p className="reveal">Merci à eux d'avoir placé leur confiance en nous.</p>

        <div className="sponsor_card__wrapper w-full flex flex-wrap space-around reveal">
          <div className="sponsor_card">
            <Image
              alt=""
              src="/img/sponsors/FFG_logo.png"
              width={150}
              height={150}
            />
          </div>

          <div className="sponsor_card">
            <Image
              alt=""
              src="/img/sponsors/odonnels.png"
              width={150}
              height={150}
            />
          </div>

          <div className="sponsor_card">
            <Image
              alt=""
              src="/img/sponsors/mondeville.png"
              width={150}
              height={150}
            />
          </div>

          <div className="sponsor_card">
            <Image
              alt=""
              src="/img/sponsors/societe-generale-logo.png"
              width={150}
              height={150}
            />
          </div>
        </div>

      </section>

      

    </main>
  )
}

export default Home