console.log(typeof undefined); // undefined is a type
console.log(typeof null); // type is object, but evaluated to be falsy

var car; // uninitialized, hence undefined

console.log(car);

car = null; // explicitly set to null

console.log(car);
