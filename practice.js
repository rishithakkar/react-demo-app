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

// Object & Array are not immutable data type
// const arr = [2, 4, 1, 6]
// console.log('arr', arr)
// const sortArr = arr.sort();
// console.log('sortArr', sortArr)
// console.log('arr', arr)

// const person = {
//   name: "rishi",
//   address: {
//     country: "India",
//     city: "Ahmedabad",
//   },
// };

//#region - Object
// const newObj = person;
// newObj.name = 'Earl';
// console.log('newObj', newObj)

// 1. Object.assign
// const updatedObj = Object.assign({}, person, {name: 'Mark', surname: 'thakkar'})
// console.log('updatedObj', updatedObj)

// 2. Spred operator
// const updatedObj = { ...person, address: { ...person.address }, name: "Mark", surname: "thakkar" };
// const updatedObj = _.cloneDeep(person)
// updatedObj.address.city = "Nadiad";

// console.log("person", person);
// console.log("updatedObj", updatedObj);

// Strings and numbers are immutable data type
// let fName = "rishi";

// console.log('Name', fName.toUpperCase())
// console.log('fName', fName)
//#endregion - Object

//#region - Array
// const nums = [1, 2, 3, 5, 25, 20, 15]
// const newNums = [...nums, 4]; // Adding
// newNums[1] = 5
// const thirdIdx = nums.indexOf(3) + 1 
// console.log('thirdIdx', thirdIdx)

// Adding
// const newNums = [
//     ...nums.slice(0, thirdIdx),
//     4,
//     ...nums.slice(thirdIdx)
// ]
// console.log('nums', nums)
// console.log('newNums', newNums)

// Delete
// const newAry = nums.filter((n) => n > 18)
// console.log('newAry', newAry)

// Updating
// const updatedArr = nums.map((n) => n === 2 ? 10 : n)
// const newArr = nums.map((n) => {
//     if(n === 2) return 10
//     else return n
// })

// console.log('updatedArr', updatedArr)
// console.log('nums', nums)
//#endregion - Array

