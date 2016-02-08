const baseURL = "http://192.168.0.108:8081/";

let getURL = (path) => {
  return baseURL + path;
};

export function getBooks() {
  return fetch(getURL('api/books.json'));
}