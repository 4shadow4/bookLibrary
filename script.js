const library = document.getElementById("library");
const addBook = document.getElementById("addBook");
const formContainer = document.getElementById("formContainer");
const form = document.getElementById("formBook");
const submit = document.getElementById("submit");
const infoTitle = document.getElementById("infoTitle");
const infoAuthor = document.getElementById("infoAuthor");
const infoPages = document.getElementById("infoPages");
const infoStatus = document.getElementById("infoStatus");
const info = document.getElementById("info")

let books = [];


addBook.addEventListener('click', function(){
    formContainer.style.visibility = "visible";
});

submit.addEventListener('click', function(e){
    e.preventDefault();

    let customID = crypto.randomUUID();
    console.log(customID);


    const bookButton = document.createElement("button");
    const title = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value === "true";
    bookButton.id = customID;


    console.log(bookButton.id);

    const newBook = new createBook(title, author, pages, status, customID);

    books.push(newBook);


    bookButton.addEventListener('click', function(){
        for(let book of books){
            if(book.randId === bookButton.id){

                info.style.visibility = "visible";

                infoTitle.textContent = book.title;
                infoAuthor.textContent = book.author;
                infoPages.textContent = book.pages;

                if(book.status){
                    infoStatus.textContent = "Already read.";
                }else{
                    infoStatus.textContent = "Not read yet";
                }

            }
        }
    });

    library.appendChild(bookButton);
    formContainer.style.visibility = "hidden";


});



function createBook(title, author, pages, status, randId){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.randId = randId;
    this.info = function(){
        console.log(`${this.title} written by ${this.author}, pages ${this.pages}, ${this.read? 'already read':'not read yet'}`)
    }
}

