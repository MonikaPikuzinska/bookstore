import React, { useState } from 'react';
import axios from 'axios';
import search from '../img/search.svg';

function Searcher() {
  const [books, setBooks ] = useState([]);


  let API = ``;

  const handleSearch = () => {
    let text = document.getElementsByClassName('searcher__form__input').value
    if (text==='') {
      API=''
    } else {
      API = `https://www.googleapis.com/books/v1/volumes?q=search+${text}`
      handleGetTitle()
    }
  }
  const handleGetTitle = async () => {
    const response = await axios.get(API);
    setBooks(response.data.items);
  };
  return (
    <div className="searcher">
      <form className="searcher__form">
        <input type="text" className="searcher__form__input" placeholder="Find a book"/>
        <img src={search} className="searcher__form__btn"alt="search button" onClick={handleSearch}/>
      </form>
    </div>
  );
}

export default Searcher;
