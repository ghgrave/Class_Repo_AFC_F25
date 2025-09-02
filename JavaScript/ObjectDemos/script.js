let persons = {
    results: {
        fname: "George",
        lname: "Of the Jungle",
        age: 22,
        isMarried: true,
        children: false,
        pets: 3
    }

}

// Destructuring
console.log(persons.lname)
  const {fname, lname, age, isMarried, children} = persons.results
console.log(fname)

// Arrays - spread  operators
let pets1 = ["Atlas", "Ranger"]
let pets2 = ["Bug"]

let pets3 = [pets1, pets2]
console.log(pets3)

let pets4 = [...pets1, ...pets2, ...pets1]
console.log(pets4)