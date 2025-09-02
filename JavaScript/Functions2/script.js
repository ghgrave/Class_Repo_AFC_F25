// // create a javascript object with first name and last name.
// let person = {
//     fname: "George",
//     lname: " Of the Jungle",
//     // add a method that returns full name.
//     // use a traditional function
//     fullname: function(){
//         return this.fname + " " + this.lname
//     }
// }
//
// // call function and display name in terminal
// console.log(person.fullname())
// console.log(person.fullname)

// // array 1 = ["apple",  "banana", "Apple", "Orange", "aPricot", "orange"];
// // let  array1 = ["apple",  "banana", "Apple", "Orange", "aPricot", "orange"]
// let array2 = [1, 20, 11, 3, 100, 111, 2]
// // write a fat arrow function that takes an array and sorts alphabetically
// let sortedArray = (arr)=> {
// //     need to sort alphabetically
// //      .sort()
// //     pass in a compare function
//     let newArray = arr.sort((a, b) => a - b)
// // returns the sorted array
//     return newArray;
// //     expecting: ["Apple", "apple", "aPricot", "banana","Orange","orange"]?
// //     actual output: [ 'Apple', 'Orange', 'aPricot', 'apple', 'banana', 'orange' ]
// //     expected result: [1, 2, 3, 11, 20, 100, 111, ]
// //     actual = [1, 100, 11, 111, 2,  20,  3]
//
// // display new sorted array in terminal
// }
// console.log(sortedArray(array2))


let array2 = [1, 20, 11, 3, 100, 111, 2]



let sortedArray = (arr)=> {
    if(arr.length) {
        console.log("true")
    }
    if(!Array.isArray(arr)){
        return "Not an array"
    }
    let newArray = arr.sort((a, b) => a - b)

    return newArray;

}
console.log(sortedArray(array2))
console.log(sortedArray([]))
console.log(sortedArray(24))
console.log(sortedArray("doggy"))