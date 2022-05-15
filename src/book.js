

function createTitle(book1) {
  var newBookTitle = `The ${book1}`
  return newBookTitle
};

function buildMainCharacter(characterName, characterAge, characterPronouns) {
var characterInfo = {
  name: characterName,
  age: characterAge,
  pronouns: characterPronouns,
}

return characterInfo;
};


function saveReview(clientReview, reviews) {
  if (!reviews.includes(clientReview)) {
   reviews.push(clientReview)
   }
  };

//**Re-Work** #19
// if (reviews.includes(clientReview)) {
// } else {
//   review.push(clientReview)
// }
// }





function calculatePageCount(bookTitle) {
  for(var i =  0; i < bookTitle.length; i++) {
    return bookTitle.length * 20
 }
}
// function calculatePageCount(bookTitle) {
//   for(var i =  0; i < bookTitle.length; i++) {
//     return bookTitle.length * 20
//  }
// }

//
//
//

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
}

function editBook(cliffNotes) {
cliffNotes.pageCount = cliffNotes.pageCount * .75
console.log(cliffNotes.pageCount)
}

//the object is re-assigned to a new parameter, cliffNotes
//reassign pageCount to be cliffNotes * .75
//The code is dynamic for all books








module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
