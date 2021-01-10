export default function fetchCountries(searchQuery) {
  return fetch(searchQuery).then(
    response => {
      return response.json();
      })
    ;
}


