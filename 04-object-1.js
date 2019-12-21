// encapsulation
book = {};
console.log(book);

// console.log(typeof book);

book.title = 'War and Peace';

console.log(book);

book.read = function() {
  console.log('reading...');
};

console.log(book);

book.read();

delete book.title;

console.log(book);
