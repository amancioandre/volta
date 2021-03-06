import axios from 'axios';

class AuthService {
  constructor() {
    const service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true,
    });
    this.service = service;
  }

  login(user) {
    return this.service.post('/auth', user)
      .then(response => response.data);
  }

  logout() {
    return this.service.get('users/logout', {})
      .then(response => response.data);
  }

  loggedin() {
    return this.service.get('/users/loggedin')
      .then(response => response.data);
  }

  signup(user) {
    return this.service.post('/users', { user })
      .then(response => response.data);
  }

  editUser(userId, user) {
    return this.service.patch('/users', { user })
      .then(response => response.data)
  }
}

export default AuthService;
