import React from 'react';
import search from '../img/search.svg';

function Searcher() {
  return (
    <div className="searcher">
      <form className="searcher__form">
        <input type="text" className="searcher__form__input" placeholder="Find a book"/>
        <img src={search} className="searcher__form__btn"alt="search button"/>
      </form>
    </div>
  );
}

export default Searcher;
