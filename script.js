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

function processNewBookButton() {
  const button = document.querySelector('#newBook');
  const pageForm = document.querySelector('#pageForm');
  pageForm.classList.add('invisible');

  button.addEventListener('click', () => pageForm.classList.toggle('invisible'));
}

function buildForm() {
  const container = document.querySelector('#pageForm');

  const form = document.createElement('form');
  container.appendChild(form);

  // Form elements
  const titleInput = document.createElement('input');
  titleInput.placeholder = 'Title';
  titleInput.setAttribute('id', 'titleInput');

  const authorInput = document.createElement('input');
  authorInput.placeholder = 'Author';
  authorInput.setAttribute('id', 'authorInput');

  const pageCountInput = document.createElement('input');
  pageCountInput.placeholder = 'Page Count';
  pageCountInput.setAttribute('id', pageCountInput);

  const readCheckbox = document.createElement('input');
  readCheckbox.type = 'checkbox';
  readCheckbox.setAttribute('id', 'readCheckbox');

  // Form labels
  const titleInputLabel = document.createElement('label');
  titleInputLabel.textContent = "Title";
  titleInputLabel.setAttribute('for', 'titleInput');

  const authorInputLabel = document.createElement('label');
  authorInputLabel.textContent = "Author";
  authorInputLabel.setAttribute('for', 'authorInput');
  
  const pageCountInputLabel = document.createElement('label');
  pageCountInputLabel.textContent = "Page Count";
  pageCountInputLabel.setAttribute('for', 'pageCountInput');
  
  const readCheckboxLabel = document.createElement('label');
  readCheckboxLabel.textContent = "Read";
  readCheckboxLabel.setAttribute('for', 'readCheckbox');
  

  // Add elements and labels to form
  form.appendChild(titleInputLabel);
  form.appendChild(titleInput);

  form.appendChild(authorInputLabel);
  form.appendChild(authorInput);

  form.appendChild(pageCountInputLabel);
  form.appendChild(pageCountInput);

  form.appendChild(readCheckboxLabel);
  form.appendChild(readCheckbox);

}

function createCard(bookObject) {
  const card = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h3');
  const bookPageCount = document.createElement('p');
  const bookReadStatus = document.createElement('p');

  card.classList.add('card');
  
  bookTitle.textContent = bookObject.title;
  bookAuthor.textContent = bookObject.author;
  bookPageCount.textContent = `${bookObject.pageCount} pages`;
  bookReadStatus.textContent = `${bookObject.hasRead ? 'read' : 'unread'}`;

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPageCount);
  card.appendChild(bookReadStatus);

  const container = document.querySelector('#pageContainer');
  container.appendChild(card);
}

// Upon first run
processNewBookButton();
buildForm();

// Example books
const testBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(testBook1);

const testBook2 = new Book('The Way of Kings', 'Brandon Sanderson', 1008, true);
myLibrary.push(testBook2);

const testBook3 = new Book('Words of Radiance', 'Brandon Sanderson', 1088, true);
myLibrary.push(testBook3);

const testBook4 = new Book('Hyperion', 'Dan Simmons', 480, false);
myLibrary.push(testBook4);

myLibrary.forEach((book) => {
  createCard(book);
});