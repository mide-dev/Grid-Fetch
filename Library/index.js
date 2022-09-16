/* 
    Library
    
    Fetch the collection of books 
        from books.json, assign each 
        a unique id
        
    Create a div to represent a book
        using Grid & grid-template-areas 
        build a book component
        display all books using Flexbox
*/

async function getBooks() {
  const response = await fetch("./books.json");
  const books = await response.json();

  return books;
}

const html = (book) => {
  return `
    <div class="my-books">
        <div class="book-cover">${book.title}</div>
        <div class="book-spine"></div>
        <div class="book-footer"></div>
    </div>
        
    `;
};

getBooks().then((books) => {
  document.body.innerHTML = `<div class="container">${books
    .map(html)
    .join("")}</div>`;
});
