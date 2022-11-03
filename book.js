let myLibrary = []

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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const elPrincipito = new Book("Principito", "Antoine de Saint-Exupéry.", 150, false)

function addBookToLibrary(book) {
    myLibrary.push(book)
    console.log("Book added.")
}

const addBookScreen = document.querySelector('#addBookScreen')
const booksContainer = document.querySelector('#booksContainer')
const refreshButton = document.querySelector('#refreshBooksButton')
refreshButton.addEventListener('click', function () {
    addButton.removeAttribute('disabled', 'disabled')
    addBookScreen.style.display = 'none';
    booksContainer.style.display = 'grid';
    displayBooks();
})

function displayBooks() {
    booksContainer.innerHTML = ''
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book')
        bookCard.setAttribute('id', `${book.title.replace(/\s/g, '').toLowerCase()}`)
        bookCard.innerHTML = `<div class="bookInfo">
        <h3><span class="material-symbols-outlined">
        book
        </span><strong>${book.title}</strong></h3>
        <p><strong>By:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p></div>
        <button class="readButton notRead">Not read yet</button>
        `
        booksContainer.appendChild(bookCard)
    })
}

const addButton = document.querySelector('#addBookButton')
addButton.addEventListener('click', function (){
    addButton.setAttribute('disabled', 'disabled')
    booksContainer.style.display = 'none';
    addBookScreen.style.display = 'initial';
})

addBookScreen.style.display = 'none';
addBookToLibrary(theHobbit)
addBookToLibrary(elPrincipito)