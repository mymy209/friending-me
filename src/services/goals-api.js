const BASE_URL = '/api/goals';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}