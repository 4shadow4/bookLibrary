const library = document.getElementById("library");
const addBook = document.getElementById("addBook");
const formContainer = document.getElementById("formContainer");
const form = document.getElementById("formBook");
const submit = document.getElementById("submit");
const infoTitle = document.getElementById("infoTitle");
const infoAuthor = document.getElementById("infoAuthor");
const infoPages = document.getElementById("infoPages");
const infoStatus = document.getElementById("infoStatus");
const infoImg = document.getElementById("infoImg");
const info = document.getElementById("info");
const closeInfo = document.getElementById("closeInfo");
let books = [];

function createBook(title, author, pages, status, image, randId){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.randId = randId;
    this.image = image;
    this.info = function(){
        console.log(`${this.title} written by ${this.author}, pages ${this.pages}, ${this.read? 'already read':'not read yet'}`)
    }
}

addBook.addEventListener('click', function(){
    formContainer.style.visibility = "visible";
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    let customID = crypto.randomUUID();
    console.log(customID);


    
    const title = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value === "true";
    const image = document.getElementById("img").files[0];
    const imageURL = URL.createObjectURL(image);

    const bookButton = document.createElement("button");
    const bookTitle = document.createElement("p");
    bookTitle.textContent = title;
    bookTitle.classList.add("bookInfo");
    bookButton.classList.add("book");
    bookButton.id = customID;

    bookButton.appendChild(bookTitle)

    console.log(bookButton.id);

    const newBook = new createBook(title, author, pages, status, image, customID);

    books.push(newBook);


    bookButton.addEventListener('click', function(){
        for(let book of books){
            if(book.randId === bookButton.id){

                info.style.visibility = "visible";

                infoTitle.textContent = `Title: ${book.title}`;
                infoAuthor.textContent = `by ${book.author}`;
                infoPages.textContent = `Pages: ${book.pages}`;
                infoImg.src = imageURL;

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
    form.reset();

});

closeInfo.addEventListener('click', function(){
    info.style.visibility = "hidden";
});




