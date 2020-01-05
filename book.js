class Book {
  constructor(firstName, lastName, title, publicationYear){
    this.author = `${firstName} ${lastName}`;
    this.title = title;
    this.publicationYear = publicationYear;
  }
}

module.exports = Book;


// npm test book-test.js
// npm test author-test.js
