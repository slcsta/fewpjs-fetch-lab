
// empty function fetchBooks() that is called when index.html is loaded
function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!

//   //fetch request to the GOT API
  
  return fetch('https://anapioficeandfire.com/api/books')
  
  
//   // formatted in lab as: .then(resp => resp.json())
//   // Convert returned response to JSON
  .then(function(resp) {
    
    return resp.json();
  })

  .then(function(json) {
    
    return renderBooks(json)
  });
 }

function renderBooks(books) {
   const main = document.querySelector('main');
   books.forEach(book => {
     const h2 = document.createElement('h2');
     h2.innerHTML = book.name;
     main.appendChild(h2);
   });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



