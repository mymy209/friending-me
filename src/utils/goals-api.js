import tokenService from './tokenService';

const BASE_URL = '/api/goals/';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function getCompleted() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(`${BASE_URL}/completed/`, options).then(res => res.json());
}

export function create(goal) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(goal)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function update(goal) {
  return fetch(`${BASE_URL}/${goal._id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer' + tokenService.getToken()
  },
    body: JSON.stringify(goal)
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
