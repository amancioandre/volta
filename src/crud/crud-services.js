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
    return this.service.post('/people', { person })
      .then(response => response.data);
  }

  editPerson(personId, person) {
    return this.service.patch(`/people/${personId}`, { person })
      .then(response => response.data);
  }

  getPerson(personId) {
    return this.service.get(`/people/${personId}`)
      .then(response => response.data);
  }

  getAll() {
    return this.service.get('/people')
      .then(response => response.data);
  }


  searchPerson(query) {
    return this.service.get(`/people/?q=${query}`)
      .then(response => response.data);
  }

  deletePerson(personId) {
    return this.service.delete(`/people/${personId}`)
      .then(response => response.data);
  }

  addPosition(personId, position) {
    return this.service.patch(`/people/${personId}/position`, { position })
    .then(response => response.data);
  }

  addPicture(personId, file) {
    const formData = new FormData();
    formData.append('picture', file);
    return this.service.patch(`/people/${personId}/picture`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => console.log(response.data));
  }
}

export default CrudService;
