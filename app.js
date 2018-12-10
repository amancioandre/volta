import React from 'react';
import { BrowserRouter, Route, ProtectedRoute, Switch } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Aux from './src/hoc/Aux/Aux';
import Layout from './src/hoc/Layout/Layout';
import Dashboard from './src/containers/Dashboard/Dashboard';
import Landing from './src/components/Landing/Landing';
import Signup from './src/components/Signup/Signup';
import SignIn from './src/components/SignIn/SignIn';
import FormPerson from './src/components/Forms/FormPerson/FormPerson';

const app = (props) => {
  return (
    <Aux>
      <BrowserRouter>
        <Layout>
          <Switch>

            <Route exact path='/person' component={FormPerson} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Signup}/> 
            <Route exact path='/login' component={SignIn} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Aux>
  )
}

export default app;