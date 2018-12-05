import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.css';

import Aux from './src/hoc/Aux/Aux';
import Layout from './src/hoc/Layout/Layout';
import Dashboard from './src/containers/Dashboard/Dashboard';
import Landing from './src/components/Landing/Landing';

const app = (props) => {
  return (
    <Aux>
      <BrowserRouter>
        <Layout>
          <Route path='/' component={Landing} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/signup' render={() => <div>Signup component goes here</div>} />
          <Route path='/login' render={() => <div>Login component goes here</div>} />
        </Layout>
      </BrowserRouter>
    </Aux>
  )
}

export default app;