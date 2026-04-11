const library = document.getElementById("library");
const addBook = document.getElementById("addBook");
const formContainer = document.getElementById("formContainer");

let books = [];

addBook.addEventListener('click', function(){
    let book = document.createElement("button");
    formContainer.style.visibility = "visible";

    library.append(book);

});



function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(`${this.title} written by ${this.author}, pages ${this.pages}, ${this.read? 'already read':'not read yet'}`)
    }
}

