import Book from './book.js'
import * as MyLibrary from './mylibrary.js'

const addBookScreen = document.querySelector('#addBookScreen')
const booksContainer = document.querySelector('#booksContainer')
const refreshButton = document.querySelector('#refreshBooksButton')
refreshButton.addEventListener('click', function () {
    displayBooks();
    MyLibrary.renderBooks();
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
    fields.forEach(f => (f.classList.remove('invalid')))
    e.preventDefault();
    console.log('adding book...')
    const emptyFields = fields.filter(f => (f.value.length === 0)); //stores empty fields
    if (emptyFields.length !== 0) { // empty fields?
        console.log('There are empty required fields!')
        formError.textContent = "There are empty fields.";
        emptyFields.forEach(f => (f.classList.add('invalid')))
    } else {
        const newBook = new Book(
            bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, false
        );
        MyLibrary.addBook(newBook)
        clearInputs()
        displayBooks()
        MyLibrary.renderBooks()
    }
})

fields.forEach(f => {
    f.addEventListener('input', function() {
        f.classList.remove('invalid');
        formError.textContent = '';
    });
});

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

///INIT
addBookScreen.style.display = 'none'; //bad
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const elPrincipito = new Book("Principito", "Antoine de Saint-Exupéry.", 150, true)
MyLibrary.addBook(theHobbit)
MyLibrary.addBook(elPrincipito)
displayBooks()
MyLibrary.renderBooks()