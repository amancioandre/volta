import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './app.css';

import Aux from './src/hoc/Aux/Aux';
import Layout from './src/hoc/Layout/Layout';
import Dashboard from './src/containers/Dashboard/Dashboard';
import Landing from './src/components/Landing/Landing';
import Signup from './src/components/Signup/Signup';
import MapComponent from './src/containers/Map/Map';


const app = (props) => {
  return (
    <Aux>
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/signup' component={Signup}/> 
          <Route path='/login' render={() => <div>Login component goes here</div>} />
          <Route exact path='/map' component={MapComponent} />
        </Layout>
      </BrowserRouter>
    </Aux>
  )
}

export default app;