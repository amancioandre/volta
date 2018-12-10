import axios from 'axios';

class CrudService {
  constructor() {
    const service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true,
    });
    this.service = service;
  }

  createPerson(person) {
    return this.service.post('/persons', { person })
      .then(response => response.data);
  }

  editPerson(personId, person) {
    return this.service.patch(`/persons/${personId}`, { person })
      .then(response => response.data);
  }

  getPerson(personId) {
    return this.service.get(`/persons/${personId}`)
      .then(response => response.data);
  }

  deletePerson(personId) {
    return this.service.delete(`/persons/${personId}`)
      .then(response => response.data);
  }
}

export default CrudService;
