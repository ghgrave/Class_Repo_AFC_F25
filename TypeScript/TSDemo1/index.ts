let dog: string = "woof";
console.log(dog)

// this a comment
let number: number =   5

let isMarried: boolean = false;
let wasMarried: boolean;

//functions
//think about parameter data types and return data types
const getFullName = (fname: string, lname: string): string => {
    return  `${fname} ${lname}`
}

console.log(getFullName("JM", "Secret"))
console.log(getFullName(false, 24))

//Arrays
let names: string[] = ["George", "Martha", "Bob"]
let newNames: Array<string> = ["Ben", "Johnny", "Sue"]
let nums: number[] = [1, 2, 3]
let nums2: Array<number> = [2, 3, 4, "dog"]
console.log(nums2)