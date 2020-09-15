import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
    const [books, setBooks ] = useState([]);
    const [book, setBook ] = useState([]);

    let { id } = useParams();
    const API = 'https://www.googleapis.com/books/v1/volumes?q=subject+thriller';
    const handleGetTitle = async () => {
        const response = await axios.get(API);
        // setBooks(response.data.items);
        setBook(response.data.items.filter(b => {return b.volumeInfo.industryIdentifiers[0].identifier===id}))
    };


    useEffect(()=>{
        handleGetTitle();
    },[]);

   
console.log(book)
return (
    <>
    {book &&
    book.map((boo, index) => {
        return (
            <div className="book" key={index}>
                <p className="book__title">{boo.volumeInfo.authors[0]} - {boo.volumeInfo.title}</p>
                <img src={boo.volumeInfo.imageLinks.thumbnail}  className="book__img" alt="cover"/>
                <p className="book__price">{boo.volumeInfo.pageCount} zł</p>
                <button className="book__btn">Buy</button>
                <p className="book__description">{boo.volumeInfo.description}</p>
            </div>
    )})}
    </>
)
}
 
export default Book;