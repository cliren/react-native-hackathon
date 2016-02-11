const baseURL = "http://localhost:8081/";

let getURL = (path) => {
  return baseURL + path;
};

export function getBooks() {
  return fetch(getURL('api/books.json'));
}