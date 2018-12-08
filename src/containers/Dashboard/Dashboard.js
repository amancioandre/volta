import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import FormPerson from '../../components/Forms/FormPerson/FormPerson'
import PeopleList from './PeopleList/PeopleList';
import Person from './Person/Person';

import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        firstName:'Joana',
        lastName:'Seeker',
        dateOfBirth:'01/01/1993',
        email:'joana.s@procurandovc.com.br',
        organization:'Procurando voce', 
        username: 'jseeker',
        people: [1, 2, 3, 4, 5],
      },
      People: {
        firstName: 'Teste',
        personId: 3
      },
      show: false,
    }
  }
  /* Handler Methods */


  /* Lifecycle Methods */
  componentDidMount() {
    console.log('inside componentDidMount -> Dashboard')
  }

  render() {
    
    const dashProps = this.state;
    // const wrappedChildren = React.Children.map(this.props.children, child => {
    //   console.log(child, child.props.component)
    //   return React.cloneElement(child, {dashProps});
    // });
    
    // return (
    //   <div className="Dashboard">
    //     {wrappedChildren}
    //   </div>
    // )
    
    return (
        <Aux>
          <Route exact path="/dashboard/people/:personId" render={(props) => <Person {...props} />} />
          <Route exact path='/dashboard/people/add' component={FormPerson} />
          <Route exact path="/dashboard/people" render={() => <PeopleList {...dashProps} />} />
        </Aux>
      )
  }
}

export default Dashboard;