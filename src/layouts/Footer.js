import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__follow">Follow us</p>
      <img src={facebook} className="footer__follow__img" alt="facebook logo"/>
      <img src={instagram} className="footer__follow__img" alt="instagram logo"/>
      <img src={twitter} className="footer__follow__img" alt="twitter logo"/>
      <p className="footer__copyrights">&copy; Copyright 2020 Monika Pikuzińska</p>
    </footer>
  );
}

export default Footer;
