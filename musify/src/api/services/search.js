const URL = "http://localhost:8000/search";
const headers = new Headers();

const init = { method: 'GET',
               headers: headers,
               mode: 'cors',
               cache: 'default' };

export function searchVideosByKeyPhrase(keyPhrase) {
  return fetch(URL + `?keyPhrase=${keyPhrase}`, { ...init}).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}
