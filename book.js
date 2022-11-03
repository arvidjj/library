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

function addBookToLibrary(book) {
    myLibrary.push(book)
    console.log("Book added.")
}



addBookToLibrary(theHobbit)