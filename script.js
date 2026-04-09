function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(`${this.title} written by ${this.author}, pages ${this.pages}, ${this.read? 'already read':'not read yet'}`)
    }
}

const book1 = new book("The Brain", "Franz Bonapart", "189", true);

book1.info();