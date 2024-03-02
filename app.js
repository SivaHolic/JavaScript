let numbers = [78, 23, 21, 56, 76];
numbers.sort(); // we use sort method also
numbers.sort((a, b) => a - b); // Sort the numbers in ascending order
numbers.sort((a, b) => a - b); // Sort the numbers in descending order
console.log(numbers);


let people = [
    { name: "Neil", lastName: "Kanani" },
    { name: "Akshay", lastName: "Joseph" },
    { name: "Funsuk", lastName: "Wangdu" }
];

people.sort((a, b) => a.name.localeCompare(b.name)); // Sort the object in ascending order
people.sort((a,b) => b.name.localeCompare(a.name)); // Sort the object in descending order
console.log(people);