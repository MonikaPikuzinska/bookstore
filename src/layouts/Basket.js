import React from 'react';
import basket from '../img/basket.svg';

function Basket() {
  return (
    <div className="basket">
      <div className="basket__counter">3</div>
      <img src={basket} className="basket__btn" alt="basket"/>
    </div>
  );
}

export default Basket;
