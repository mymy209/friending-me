const BASE_URL = '/api/advice';

export function index() {
    return fetch(BASE_URL).then(res => res.json());
}
  
