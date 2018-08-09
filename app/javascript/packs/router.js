import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import CompanyListContainer from '../components/CompanyListContainer';
import CompanyShowContainer from '../components/CompanyShowContainer';

export default (  
  <BrowserRouter>  
    <div>
      <Switch>
        <Route exact path="/" component={CompanyListContainer} />
        <Route path="/companies/:id" component={CompanyShowContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);