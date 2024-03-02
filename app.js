let x = 10;
{
    console.log(x);
    let x = 20; 
    console.log(x);
}

// output : ReferenceError: Cannot access 'x' before initialization
// The concept of hoisting applies to both var and function declarations in JavaScript. However, there are some differences in how hoisting works with var, let, and const declarations.
// This means you cannot access let and const variables before they are declared in the code.