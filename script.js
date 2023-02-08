let library = [];

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
addBookToLibrary("loco","moko","poko","boko");
