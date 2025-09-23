// What do we need to think about?
// Decomposition
//convert f -> c = (c * 9 / 5) + 32;
//convert c -> f = (f - 32) * 5 / 9;

// red, green, refactor
// red = write a test knowing it will fail
// green = write code that passes test
// refactor until green, then  move on

// js file imported into a js file, no extension needed
const {convertToCelsius} = require("../src/index")

// Functionality = API Contracts
describe("Functionality = API Contracts", ()=>{
    // does it exist
    test("does function exist", ()=>{
        expect(typeof convertToCelsius).toBe("function");
        expect(convertToCelsius.length).toBe(1);

    })
    //   length of function
    // correct parameters = arity => 1 =number of arguments accepted
    test("does function take only 1 argument", ()=>{
        expect(convertToCelsius.length).toBe(1);
    })
})

// data types = numbers only!!!
describe("Testing datatypes", ()=>{
    // are we getting the correct datatypes !=> false
    const dataTypeArray = [undefined, null, true, "32", [], {}, NaN]
    test("for each element [undefined, null, true, \"32\", [], {},]-> false", ()=>{
        dataTypeArray.forEach((el)=>{
            //     do something
            expect (convertToCelsius(el)).toBe(false);
        })
    })

    // test("if undefined -> false",  ()=>{
    //
    // })
    // test("if null -> false",  ()=>{
    //     expect (convertToCelsius(null)).toBe(false);
    // })
    // test("if [] -> false",  ()=>{
    //     expect (convertToCelsius([])).toBe(false);
    // })
})










// Precision!!!
// how in depth do we go with results?

// at -40 c and f are the same

// Phase 10 -
//  test for Kelvin
