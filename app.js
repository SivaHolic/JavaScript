let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(arr[i]);
    }, 1000 );
}
//output: undefined print 5 times because i will become 5 and it will call 5 times after timeout
// In JavaScript, var does not create a new scope for each iteration in a loop. 
// Instead, it has function scope or global scope, depending on where it's declared. 
// This means variables declared with var are not block-scoped like those declared with let or const.


let arry = [1, 2, 3, 4, 5];
for (let i = 0; i < arry.length; i++) {
    setTimeout(() => {
        console.log(arr[i]);
    }, 1000 );
}

//output: 1 2 3 4 5
//let i creates a new scope for each iteration