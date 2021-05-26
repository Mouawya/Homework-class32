//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books, index) {
  const ulEl = document.createElement('ul');
  document.querySelector('#bookList').appendChild(ulEl);

  const bookInfo = books.forEach((book) => {
    const pEl = document.createElement('p');
    pEl.textContent = `${book.title} - ${book.author}`;
    const liEl = document.createElement('li');
    liEl.appendChild(pEl);
    return bookInfo;
  });

  ulEl.appendChild(bookInfo);

  //adding the images

  const image = document.createElement('img');
  if (index === 0) {
    image.src =
      '/2-Browsers/Week1/homework/ex1-bookList/assets/the_design_of_everyday_things.jpg';
    bookInfo.appendChild(image);
  } else {
    if (index === 1) {
      image.src =
        '/2-Browsers/Week1/homework/ex1-bookList/assets/the_most_human_human.jpg';
      bookInfo.appendChild(image);
    } else {
      image.src =
        '/2-Browsers/Week1/homework/ex1-bookList/assets/the_pragmatic_programmer.jpg';
      bookInfo.appendChild(image);
    }
  }

  // styling

  if (books.alreadyRead === true) {
    bookInfo.style.backgroundColor = 'green';
  } else {
    bookInfo.style.backgroundColor = 'red';
  }

  return ulEl;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
