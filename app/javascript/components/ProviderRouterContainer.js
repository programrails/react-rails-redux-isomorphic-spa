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
import { Provider } from 'react-redux';
import store from '../redux/store';
import ClientRouterContainer from './ClientRouterContainer';
import ServerRouterContainer from './ServerRouterContainer';

export default class ProviderRouterContainer extends React.Component {

  render() {

    store.dispatch({
      type: 'SET_PATH',
      path: this.props.path
    })

    store.dispatch({
      type: 'COMPANIES_LIST',
      companies: this.props.companies
    })

    if (this.props.company) {

      store.dispatch({
        type: 'COMPANY_SHOW',
        company: this.props.company
      })

    }

    if(typeof window !== 'undefined') {

      return (
        <Provider store={store}><ClientRouterContainer/></Provider>
        )     

    } else {

      return (
        <Provider store={store}><ServerRouterContainer/></Provider>
        )
    }
  }
}
