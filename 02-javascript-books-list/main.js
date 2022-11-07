

// const books = [
//     {
//       title: "Harry Potter i kamień filozoficzny",
//       author: "J.K. Rowling",
//       year: 1992,
//       price: 10.99
//     },
//     {
//       title: "Lord Of The Rings",
//       author: 'Tolkien',
//       year: 1980,
//       price: 12.99
//     },
//     {
//       title: 'God Father',
//       author: "Puzo",
//       year: 1960,
//       price: 15.99
//     }
// ]

// // forEach
// let sum = 0;
// books.forEach( (book, index) => {

// console.log(`${book.title} o indeksie ${index}`);

// sum += book.price;

// });

// const average = sum / books.length;
// console.log(average);


// // map - kazdy element tablicy mozemy zamienic na cos innego
// const newBooks = books.map( (book) => {
// return book.title;
// });

// // console.log(books);
// // console.log(newBooks);



// const bookPrices = books.map( (book) => {
//     return book.price;
// });

// //console.log(bookPrices);

// let bookSum = 0;

// bookPrices.forEach( (price) => {

//     bookSum += price;
// });
// console.log(bookSum / books.length); 




// // map i forEach
// let bookSum2 = 0;

// books
// .map( (book) => {
//     return book.price;
// })
// .forEach( (price) => {

//     bookSum2 += price;
// });

// console.log(bookSum2 / books.length); 



/**
 * ćwiczenia
 */

// // 1
// books.forEach( (bookAuthor) => {
//    console.log(bookAuthor.author);
// });

// //2
// const bookAuthors = books.map( (book) => {
//     return book.author;
// })
// console.log(bookAuthors);

// //3
// const bookAuthorLength = books.map( (book) => {
//     return book.author.length;
// })
// console.log(bookAuthorLength)





// // find
// // znajdzie pierwsze wystapienie
// const puzoBook = books.find( (book) => {
//    // return book.author === 'Puzo';
//    // return book.author.includes('Puzo');
//    return book.year < 2000;
// })
// console.log(puzoBook);


// // filter
// const booksBeforeMillenium = books.filter( (book) => {
//     // return book.author === 'Puzo';
//     return book.year < 2000;
//  })
//  console.log(booksBeforeMillenium);


/**
 * cwiczenia
 */


// //1
// const findBook = books.find( (book) => {
//     return book.author.includes('J.K. Rowling');
// })
// console.log(findBook);

// //2
// const findAuthorLength = books.filter( (book) => {
//     return book.author.length > 4;
// })
// console.log(findAuthorLength);

// //3
// let bookSum = 0;
// const bookAfterSeventies = books.filter( (bookYear) => {
//     return bookYear.year > 1970;
// })
// .forEach( (book) => {
//     bookSum += book.price;
// });
// console.log(bookSum);




// // sort - funkcja do sortowania bąbelkowego ( odwrotnie ... zmienic miejscami -1 i 1)
// const sortBooks = books.sort( (a,b) => {
//     return a.price - b.price ? -1 : 1;
// })
// console.log(sortBooks);

// // reduce - stosowane głownie do sumowania - nie trzeba deklarowac zmiennej z wynikiem sumowania.
// const sum = books.reduce( (acumulator,book) => {
//     console.log(acumulator);
//     return acumulator + book.price;
// }, 0)
// console.log(sum);






