import React from 'react';
import {  NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

function Account() {
  return (
    <div className="account">
      <ul className="account__list">
        <Router>
            <li className="account__list__item account__list__item__home"><NavLink className="account__list__item" to="/" exact>Home</NavLink></li>
            <li className="account__list__item account__list__item__contact"><NavLink className="account__list__item" to="contact">Contact us</NavLink></li>
            <li className="account__list__item account__list__item__help"><NavLink className="account__list__item" to="help">Help</NavLink></li>
            <li className="account__list__item account__list__item__signlog"><NavLink className="account__list__item" to="sign">Sign in or Log in</NavLink></li>
        </Router>
      </ul>
    </div>

  );
}

export default Account;
