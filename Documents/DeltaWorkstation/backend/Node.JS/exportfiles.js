const sum =(a,b) => a+b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const subtracte = (a,b) => a-b;

const PI = 3.14;
//module.export = sum=> a+b;
//module.export
// kuch export karna kisi dosri files ko 

//module.exports = "Hello World!";

// By default module.export empty object return karta hai 

let obj = {sum:sum,
divide: divide,
multiply:multiply,
PI: PI};

module.exports = obj;
