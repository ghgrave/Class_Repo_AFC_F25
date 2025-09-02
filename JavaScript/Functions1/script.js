// // pass in a number and returns the square of it
//
// // declaring and assigning
// let squareFunction = (num) => {
//  return   num * num
// }
//
// //invoking a function (calling)
// // argument
// console.log(squareFunction(4));


// let squareFunction2 = num => num * num
//
//
// console.log(squareFunction2(6));
//
// console.log(`The square footage is ${squareFunction2(6)}`);

// area of something require height and width
// return height * width

// let areaOfRectangle = (width, height = 4) =>{
//     return width * height;
// }
// console.log(areaOfRectangle(4))
let areaOfRectangle = (width = 5, height) => width * height;

console.log(areaOfRectangle(undefined, 9))


