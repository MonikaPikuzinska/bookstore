import React, { useState } from 'react';

const Sign = () => {
    const [text, setText ] = useState('');
    const handleMessage = (e) => {
        e.preventDefault();
        setText('');
    }
    return ( 
    <div className="sign">
        <form className="sign__sform" onSubmit={handleMessage}>
            <h2 className="sign__sform__title">Sign in</h2>
            <input type="text" className="sign__input sign__sform__inputm" placeholder="E-mail"/>
            <input type="text" className="sign__input sign__sform__inputp" placeholder="Password"/>
            <button className="sign__sform__btn">Sign in</button>
        </form>
        <div className="sign__gap"></div>
        <form className="sign__lform" onSubmit={handleMessage}>
            <h2 className="sign__lform__title">Log in</h2>
            <input type="text" className="sign__input sign__lform__inputn" placeholder="Name"/>
            <input type="text" className="sign__input sign__lform__inputm" placeholder="E-mail"/>
            <input type="text" className="sign__input sign__lform__inputp" placeholder="Password"/>
            <button className="sign__lform__btn">Log in</button>
        </form>
    </div> 
    );
}
 
export default Sign;