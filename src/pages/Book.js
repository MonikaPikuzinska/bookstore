import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Book = () => {
    const [counter, setCounter ] = useState(1);
    const [book, setBook ] = useState([]);

    let { id } = useParams();
    const API = 'https://www.googleapis.com/books/v1/volumes?q=search+horror';
    const handleGetTitle = async () => {
        const response = await axios.get(API);
        setBook(response.data.items.filter(b => {return b.volumeInfo.industryIdentifiers[0].identifier===id}))
    };


    useEffect(()=>{
        handleGetTitle();
    },[]);

    const basket = document.querySelector('.basket__counter');
    const handleCount = () => {
        setCounter(counter + 1);
        basket.innerHTML = counter;
    };
return (
    <>
    {book &&
    book.map((boo, index) => {
        return (
            <div className="book" key={index}>
                <p className="book__title">{boo.volumeInfo.authors[0]} - {boo.volumeInfo.title}</p>
                <img src={boo.volumeInfo.imageLinks.thumbnail}  className="book__img" alt="cover"/>
                <p className="book__price">{boo.volumeInfo.pageCount} zł</p>
                <button className="book__btn" onClick={handleCount}>Buy</button>
                <p className="book__description">{boo.volumeInfo.description}</p>
            </div>
    )})}
    </>
)
}
 
export default Book;