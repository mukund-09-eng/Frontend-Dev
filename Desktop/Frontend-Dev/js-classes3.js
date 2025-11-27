class Book {
  constructor(title, author, ISBN, isIssued) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("Atomic Habits", "James Clear", "101", false),
  new Book("The Alchemist", "Paulo Coelho", "102", false),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103", true),
  new Book("Think & Grow Rich", "Napoleon Hill", "104", false)
];

const availableBooks = books.filter(b => b.isIssued === false);
console.log("Available Books:");
availableBooks.forEach(b => console.log(b.title, b.author, b.ISBN));

function issueByISBN(isbn) {
  const book = books.find(b => b.ISBN === isbn);
  if (book && !book.isIssued) {
    book.issueBook();
    console.log("Book issued:", book.title);
  } else {
    console.log("Book not available");
  }
}

issueByISBN("102");
