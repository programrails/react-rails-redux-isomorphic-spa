/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import CompanyListContainer from './CompanyListContainer';
import CompanyShowContainer from './CompanyShowContainer';

export default class ClientRouterContainer extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CompanyListContainer} />
          <Route path="/companies/:id" component={CompanyShowContainer} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
      )
  }
}
