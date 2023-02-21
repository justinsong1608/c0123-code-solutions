function ExampleConstructor() {

}

console.log('value of the prototype property:', ExampleConstructor.prototype);
console.log('typeof of the prototype property:', typeof ExampleConstructor.prototype);

var constr = new ExampleConstructor();
console.log('value of new ExampleConstructor:', constr);

var bool = constr instanceof ExampleConstructor;
console.log('instanceof:', bool);
