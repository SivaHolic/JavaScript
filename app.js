function manipulateArray(arr) {
    arr.push(5);
    arr = [1];
    return arr;
}

let list = [1, 2, 3, 4];
manipulateArray(list);
console.log(list); 

list = manipulateArray(list);
console.log(list);

//output: [1, 2, 3, 4, 5]
// [1]
