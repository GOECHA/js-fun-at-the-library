
//
function shelfBook(bookTitle, bookShelf) {
  bookShelf.unshift(bookTitle)
};
//**First answer Q1 &2



function shelfBook(bookTitle, bookShelf) {
if (bookShelf.length < 3)
bookShelf.unshift(bookTitle)
};

//The function shelfBook has parameters of bookTitle which references
//Our objects bookTitle
//Parameter 2 references our array; sciFiShelf
// if our array length is less than three, [0,1,2]
//Then our array uses the array prototype unshift to add our new
//object or element to the shelf

function unshelfBook(bookTitle, bookShelf) {
  for (var i = 0; i < bookShelf.length; i ++)
    if (bookShelf[i].title.includes(bookTitle)) {
      bookShelf.splice(i, 1)
    }
};

//We want to hold the same parameters as shelfBook, but the goal is to
//accomplish decreasing the quantity of objects in an array
//if the array bookShelf
//

function listTitles(bookShelf) {
  var titles = [];
for (var i = 0; i < bookShelf.length; i ++) {
// console.log(titles[i]);
titles.push(bookShelf[i].title);
 }
return titles.join(", ")
};


// bookTitle();
// return bookShelf[i].bookTitle.title();
// // console.log(titles);
// bookShelf[i].bookTitle.title === titles[i]
//
//
//var titles = titles.title;

function searchShelf (bookShelf, bookTitle) {
  var result
  for (var i = 0; i < bookShelf.length; i ++) {
  if (bookShelf[i].title === bookTitle) {
result = true;
} else {
  result = false;
}
}
return result
};




















module.exports = {
shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

// for (var i = 0; i < book.length; i++)
// var sciFiShelf = newShelf.genre
// if genre ==== "sciFi"
// }
// return sciFiShelf
// };
// console.log(sciFiShelf.unshift(hyperion, dune))
// console.log(sciFiShelf.unshift(books))
