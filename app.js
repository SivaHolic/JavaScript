function test() {
    var a = b = 5;
}

test();
console.log(b);
console.log(a);

//output:
//5
//ReferenceError: a is not defined

//means
// b = 5;
// var a = b;
// b = 5; assigns the value 5 to the global variable b (implicitly declaring b in the global scope if it hasn't been declared before). Therefore, b becomes a global variable with a value of 5.
// var a = b; declares a local variable a within the test() function and assigns it the value of the global variable b, which is 5.