// To run this file hit below code in terminal
// node practice.js

// function sayHello() {
//     return "Hello, world"
// }

// 1. we can assign into a variable
// let fn = sayHello;
// fn()
// sayHello()

// function greet(paramFn) {
//     console.log('paramFn', paramFn())
// }

// 2. pass as an argument
// greet(sayHello)

// 3. return from another function
// function newFun() {
//     return function() {
//         return "Hello, world"
//     }
// }

// const fn = newFun();
// const msg = fn()
// console.log('msg', msg)

// 4. Inbuilt HOC
// setTimeout(() => {
//     console.log('Called after 1 second')
// }, 1000);
// setInterval(() => {
//     console.log("Call every 1 second")
// }, 1000);

// 5. Function composition
/* 
    const input = "   Rishi    ";
    const output = "<div>" + input.trim() + "</div>"
    console.log('output', output)

    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`;

    // const trimedStr = trim("   Rishi   ")
    const finalOutput = wrapInDiv(trim("   Rishi   "))
    console.log('finalOutput', finalOutput)

    // Import from lodash/fp
    const fnOut = compose(wrapInDiv, trim) // Right to left
    console.log('Output of compose', fnOut(input))
    const fnPipeOut = pipe(trim, wrapInDiv) // Left to right
    console.log('pipe output', fnPipeOut(input))
*/

// 6. Function currying
// function add(a, b) {
//     return a + b
// }
// console.log('Sum', add(5, 10))

// function addFun(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log("addFun: ", addFun(5)(10));

// const add = (a) => (b) => (c) => a + b + c;
// console.log("add:", add(10)(20)(40));


// JS hoisiting
// console.log('output', hello())
// console.log('x', x)

// function hello() {
//     return "Hello, world"
// }
// var x = 10;

// console.log('helloES6Fun', helloES6Fun())
// var helloES6Fun = () => {
//     return "Hello from ES6"
// }
