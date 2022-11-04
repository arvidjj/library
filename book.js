//let myLibrary = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        const readString = this.read ? "read" : "not read yet"
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`
    }
}

const myLibrary = (() =>{
    const books = []
    const _booksContainer = document.querySelector('#booksContainer')

    const addBook = (book) => (books.push(book))
    const deleteBook = (index) => (books.splice((index), 1))
    const readBook = (index) => {
        const selectedBook = books[index]
        selectedBook.read = !selectedBook.read;
        books[index] = selectedBook
    }
    const renderBooks = () => {
        _booksContainer.innerHTML = ''
        books.forEach((book, index) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book')
    
            const id = `book-${index}`
            bookCard.setAttribute('id', id)
            
            let readYet;
            switch (book.read) {
                case true:
                    readYet = `<button class="readButton read" onclick="readBook('${id}')">Read</button>`
                    break;
                case false:
                    readYet = `<button class="readButton notRead" onclick="readBook('${id}')">Not read yet</button>`
                    break;
            }
            bookCard.innerHTML = `<div class="bookInfo">
            <h3><span class="material-symbols-outlined">
            book
            </span><strong>${book.title}</strong></h3>
            <p><strong>By:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p></div>
            <div class="cardOptions">
            <button id="deleteButton" class="iconButton" onclick="deleteBook('${id}')"><span class="material-symbols-outlined filledIcon ">
            delete_forever
            </span></button>
            </div>
            ${readYet}
            `;
            _booksContainer.appendChild(bookCard)
        })
    }
    return {
        addBook,
        deleteBook,
        readBook,
        renderBooks
    }
})();

const addBookScreen = document.querySelector('#addBookScreen')
const booksContainer = document.querySelector('#booksContainer')
const refreshButton = document.querySelector('#refreshBooksButton')
refreshButton.addEventListener('click', function () {
    displayBooks();
    myLibrary.renderBooks();
})

function displayBooks() {
    addButton.removeAttribute('disabled', 'disabled')
    addBookScreen.style.display = 'none';
    booksContainer.style.display = 'grid';
}
function displayAddForm() {
    addButton.setAttribute('disabled', 'disabled')
    booksContainer.style.display = 'none';
    addBookScreen.style.display = 'flex';
}

const addButton = document.querySelector('#addBookButton')
addButton.addEventListener('click', function () {
    displayAddForm()
})

const cancelButtonFromAddScreen = document.querySelector('#cancelAddBook')
const addBookButtonFromAddScreen = document.querySelector('#addBook')
const bookTitleInput = document.querySelector('#title')
const bookAuthorInput = document.querySelector('#author')
const bookPagesInput = document.querySelector('#pages')
const fields = Array.from(document.querySelectorAll('input'));
const formError = document.querySelector('#formError')

function isFieldEmpty(field) {
    return field.value.length === 0;
}
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('adding book...')
    const emptyFields = fields.filter(f => (f.value.length === 0)); //stores empty fields
    if (emptyFields.length !== 0) { // empty fields?
        console.log('There are empty required fields!')
        formError.textContent = "There are empty fields.";
    } else {
        const newBook = new Book(
            bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, false
        );
        myLibrary.addBook(newBook)
        clearInputs()
        displayBooks()
        myLibrary.renderBooks()
    }
})
cancelButtonFromAddScreen.addEventListener('click', function (e) {
    displayBooks();
    e.preventDefault();
})
function clearInputs() {
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookPagesInput.value = '';
}

//////MANIPULATING BOOKS//////

function getIndex(book) {
    return book.split('-')[1]
}

function deleteBook(book) { 
    myLibrary.deleteBook(getIndex(book));
    console.log(book + " removed")
    myLibrary.renderBooks()
}

function readBook(book) {
    myLibrary.readBook(getIndex(book))
    myLibrary.renderBooks()
}


///INIT
addBookScreen.style.display = 'none';
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const elPrincipito = new Book("Principito", "Antoine de Saint-Exupéry.", 150, true)
myLibrary.addBook(theHobbit)
myLibrary.addBook(elPrincipito)
displayBooks()
myLibrary.renderBooks()