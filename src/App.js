import React from "react";
import Header from './layouts/Header';
import Page from './layouts/Page';
import Footer from './layouts/Footer';
import './css/main.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="app">
      <Header/>
      <Page/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
