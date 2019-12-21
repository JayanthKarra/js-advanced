// Types are there, but a variable can keep on changing the types

// number is a double precision floating point unit (64 bits)
i = 0;

console.log(typeof i);

i = 1.2587888;

console.log(typeof i);

// string. no characters.
// in node or in modern browsers,
//  strings are unicode: https://unicode.org/
i = 'Hello there';

console.log(typeof i);

// boolean
i = true;
console.log(typeof i);

//  object literals
i = {
  name: 'Vijay',
  year: 2019
};

console.log(typeof i);

//  function is a type

i = function() {
  //...
};
console.log(typeof i);
