import React from 'react';
import {  Link } from 'react-router-dom';

function Account() {
  return (
    <div className="account">
      <ul className="account__list">
          <li className="account__list__item account__list__item__home"><Link className="account__list__item" to="/" exact>Home</Link></li>
          <li className="account__list__item account__list__item__contact"><Link className="account__list__item" to="/contact">Contact us</Link></li>
          <li className="account__list__item account__list__item__help"><Link className="account__list__item" to="help">Help</Link></li>
          <li className="account__list__item account__list__item__signlog"><Link className="account__list__item" to="sign">Sign in or Log in</Link></li>
      </ul>
    </div>

  );
}

export default Account;
