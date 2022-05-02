let myLibrary = [];

function Book(title, author, pageCount, hasRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.hasRead = hasRead;
}

Book.prototype.info = function() {
  console.log(`${this.title} by ${this.author}, ${this.pageCount} pages, ${this.hasRead ? 'has read' : 'not read yet'}`);
}

function addBookToLibrary() {
  // function
}

const testBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

testBook.info();