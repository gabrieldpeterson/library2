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

const testBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(testBook1);

const testBook2 = new Book('The Way of Kings', 'Brandon Sanderson', 1008, true);
myLibrary.push(testBook2);

const testBook3 = new Book('Words of Radiance', 'Brandon Sanderson', 1088, true);
myLibrary.push(testBook3);

const testBook4 = new Book('Hyperion', 'Dan Simmons', 480, false);
myLibrary.push(testBook4);

myLibrary.forEach((book) => {
  book.info();
});