function foo() {
  console.log(arguments);
}

function fooWithParams(year, month, day) {
  console.log(arguments);
}

// arguments is a built-in data structure
//  it is an object, but implements some of the array api
//  access by index is possible
//  keys are ordinal numbers written as strings '0', '1', ...
foo(1001, true, 'string here');
fooWithParams(1001, true, 'string here');
