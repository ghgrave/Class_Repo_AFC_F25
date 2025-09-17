export class Human {
    private fname: string;
    private lname: string;
    private age: number;
    private isMarried: boolean;

    // this is a constructor
    constructor(fname: string, lname: string, age: number, isMarried:boolean) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.isMarried = isMarried;
    }

    // Adam's SS# is 212-34-1234
    public getFullName = (): void => {
        console.log(`Your name is ${this.fname} ${this.lname} `);
    }
}