import React, { useState } from 'react';
import axios from 'axios';
import close from '../img/close.svg';

function Searcher() {
  const [books, setBooks ] = useState([]);


  let API = ``, nr = 0;

  const handleDeleteDivs = () => {
    let divs = document.querySelectorAll('.searcher__form__search');
    nr = 0;
    divs.forEach(div => {
        div.remove()
      })
  }
  
  const handleShowSearch = (r) => {
    let form = document.querySelector('.searcher__form');
    if (!document.querySelector('.searcher__form__btn')) {
      let button = document.createElement('img');
      button.onclick = handleDeleteDivs;
      button.setAttribute('class', `searcher__form__search searcher__form__btn`);
      button.setAttribute('src', `${close}`);
      form.appendChild(button)
      };
    if (r.length === 0) {
      let div = document.createElement('div');
      div.innerHTML = "There is no book you are looking for";
      div.setAttribute('class', `searcher__form__search searcher__form__output`);
      form.appendChild(div);
    } else {
      r.forEach((book) => {
        let div2 = document.createElement('div');
        div2.innerHTML = `${book.volumeInfo.authors} - ${book.volumeInfo.title}`;
        div2.setAttribute('class', `searcher__form__search searcher__form__output searcher__form__output${nr}`);
        form.appendChild(div2);
        nr++;
      })
    }
  }

  const handleGetTitle =  () => {
    axios.get(API)
    .then(function (response) {
        console.log(response.data);
        setBooks(response.data.items);
        return response.data;
    } )
    .then(function () {
      if(books.length!==0){
        handleShowSearch(books);
      }
    } )
  };

  const handleSearch = () => {
    let text = document.getElementsByClassName('searcher__form__input').value
    if (text==='') {
      API=''
    } else {
      API = `https://www.googleapis.com/books/v1/volumes?q=search+${text}`
      handleGetTitle()
    }
  }



  return (
    <div className="searcher">
      <form className="searcher__form">
        <input type="text" className="searcher__form__input" placeholder="Find a book" onChange={handleSearch}/>
      </form>
    </div>
  );
}

export default Searcher;
