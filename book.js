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

const booksContainer = document.querySelector('#booksContainer')
const refreshButton = document.querySelector('#refreshBooksButton')
refreshButton.addEventListener('click', function () {
    displayBooks();
})

function displayBooks() {
    booksContainer.innerHTML = ''
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book')
        bookCard.innerHTML = `<div class="bookInfo">
        <h3><strong>${book.title}</strong></h3>
        <p><strong>By:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p></div>
        <button class="readButton notRead">Not read yet</button>
        `
        booksContainer.appendChild(bookCard)
    })
}

addBookToLibrary(theHobbit)
addBookToLibrary(elPrincipito)