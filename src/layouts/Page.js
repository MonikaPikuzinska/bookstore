import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from '../configureStore'
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Help from '../pages/Help';
import Sign from '../pages/Sign';
import Category from '../pages/Category';

function Page() {
  const store = configureStore();
  return (
    <div className="page">
      {/* <BrowserRouter>
      <Switch>
        <Route path="/" exact component={withRouter(HomePage)}/>
        <Route path="/contact" component={withRouter(Contact)}/>
        <Route path="/help" component={withRouter(Help)}/>
        <Route path="/sign" component={withRouter(Sign)}/>
        <Route path="/category" component={withRouter(Category)}/>
      </Switch>
      </BrowserRouter> */}
      <Provider store={store}>
    <ConnectedRouter history={history}> 
    <>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route path="/contact" render={Contact} />
          <Route path="/help" render={Help} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
    </div>
  );
}

export default Page;
