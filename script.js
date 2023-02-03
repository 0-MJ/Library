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
let newBook = document.getElementById('newBook');
let addNewBookForm = document.getElementById('addNewBook');

// Show the form as a modal when the new book button is pressed//
newBook.addEventListener('click', function() {
  addNewBookForm.style.display = 'block';
});
//Store the detail from the form the form in different variables to use as parameters in object constructor when the add button is pressed//
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let addButton = document.getElementById('add');
console.log(title.textContent);
addButton.addEventListener('click',function(){
  event.preventDefault(); // Prevent the form from submitting
  console.log("Title : " + title.value,"Author : " + author.value,"Pages : "+pages.value);
  addNewBookForm.style.display = 'none';// To hide the form after taking the input data//

});
//A button to remove the book from the library on each book.//
let removeBtn = document.getElementById('remove');
removeBtn.addEventListener("click",function(){
  
});

//A button to change  read status on each book's Display//
let statusButton = document.getElementById('status');
statusButton.addEventListener("click",function(){
this.textContent = "Unread";
this.style.backgroundColor = "rgb(210, 97, 97)";
});