import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import AuthService from './src/auth/auth-services';
import ProtectedRoute from './src/components/ProtectedRoutes/ProtectedRoutes'
import About from './src/components/About/About';

class app extends Component {
  constructor (props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
    this.resetState = this.resetState.bind(this);
  };

  resetState(){
    this.setState({ loggedInUser: null }, () => {
      console.log(this.state);
    });

  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    })
  }


  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
    return(
    <Aux>
      <BrowserRouter>
        <Layout user={this.state.loggedInUser} resetState={this.resetState}>
          <Switch>
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path='/person' component={FormPerson} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup'  render={() => <Signup getUser = { this.getTheUser }/>}/>
            <Route exact path='/login' render={() => <SignIn getUser = { this.getTheUser }/>}/> />
            <ProtectedRoute user={this.state.loggedInUser} path="/dashboard" component={Dashboard}/>
            {/* <Route path='/dashboard' component={Dashboard} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </Aux>
    )}else{
      return(
        <Aux>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path='/person' component={FormPerson} />
                <Route exact path='/' component={Landing} />
                <Route exact path='/signup'  render={() => <Signup getUser = { this.getTheUser }/>}/>
                <Route exact path='/login' render={() => <SignIn getUser = { this.getTheUser }/>}/> />                
              </Switch>
            </Layout>
          </BrowserRouter>
        </Aux>
      )
    }
  };
};
export default app;