import React from 'react';

import Link from 'next/link';

const ValidationMessage = () => {
  return (
    <div className="validation-page__wrapper flex flex-center">
        <div className="validation-msg__wrapper double-border">
          <span>Merci !</span>
          <p>Nous avons bien reçu votre message, et nous nous efforçons de vous répondre dans les meilleurs délais.<br />
          &Agrave; très bientôt !</p>
          <Link href="/">Retourner à la page d'accueil</Link>
        </div>
    </div>
  )
}

export default ValidationMessage