function foo(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// parameter type cannot be enforced
foo(100, true, 'Hello');

//  too few arguments. call is valid. a,b,c are undefined
foo();

// too many arguments. others are ignored.
foo(1, 2, 3, 4, 5);

//  named parameters are not possible
//  goes by the position
