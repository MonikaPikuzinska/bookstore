import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';


const Contact = () => {
    const [text, setText ] = useState('');
    const handleValue = (e) => {
        setText(e.target.value)
    }
    const handleMessage = (e) => {
        e.preventDefault();
        setText('');
    }
    return ( 
    <div className="contact">
        <form className="contact__form" onSubmit={handleMessage}>
            <input type="text" className="contact__form__inputn" placeholder="Name"/>
            <input type="text" className="contact__form__inputm" placeholder="E-mail"/>
            <textarea cols="500" rows="5" className="contact__form__textarea" placeholder="Write a message" value={text}  onChange={handleValue}/>
            <button className="contact__form__btn">Send</button>
        </form>
        <Prompt
            when={text}
            message='Send a message'/>
    </div> 
    );
}
 
export default Contact;