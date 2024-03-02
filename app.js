const people = [
    { name: "Kyle", age: 28 },
    { name: "Sally", age: 45 },
    { name: "John", age: 43 },
    { name: "Sally", age: 28 },
    { name: "samba", age: 16 },
    { name: "samba", age: 17 },
    { name: "John", age: 44 },
];
const g = Object.groupBy(people, person => person.name);
console.log(g);

//output:
// {
//     "Kyle": [
//         {
//             "name": "Kyle",
//             "age": 28
//         }
//     ],
//     "Sally": [
//         {
//             "name": "Sally",
//             "age": 45
//         },
//         {
//             "name": "Sally",
//             "age": 28
//         }
//     ],
//     "John": [
//         {
//             "name": "John",
//             "age": 43
//         },
//         {
//             "name": "John",
//             "age": 44
//         }
//     ],
//     "samba": [
//         {
//             "name": "samba",
//             "age": 16
//         },
//         {
//             "name": "samba",
//             "age": 17
//         }
//     ]
// }