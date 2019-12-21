function namedFoo(params) {
  //...
  console.log('namedFoo');
}

let functionExpression = function(params) {
  //...
  console.log('functionExpression');
};

namedFoo('a');
functionExpression('a');
