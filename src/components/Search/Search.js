import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Row, Card, CardBody, Form, FormGroup, Input } from 'reactstrap';
import Button from '../Forms/FormBuildings/SubmitButton/SubmitButton'; 
import './search.css';
// import CrudServices from '../../crud/crud-services';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      searchText: '',
    }
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {  
    const {name, value} = event.target;
    this.setState({searchText: value});
    console.log(this.state);
  }

  toggle() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  search(text) {
    event.preventDefault();
    let searchArr = [];
    text.forEach(element => {
      searchArr.push(element);
    });
    query = {};
    this.service
      .searchPerson(query)
      .then(response => {
        this.setState({});
        // this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Form onSubmit = {this.search}>
        <Row form>
        <FormGroup>
          <Input type= "text" name="search" onChange={e => this.handleChange(e)}/>
          </FormGroup>
        <FormGroup>
           <Button buttonName = '🔎'/>
          </FormGroup>
          </Row>
      </Form>
     )
  }


}


export default Search;

    
