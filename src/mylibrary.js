
const books = []

const _booksContainer = document.querySelector('#booksContainer')

const addBook = (book) => (books.push(book))

function getIndex(book) {
    return book.split('-')[1]
}

function readBook(book) {
    const index = getIndex(book)
    const selectedBook = books[index]
    selectedBook.read = !selectedBook.read;
    books[index] = selectedBook
    renderBooks()
}

function deleteBook(book) { 
    const index = getIndex(book)
    books.splice(index, 1)
    console.log(book + " removed")
    renderBooks()
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
                readYet = `<button id="readButton${id}" class="readButton read">Read</button>`
                break;
            case false:
                readYet = `<button id="readButton${id}" class="readButton notRead">Not read yet</button>`
                break;
        }
        bookCard.innerHTML = `<div class="bookInfo">
            <h3><span class="material-symbols-outlined">
            book
            </span><strong>${book.title}</strong></h3>
            <p><strong>By:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p></div>
            <div class="cardOptions">
            <button id="deleteButton${id}" class="iconButton"><span class="material-symbols-outlined filledIcon ">
            delete_forever
            </span></button>
            </div>
            ${readYet}
            `;
        _booksContainer.appendChild(bookCard)
        /// CLICK ON DELETE AND READ
        document.querySelector(`#deleteButton${id}`).addEventListener('click', ()=>{
            deleteBook(`${id}`);
        })
        document.querySelector(`#readButton${id}`).addEventListener('click', ()=>{
            readBook(`${id}`);
        })
        ///
    })
}

 export {   addBook,
    deleteBook,
    readBook,
    renderBooks }

