

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


function saveReview(userReview, reviews) {
  if (!reviews.includes(userReview)) {
   reviews.push(userReview)
   }
  };


// if (reviews.includes(userReview)) {
// } else {
//   review.push(userReview)
// }
// }





module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
