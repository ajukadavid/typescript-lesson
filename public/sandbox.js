"use strict";
// let greet = () => {
//     console.log('hello, world')
// }
//
// let greet: Function;
// greet = () => {
//     console.log('hello again')
// }
// const add = (a: number, b: number, c: number | string = 10) => {
//     console.log(a + b)
//     console.log(c)
// }
// add(5, 10, '20')
// const minus = (a: number, b: number): number => {
//     return a + b
// }
// let result = minus(10, 7)
/*TYPE ALIAASES */
// type StringOrNum = string | number
// type objWithName = {name: string, uid: StringOrNum}
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: {name: objWithName}) => {
//     console.log(`${user.name} says hello`)
// }
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`)
// }
// let calc: (a: number, b:number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if(action ==='add'){
//         return numOne + numTwo
//     }else {
//         return numOne - numTwo
//     }
//     let logDetails: (obj: {name: string, age: number}) => void
//     logDetails = (ninja: {name: string, age: number}) => {
//         console.log(``)
//     }
// }
// const anchor = document.querySelector('a')!
//     console.log(anchor.href)
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs and type casting
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
// classes 
class Invoice {
    //     client: string;
    //     details: string;
    //   private amount: number
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for  ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
