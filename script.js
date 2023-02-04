//Simple Array to store all the book objects//
let myLibrary = [];
//Book Constructor which creates book objects//
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
//Function to add book to the library//
function addBookToLibrary(book) {
 
    myLibrary.push(book);
    display(myLibrary);
    myLibrary = [];
  }
  
//A function to Loop through the myLibrary array and displays each book on the page.//
function display(library) {
// Loop through the books array//
  for (let book of library) {
    //Select the element in which the the books are to be displayed
    let booksGrid = document.getElementById('booksGrid');
    //Create a new div element//
    let bookTemp = document.createElement("div");
    // Set the class attribute for the new div
    bookTemp.setAttribute("class", "bookTemp");
    // Create a description list inside the new div
    let dl = document.createElement("dl");
    // Create title description term and description elements
    let dtTitle = document.createElement("dt");
    dtTitle.textContent = "Title:";
    let ddTitle = document.createElement("dd");
    ddTitle.textContent = book.title;
    // Append the title elements to the description list
    dl.appendChild(dtTitle);
    dl.appendChild(ddTitle);
   // Repeat for author and pages
    let dtAuthor = document.createElement("dt");
    dtAuthor.textContent = "Author:";
    let ddAuthor = document.createElement("dd");
    ddAuthor.textContent = book.author;
   // Append the author elements to the description list
    dl.appendChild(dtAuthor);
    dl.appendChild(ddAuthor);
    let dtPages = document.createElement("dt");
    dtPages.textContent = "Pages:";
    let ddPages = document.createElement("dd");
    ddPages.textContent = book.pages;
    dl.appendChild(dtPages);
    dl.appendChild(ddPages);
    // Append the description list to the new div
    bookTemp.appendChild(dl);
    // Append bookTemp to the booksGrid
    booksGrid.appendChild(bookTemp);
    //A button to change read status on each book's Display//
    let statusButton = document.createElement("button");
    bookTemp.appendChild(statusButton);
    // Set the class attribute for the statusButton
    statusButton.setAttribute("id", "status");
    statusButton.textContent = "unread";
    statusButton.addEventListener("click",function(){
      if(statusButton.textContent === "unread"){
        statusButton.textContent = "read";
        statusButton.style.background = 'rgb(72, 181, 72)';
      }else {
        statusButton.textContent = "unread";
        statusButton.style.background = 'rgb(210, 97, 97)';
      } 
    });
    //A button to remove the book from the library on each book.//
    let removeButton = document.createElement("button");
    removeButton.setAttribute("id","remove")
    removeButton.textContent="Remove";
    bookTemp.appendChild(removeButton)
    removeButton.addEventListener("click",function(){
    bookTemp.remove();
  });
 }
}

//New Book button that brings up a form for users to input the details for the newbook//
let newBook = document.getElementById('newBook');
let addNewBookForm = document.getElementById('addNewBook');

// Show the form as a modal when the new book button is pressed//
newBook.addEventListener('click', function() {
  addNewBookForm.style.display = 'block';
});
//Store the detail from the form the form in different variables to use as parameters in object constructor when the add button is pressed//
let titleValue = document.getElementById('title');
let authorValue = document.getElementById('author');
let pagesValue = document.getElementById('pages');
let addButton = document.getElementById('add');
addButton.addEventListener('click',function(){
  event.preventDefault(); // Prevent the form from submitting
  let book = new Book(titleValue.value, authorValue.value, pagesValue.value);
  addBookToLibrary(book);
  addNewBookForm.style.display = 'none';// To hide the form after taking the input data//
});
