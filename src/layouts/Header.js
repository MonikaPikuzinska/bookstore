import React from 'react';
import Account from './Account';
import logo from '../img/logo.svg';
import Nav from './Nav';
import Basket from './Basket';
import Searcher from './Searcher';

function Header() {
  return (
    <header className="header">
      <Account/>
      <img src={logo} className="header__logo" alt="logo"/>
      <h1 className="header__title">Book geek</h1>
      <Nav/>
      <Basket/>
      <Searcher/>
    </header>
  );
}

export default Header;
