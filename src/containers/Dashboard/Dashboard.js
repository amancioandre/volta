import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Dashboard.css'

import CreatePerson from '../Controllers/CreatePersonController/Controller';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  /* Handler Methods */


  /* Lifecycle Methods */
  componentDidMount() {
    console.log('inside componentDidMount -> Dashboard')
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="controls">
          <CreatePerson />
        </div>
      </div>
    )
  }
}

export default Dashboard;