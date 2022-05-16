//Start
//**First quote
// function createLibrary(libraryName) {
//   var libraryName = {
//     name: libraryName
// }
// return libraryName
// };

//Code to include shelves below//

function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
}
return library
};

////
///
///
//

//**addBook part 1 answer- Correct Answer***
// function addBook(libraryName, book) {
  // libraryName.shelves.fantasy.push(book)
// };


function addBook(libraryName, book) {
  if (book.genre === "fantasy") {
    libraryName.shelves.fantasy.push(book)
} else if
(book.genre === "fiction") {
  libraryName.shelves.fiction.push(book)
} else if
(book.genre === "nonFiction") {
    libraryName.shelves.nonFiction.push(book)
  }
}



//*** MORE DIRECT APPROACH
// function addBook (LibraryName, book) {
//     libraryName.shelves[book.genre].push(book)
// }
//libraryName.shelves[genre].title )
//refractor- maybe use a method line 59
// console.log(libraryName.shelves[genre].title);
//maybe switch genre & title

function checkoutBook(libraryName, title, genre) {
  for (var i = 0; i < libraryName.shelves[genre].length; i++)
  if (libraryName.shelves[genre][i].title === title) {
  libraryName.shelves[genre].splice(i, 1)
    return `You have now checked out ${title} from the ${libraryName.name}`
  } else {}
    return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}`
};





























module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
