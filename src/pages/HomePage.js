import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel, { consts } from 'react-elastic-carousel';

function HomePage() {
  
const [books, setBooks ] = useState([]);


  const API = 'https://www.googleapis.com/books/v1/volumes?q=subject+thriller';
  const handleGetTitle = async () => {
    const response = await axios.get(API);
    setBooks(response.data.items);
  };


  useEffect(()=>{
    handleGetTitle();
  },[]);

  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '🡸' : '🡺';
    return (
      <button onClick={onClick} disabled={isEdge} style={{backgroundColor: "white",
      width: "50px",
      border: "none",
      cursor: "pointer",
      color: "#0E9F74"}}>
        {pointer}
      </button>
    )
  };
  
  const [breakPoints, setBreakPoints] = useState([
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 5, itemsToScroll: 5 }]);

  return (
    <div className="homepage">
      
      <h2 className="homepage__title">New Releases</h2>
      
      <div  className="homepage__list">
      <Carousel  breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
          {books &&
          books.map((book, index) => {
            console.log(book.volumeInfo.industryIdentifiers[0].identifier)
            return (
              <Link className="homepage__list__book--link" to={`/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
              <div className="homepage__list__book" key={index}>
                <img src={book.volumeInfo.imageLinks.thumbnail}  className="homepage__list__book__cover" alt="cover"/>
                <p className="homepage__list__book__title">{book.volumeInfo.title}</p>
                <p className="homepage__list__book__author">{book.volumeInfo.authors[0]}</p>
                <p className="homepage__list__book__price">{book.volumeInfo.pageCount} zł</p>
              </div>
              </Link>
            );
          })}
          </Carousel>
          </div>
          <h2 className="homepage__title">Bestselling Books</h2>
          <div  className="homepage__list">
          <Carousel  breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
            {books &&
            books.map((book, index) => {
              return (
                <Link className="homepage__list__book--link" to={`/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
                <div className="homepage__list__book">
                  <img src={book.volumeInfo.imageLinks.thumbnail}  className="homepage__list__book__cover" alt="cover"/>
                  <p className="homepage__list__book__title">{book.volumeInfo.title}</p>
                  <p className="homepage__list__book__author">{book.volumeInfo.authors[0]}</p>
                  <p className="homepage__list__book__price">{book.volumeInfo.pageCount} zł</p>
                </div>
                </Link>
              );
            })};
          </Carousel>
          </div>

          <h2 className="homepage__title">Bestselling Preorders</h2>
          <div  className="homepage__list">
            <Carousel  breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
            {books &&
            books.map((book, index) => {
              return (
                <Link className="homepage__list__book--link" to={`/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
                <div className="homepage__list__book" key={index}>
                  <img src={book.volumeInfo.imageLinks.thumbnail}  className="homepage__list__book__cover" alt="cover"/>
                  <p className="homepage__list__book__title">{book.volumeInfo.title}</p>
                  <p className="homepage__list__book__author">{book.volumeInfo.authors[0]}</p>
                  <p className="homepage__list__book__price">{book.volumeInfo.pageCount} zł</p>
                </div>
                </Link>
              );
            })};
            </Carousel>
          </div>

          <h2 className="homepage__title">Related to items you've viewed</h2>
          <div  className="homepage__list">
            <Carousel  breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
            {books &&
            books.map((book, index) => {
              return (
                <Link className="homepage__list__book--link" to={`/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
                <div className="homepage__list__book" key={index}>
                  <img src={book.volumeInfo.imageLinks.thumbnail}  className="homepage__list__book__cover" alt="cover"/>
                  <p className="homepage__list__book__title">{book.volumeInfo.title}</p>
                  <p className="homepage__list__book__author">{book.volumeInfo.authors[0]}</p>
                  <p className="homepage__list__book__price">{book.volumeInfo.pageCount} zł</p>
                </div>
                </Link>
              );
            })};
            </Carousel>
          </div>
    </div>
  );
}

export default HomePage;