let library = [];
let cbTrue = "yes!";
let cbFalse = "heck no";
let end = 0;

const container = document.querySelector('.container');
const addButton = document.querySelector('.addButton');
const newBookButton = document.querySelector('.newBookButton');
const addBookButton = document.querySelector('.addBookButton');
const bookContainerDiv = document.querySelector('.cards-block');
// addButton.addEventListener ('click', renderLibrary());
newBookButton.addEventListener ('click', openForm());

function closeForm(){
    document.getElementById('formContainer').style.display='none'
}
closeForm();

function openForm(){
    document.getElementById('formContainer').style.display='block'
    document.getElementById('formPopup').reset();
    // clearAllRequiredFields();
}



newBookButton.addEventListener ('click', function() {
    document.getElementById('formContainer').style.display='block'
    document.getElementById('formPopup').reset();
    // clearAllRequiredFields();
})

addBookButton.addEventListener("click",function(){
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    let cb = document.getElementById("hasRead").checked;
    if(cb){
        addBookToLibrary(title,author,pages,cbTrue);
    }
    else{
        addBookToLibrary(title,author,pages,cbFalse);
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
    renderLibrary();
}

function renderLibrary(){
    if(end ===0){
        for(let i = 0; i < library.length; i++){
                createDisplay(library[i]);
        }
        end = library.length;
    }
    else{
        clearDivs();
        for(let i = 0; i < library.length; i++){
            createDisplay(library[i]);
    }
    }
}

function clearDivs(){
    while(bookContainerDiv.firstChild) {
        bookContainerDiv.removeChild(bookContainerDiv.firstChild);
      }
}
function deleteDiv(div){
    bookContainerDiv.removeChild(bookContainerDiv.firstChild);
}

function createDisplay(obj){
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readDiv = document.createElement('div');
    titleDiv.setAttribute("id","booktitle");
    authorDiv.setAttribute("id","bookauthor");
    pagesDiv.setAttribute("id","bookpages");
    readDiv.setAttribute("id","bookstatus");
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


// renderLibrary(0);