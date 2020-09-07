import React from 'react';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Help from '../pages/Help';
import Sign from '../pages/Sign';
import Category from '../pages/Category';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { render } from 'react-dom';

function Page() {
  return (
    <div className="page">
     <BrowserRouter>
      {/* <Switch> */}
        
  <Route path="/contact" render={(props) =><Contact/>}/>
        <Route path="/help" render={(props) =><Help/>}/>
        <Route path="/sign" render={(props) =><Sign/>}/>
        <Route path="/category" render={(props) =><Category/>}/>
        <Route path="/" exact render={(props) =><HomePage/>}/>
      {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default Page;
