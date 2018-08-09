import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import store from '../redux/store';
import CompanyShow from './CompanyShow';
import _ from 'lodash';

class CompanyShowContainer extends React.Component {   

  render() {

    const companies = this.props.companies

    const id = this.props.match.params.id

    const company = _.find(companies, function(o) { return o.id == id })

    store.dispatch({
      type: 'COMPANY_SHOW',
      company: company
    })

    return (<CompanyShow company={this.props.company} />)
  } 
}

const mapStateToProps = function(store) {
  return {
    company: store.company,
    companies: store.companies
  }
}

export default connect(
  mapStateToProps
)(CompanyShowContainer);
