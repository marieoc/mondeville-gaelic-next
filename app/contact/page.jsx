'use client';
import React, { useState, useRef } from 'react';
import { validateEmail } from '@/utils/validateEmail';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';
import ValidationMessage from './ValidationMessage';

const Contact = () => {
  const [formattedNumber, setFormattedNumber] = useState('');
  const [errors, setErrors] = useState({});
  const fields = ["fname", "lname", "email", "msg"];
  const btnRef = useRef(null);
  const submitBtn = btnRef.current;

  const [isSubmitted, setIsSubmitted] = useState(false);

  // const regex = /^(0[1-9]\d{4})$/; final check when submitting ?
  /* const regex = /^\d+$/; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    // Remove "invalid" class and error messages
    e.target.classList.remove('input-error-border');
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null // Set to null to remove the error message
    }))

    if (trimmedValue === "") {
      e.target.classList.add('input-error-border');
      setErrors(prevErrors => ({
      ...prevErrors,
      [name]: "Champs requis" // Set the error message for the empty field
      }));
    }

  }

  const handlePhoneInputChange = (e) => {
    const value = e.target.value.trim();
    const formattedValue = formatPhoneNumber(value);

    setFormattedNumber(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Field validation
    for (let field of fields) {
      e.target[field].classList.remove('input-error-border');

      const value = e.target[field].value.trim();

      if (!value || value === "") {
        newErrors[field] = "Champs requis";
        e.target[field].classList.add('input-error-border');
      }
    }

    // Email validation
    if (e.target.email.value && !validateEmail(e.target.email.value)) {
      return newErrors.email = "L'email est invalide";
    }

    if (Object.keys(newErrors).length !== 0) {
      console.log(newErrors);
      setErrors(newErrors);
      return;
    }

    // if no error, delete all remaining msg and dispstick 
    setErrors({});

    // when submitting form, display loading spinner
    submitBtn.classList.add("button--loading");
    console.log('no errors, form ready to be send')
    
    // send form via fetch

    // remove loading spinner
    submitBtn.classList.remove("button--loading");
    setIsSubmitted(true);
  }

  return (
    <main className="contact-page__wrapper flex flex-col align-items">
      <div className="bg-image w-full"></div>
      <div className="linear-gradient-black-top"></div>
      <div className="linear-gradient-black-bottom"></div>

      <div className="w-full flex flex-col align-items position-relative">
        {
          isSubmitted === false 
        ? (
        <>
          <h1>Contactez-nous</h1>
          <p className="contact-msg">Vous avez une question au sujet du club ou des entraînements, vous souhaitez vous associer ou sponsoriser une équipe, ou vous voulez tout simplement <span className="">nous rejoindre</span> ?<br/>
          Contactez-nous sans plus attendre ! Nous vous répondrons dans les meilleurs délais.</p>
          
          {/* CONTACT FORM */}
          <div className="contact-form__wrapper w-full flex flex-col space-around">
            <form 
              className="flex flex-col flex-center contact-form" 
              action="" 
              method=""
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-wrap name-input__wrapper">
                <label className="name-input" htmlFor="fname">
                  <input
                    name="fname" 
                    id="fname"
                    type="text" 
                    placeholder="Prénom *" 
                    onChange={handleChange}
                  />
                  {errors.fname && <span className="input-error-msg">{errors.fname}</span>}
                </label>

                <label className="name-input" htmlFor="lname">
                  <input 
                    name="lname"
                    id="lname"
                    type="text" 
                    placeholder="Nom *"
                    onChange={handleChange}
                  />
                  {errors.lname && <span className="input-error-msg">{errors.lname}</span>}
                </label>

              </div>

              <label htmlFor="mail">
                <input 
                  name="email"
                  id="mail"
                  type="email" 
                  placeholder="Adresse mail *"
                  onChange={handleChange}
                />
                {errors.email && <span className="input-error-msg">{errors.email}</span>}
              </label>

              <label htmlFor="phone">
                <input 
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Numéro de téléphone"
                  onChange={handlePhoneInputChange}
                  value={formattedNumber}
                />
              </label>

              <label htmlFor="msg">
                <textarea 
                  name="msg" 
                  id="msg" 
                  cols="30" 
                  rows="10"
                  placeholder="Votre message *"
                  onChange={handleChange}
                >
                </textarea>
                {errors.msg && <span className="input-error-msg">{errors.msg}</span>}
              </label>

              <div className="contact-form-btn__wrapper w-full flex flex-center">
                <button
                  className="contact-submit-btn border-button-effect"
                  ref={btnRef}
                >
                  <span className='button__text'>Valider</span>
                </button>
              </div>
            </form>
          </div>
        </>   
        ) : ( 
          <ValidationMessage /> 
        )}


      
        
          

        {/* MORE CONTACT DETAILS */}
          <p className="more-details-msg">Vous pouvez également nous joindre via....</p>

        <div className="more-details__content w-full flex flex-wrap space-around">
          <div className="email-details__wrapper flex flex-col flex-start">
            {/* EMAIL */}
            <i className="fa-solid fa-envelope"></i>
            <span className="bold">Email</span>
            <span>gaa.mondeville@gmail.com</span>
          </div>

            {/* PHONE NUMBER */}
            <div className="phone-details__wrapper flex flex-col flex-start">
              <i className="fa-solid fa-phone"></i>
              <span className="bold">Téléphone</span>
              <span>
                Au 06.86.80.76.53 ou<br/>
                07.81.87.93.90
              </span>
            </div>
        </div>
      </div>



    </main>
  )
}

export default Contact