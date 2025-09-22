const {add, subtract} = require('./demo')

// describe("", cb())
describe("Addition tests", ()=>{
    // test(str, cb())
// test("if addition works correctly")
    test(" add with 5 + 7 = 12", ()=>{
        expect(add(5, 7)).toBe(12)
    })

    test("adding 2 + 5 !== 12", ()=>{
        expect(add(2, 5)).not.toEqual(12)
    })
})


//tests about subtraction
describe("Subtraction tests", ()=>{
    // const subtract =
    test("subtracting 2 from 3 = 1", ()=>{
        expect(subtract(2, 3)).toBe(1)
    })
})

// tests multiplication