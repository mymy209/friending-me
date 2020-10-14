import tokenService from './tokenService';

const BASE_URL = '/api/logs/';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(log) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(log)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function update(log) {
  return fetch(`${BASE_URL}/${log._id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer' + tokenService.getToken()
  },
    body: JSON.stringify(log)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer' + tokenService.getToken()
    }
  }).then(res => res.json());
}
