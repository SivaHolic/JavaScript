const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: "IMPORTANT INFO",
            },
        },
    },
};


console.log('obj', obj);
console.log(JSON.stringify(obj,null,2));
//JSON.stringify() is used to convert the obj object into a JSON string.
// The second parameter, null, specifies a replacer function or array. In this case, it's null, which means no replacer function is applied.
// The third parameter, 2, specifies the number of spaces to use for indentation