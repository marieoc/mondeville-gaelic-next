'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className='flex space-between'>
      <Link href="/" className='logo_wrapper'>
        <Image
          src="/img/logo1.png"
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>

      {/* MOBILE NAVBAR */}
      <div className="mobile_navbar__wrapper">
        <button
          className={`burger ${isMobileMenuOpen ? "active" : ""}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
        </button>

        <nav className={`mobile_navbar w-full flex flex-col flex-center ${isMobileMenuOpen ? "active" : ""}`}>

          <ul className="w-full flex flex-col flex-center">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>accueil</Link>
            </li>
            <li>
              <Link href="">à propos</Link>
            </li>
            <li>
              <Link href="">actualités</Link>
            </li>
            <li>
              <Link href="">entraînements</Link>
            </li>
            <li>
              <Link href="">galerie</Link>
            </li>
          </ul>

          <div className="contact_btn_wrapper flex flex-center w-full">
            <Link 
              className="border-button-effect" 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

        </nav>

      </div>

      {/* DESKTOP NAVBAR */}
      <nav className='desktop_navbar flex flex-wrap space-between'>
        <ul className='flex flex-center'>
          <li>
            <Link className='nav-item' href="">à propos</Link>
          </li>
          <li>
            <Link className='nav-item' href="">Actualités</Link>
          </li>
          <li>
            <Link className='nav-item' href="">Entraînements</Link>
          </li>
          <li>
            <Link className='nav-item' href="">Galerie</Link>
          </li>
        </ul>

        <div className="contact_btn_wrapper">
          <Link className="border-button-effect" href="/contact">Contact</Link>
        </div>

      </nav>

    </header>
  )
}

export default Nav