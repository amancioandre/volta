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
    return this.service.patch(`/people/${personId}`, { person })
      .then(response => response.data);
  }

  getPerson(personId) {
    return this.service.get(`/people/${personId}`)
      .then(response => response.data);
  }

  deletePerson(personId) {
    return this.service.delete(`/people/${personId}`)
      .then(response => response.data);
  }

  addPicture(personId, file) {
    console.log(personId, file);
    const formData = new FormData();
    formData.append('picture', file)
    return this.service.patch(`/people/${personId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => response.data)
  }
}

export default CrudService;
