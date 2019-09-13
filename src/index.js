import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';

import Router from './router';
import { Clock } from './clock';

ReactDOM.render(
    <BrowserRouter history={browserHistory}>
        <Route path='/'>
          <Route path="/" component={MainLayout} />
          <Route path="/catalog" component={App} />
          <Route path="/cart" component={CartResult} />
          <Route path="/product/:id" component={Product} />
          <Route path="/:id(\d+)" render={(props) => {
            return <Clock routeProps={props} />;
          } } />
        </Route>
    </BrowserRouter>,
    document.getElementById('root'));

