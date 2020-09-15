import React from 'react';
import close from '../img/close.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 

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
          <Router>
              <li className="nav__menu__list__item nav__menu__list__artphotography"><Link className="nav__menu__list__item" to="art">Art and Photography</Link></li>
              <li className="nav__menu__list__item nav__menu__list__biography"><Link className="nav__menu__list__item" to="biography">Biography</Link></li>
              <li className="nav__menu__list__item nav__menu__list__crimethriller"><Link className="nav__menu__list__item" to="crime">Crime and Thriller</Link></li>
              <li className="nav__menu__list__item nav__menu__list__dictionaries"><Link className="nav__menu__list__item" to="dictionaries">Dictionaries</Link></li>
              <li className="nav__menu__list__item nav__menu__list__fiction"><Link className="nav__menu__list__item" to="fiction">Fiction</Link></li>
              <li className="nav__menu__list__item nav__menu__list__fooddrink"><Link className="nav__menu__list__item" to="food">Food and Drink</Link></li>
              <li className="nav__menu__list__item nav__menu__list__graphicnovels"><Link className="nav__menu__list__item" to="graphicnovels">Graphic novels</Link></li>
              <li className="nav__menu__list__item nav__menu__list__romance"><Link className="nav__menu__list__item" to="romance">Romance</Link></li>
              <li className="nav__menu__list__item nav__menu__list__science"><Link className="nav__menu__list__item" to="science">Science</Link></li>
              <li className="nav__menu__list__item nav__menu__list__sciencefictionfantasyhorror"><Link className="nav__menu__list__item" to="sciencefiction">Science fiction, Fantasy and Horror</Link></li>
          </Router>
          </ul>
      </div>
    </div>
  );
}

export default Nav;
