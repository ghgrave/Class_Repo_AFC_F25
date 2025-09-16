
// Create an array of 5 random "yes words"
// Combine into ONE array using spread operator

const yesNoWords = require('yes-no-words').default

// Create an array of 5 random "yes words"
let yesArray = [];
let noArray = [];

for (let i = 0; i < 5;i++){
    noArray.push(yesNoWords.noRandom())
    yesArray.push(yesNoWords.yesRandom())
}

let newArray = [...yesArray, ...noArray]
console.log(newArray)