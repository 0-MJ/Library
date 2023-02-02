//Simple Array to store all the book objects//
let myLibrary = [];
//Book Constructor which creates book objects//
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
//Test book//
let book1 = new Book('Animal Farm','George Orwell',
 104);
 addBookToLibrary(book1);
let book2 = new Book('Brave New World','Aldous Huxley',184);
addBookToLibrary(book2);


//Function to add book to the library//
function addBookToLibrary(book) {
    myLibrary.push(book);
  
  }
//A function to Loop through the myLibrary array and displays each book on the page.//
myLibrary.forEach(function(books){
  console.log(books);
})

//New Book button that brings up a form for users to input the details for the newbook//


//A button to remove the book from the library on each book.//

//A button to change  read status on each book's Display//
