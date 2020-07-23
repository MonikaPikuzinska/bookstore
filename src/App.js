import React from "react";
import Header from './layouts/Header';
import Page from './layouts/Page';
import Footer from './layouts/Footer';
import './css/main.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
