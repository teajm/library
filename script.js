let library = [];

const container = document.querySelector('.container');
const addButton = document.querySelector('.addButton');



addButton.addEventListener ('click', renderLibrary());

addButton.addEventListener("click", function () {
    for(let i = 0; i < library.length; i++){
        createDisplay(library[i]);
    }
})
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(title, author, pages, read){
    const bookObj = new Book(title,author,pages,read);
    library.push(bookObj);
}
function renderLibrary(){

}
function createDisplay(obj){
    const bookContainerDiv = document.createElement('div');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readDiv = document.createElement('div');

    bookContainerDiv.setAttribute('data', library.indexOf(obj));
    container.appendChild(bookContainerDiv);

    bookDiv.classList.add('book');
    bookContainerDiv.appendChild(bookDiv);

    titleDiv.textContent = obj.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = obj.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = obj.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    readDiv.textContent = obj.read;
    readDiv.classList.add('read');
    bookDiv.appendChild(readDiv);
}
addBookToLibrary("loco","moko","poko","boko");




