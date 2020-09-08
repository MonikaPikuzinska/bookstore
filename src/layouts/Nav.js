import React from 'react';
import close from '../img/close.svg';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; 

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
              <li className="nav__menu__list__item nav__menu__list__artphotography"><NavLink className="nav__menu__list__item" to="art">Art and Photography</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__biography"><NavLink className="nav__menu__list__item" to="biography">Biography</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__crimethriller"><NavLink className="nav__menu__list__item" to="crime">Crime and Thriller</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__dictionaries"><NavLink className="nav__menu__list__item" to="dictionaries">Dictionaries</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__fiction"><NavLink className="nav__menu__list__item" to="fiction">Fiction</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__fooddrink"><NavLink className="nav__menu__list__item" to="food">Food and Drink</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__graphicnovels"><NavLink className="nav__menu__list__item" to="graphicnovels">Graphic novels</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__romance"><NavLink className="nav__menu__list__item" to="romance">Romance</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__science"><NavLink className="nav__menu__list__item" to="science">Science</NavLink></li>
              <li className="nav__menu__list__item nav__menu__list__sciencefictionfantasyhorror"><NavLink className="nav__menu__list__item" to="sciencefiction">Science fiction, Fantasy and Horror</NavLink></li>
          </Router>
          </ul>
      </div>
    </div>
  );
}

export default Nav;
