import React from 'react';
import close from '../img/close.svg';

function Nav() {

  const handleShowMenu = () => {
    document.querySelector('.nav__menu').classList.toggle('active')
  };

  return (
    <div className="nav">
      <div className="nav__burger" onClick={handleShowMenu}></div>
      <div className="nav__menu">
          <div className="nav__menu__btn-close" onClick={handleShowMenu}> <img src={close}/></div>
          <ul className="nav__menu__list">
              <li className="nav__menu__list__item nav__menu__list__artphotography">Art and Photography</li>
              <li className="nav__menu__list__item nav__menu__list__biography">Biography</li>
              <li className="nav__menu__list__item nav__menu__list__crimrthriller">Crime and Thriller</li>
              <li className="nav__menu__list__item nav__menu__list__dictionaries">Dictionaries</li>
              <li className="nav__menu__list__item nav__menu__list__fiction">Fiction</li>
              <li className="nav__menu__list__item nav__menu__list__fooddrink">Food and Drink</li>
              <li className="nav__menu__list__item nav__menu__list__graphicnovels">Graphic novels</li>
              <li className="nav__menu__list__item nav__menu__list__romance">Romance</li>
              <li className="nav__menu__list__item nav__menu__list__science">Science</li>
              <li className="nav__menu__list__item nav__menu__list__sciencefictionfantasyhorror">Science fiction, Fantasy and Horror</li>
          </ul>
      </div>
    </div>
  );
}

export default Nav;
