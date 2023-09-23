import React from 'react'

const Contact = () => {
  return (
    <main className="contact-page__wrapper flex flex-col align-items">
      <div className="bg-image w-full"></div>
      <div className="linear-gradient-black-top"></div>
      <div className="linear-gradient-black-bottom"></div>

      <div className="w-full flex flex-col align-items position-relative">

        <h1>Contactez-nous</h1>
        <p className="contact-msg">Vous avez une question au sujet du club, vous souhaitez vous associer ou sponsoriser une équipe, ou vous voulez tout simplement nous rejoindre ? 
  Contactez-nous sans plus attendre ! Nous vous répondrons dans les meilleurs délais.</p>
        
        {/* CONTACT FORM */}
        <div className="contact-form__wrapper w-full flex flex-col space-around">

          <form className="flex flex-col flex-center contact-form" action="" method="">
            <div className="w-full flex flex-wrap name-input__wrapper">
              <label className="name-input" htmlFor="fname">
                <input 
                  id="fname"
                  type="text" 
                  placeholder="Prénom *" 
                />
              </label>

              <label className="name-input" htmlFor="lname">
                <input 
                  id="lname"
                  type="text" 
                  placeholder="Nom *"
                />
              </label>

            </div>

            <label htmlFor="mail">
              <input 
                id="mail"
                type="email" 
                placeholder="Adresse mail *"
              />
            </label>

            <label htmlFor="phone">
              <input 
                id="phone"
                type="text"
                placeholder="Numéro de téléphone"
              />
            </label>

            <label htmlFor="msg">
              <textarea 
                name="" 
                id="msg" 
                cols="30" 
                rows="10"
                placeholder="Votre message *"
              >
              </textarea>
            </label>

            <div className="contact-form-btn__wrapper w-full flex flex-center">
              <button
                className="contact-submit-btn border-button-effect border-button-effect"
              >
                Valider
              </button>
            </div>

          </form>
        </div>

        {/* MORE CONTACT DETAILS */}
          <p className="more-details-msg">Vous pouvez également nous joindre via....</p>

        <div className="more-details__content w-full flex flex-wrap space-around">
          <div className="email-details__wrapper flex flex-col flex-start">
            {/* EMAIL */}
            <i class="fa-solid fa-envelope"></i>
            <span className="bold">Email</span>
            <span>gaa.mondeville@gmail.com</span>
          </div>

            {/* PHONE NUMBER */}
            <div className="phone-details__wrapper flex flex-col flex-start">
              <i class="fa-solid fa-phone"></i>
              <span className="bold">Téléphone</span>
              <span>
                Au 0686807653 ou<br/>
                0781879390
              </span>
            </div>
        </div>
      </div>



    </main>
  )
}

export default Contact