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
import FormPerson from './src/components/Forms/FormPerson/FormPerson'
import PeopleList from './src/containers/Dashboard/PeopleList/PeopleList';
import Person from './src/containers/Dashboard/Person/Person';


const app = (props) => {
  return (
    <Aux>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Dashboard>
              <Route exact path="/dashboard/people/:personId" component={Person} />
              <Route exact path='/dashboard/people/add' component={FormPerson} />
              <Route exact path="/dashboard/people" component={PeopleList} />
            </Dashboard>
            <Route exact path='/signup' component={Signup}/> 
            <Route exact path='/login' component={SignIn} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Aux>
  )
}

export default app;