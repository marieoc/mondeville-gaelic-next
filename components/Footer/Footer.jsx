'use client'
import React from 'react'
import Image from 'next/image'



const Footer = () => {
  return (
    <footer className="flex flex-wrap space-around align-items">
      <div className="bg-image w-full"></div>
      <div className="linear-gradient-black-top"></div>
      <div className="linear-gradient-black-bottom"></div>

      <section>
        <div className="newsletter__wrapper">
          <h3>Newsletter</h3>
          <form action="" method="">
            <label>
              <input
                className='email-input'
                type="email"
                placeholder="Votre adresse mail..."
              />
            </label>
            <input 
              className="submit-btn" 
              type="submit" 
              value="GO" 
            />
          </form>
        </div>

        <div className="social_media_wrapper">
          <h3>Nos réseaux sociaux</h3>
          <div className="social_media_icons_wrapper">
            <ul className="w-full flex flex-col">
              <li>
                <a href="#" title="Facebook" className="flex align-items fb-link">
                  <i className="fa-brands fa-facebook"></i>
                  <span>Football Gaélique Mondeville Normandy</span>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram" className="flex align-items insta-link">
                  <i className="fa-brands fa-square-instagram"></i>
                  <span>MondevilleGAA</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="footer-info__wrapper flex flex-col flex-center">
        <h3>Où nous trouver</h3>
        <div className="flex flex-wrap flex-center">
          <Image
            src="/img/logo1.png"
            alt="Logo du Club"
            width={200}
            height={200}
          />

          <div className="footer-info__content">
            <p>Stade Louis Varin<br/> 
              Rue émile Zola<br/>
              14120 Mondeville</p>
            <p className="bold">Les mardis et jeudis<br />
              de 19h à 21h</p>
          </div>
        </div>
      </section>

    </footer>
  )
}

export default Footer