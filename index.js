
// empty function fetchBooks() that is called when index.html is loaded
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  //fetch request to the GOT API
  
  fetch('https://anapioficeandfire.com/api/books')
  
  // formatted in lab as: .then(resp => resp.json())
  // Convert returned response to JSON
  .then(function(resp) {
    console.log(resp);
    return resp.json();
  })

  /* the second then() method receiving the object returned
  from the first call to then()
  We capture the object in the parameter json and pass it into a second
  callback function where we will write code to do DOM manipulation
  using the data from fetch */

  //.then(json => console.log(json));
  .then(function(json) {
    console.log(json);
  });
}

// i think i need json here as arg b/c that is data i am fetching
function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
