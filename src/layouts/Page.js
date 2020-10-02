import React from 'react';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Help from '../pages/Help';
import Sign from '../pages/Sign';
import Category from '../pages/Category';
import Book from '../pages/Book';
import { Route, Switch } from 'react-router-dom'; 


function Page() {
  return (
    <div className="page">
     <Switch>
        <Route path="/contact" render={(props) =><Contact/>}/>
        <Route path="/help" component={(props) =><Help/>}/>
        <Route path="/sign" render={(props) =><Sign/>}/>
        <Route path="/category" render={(props) =><Category/>}/>
        <Route path="/" exact render={(props) =><HomePage/>}/>
        <Route path="/art" render={(props) =><HomePage/>}/>
        <Route path="/biography" render={(props) =><HomePage/>}/>
        <Route path="/crime" render={(props) =><HomePage/>}/>
        <Route path="/dictionaries" render={(props) =><HomePage/>}/>
        <Route path="/fiction" render={(props) =><HomePage/>}/>
        <Route path="/food" render={(props) =><HomePage/>}/>
        <Route path="/graphicnovels" render={(props) =><HomePage/>}/>
        <Route path="/romance" render={(props) =><HomePage/>}/>
        <Route path="/science" render={(props) =><HomePage/>}/>
        <Route path="/sciencefiction" render={(props) =><HomePage/>}/>
        <Route path="/:id" render={(props) =><Book/>}/>
      </Switch>
    </div>
  );
}

export default Page;
