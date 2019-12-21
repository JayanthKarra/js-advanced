book = {};

book.title = 'Crime and Punishment';
book.pages = 1240;
book.price = 900.2;

book.author = {};
book.author.name = 'Fyodor Dostoevsky';
book.author.country = 'Russia';
book.author.genre = 'novels';

// console.log(book);

//  dot notation for valid identifier keys
console.log(book.title);

//  subscript notation for non-valid identifier keys
book['india-edition'] = 'IE23';

console.log(book['india-edition']);
console.log(book['author']);
