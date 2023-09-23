'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {


  return (
    <header className='flex space-between'>
      <a className='logo_wrapper'>
        <Image
          src="/img/logo1.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </a>

      {/* MOBILE NAVBAR */}
     {/*  <nav>
        
      </nav> */}

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
            <Link className='nav-item' href="">Gallerie</Link>
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