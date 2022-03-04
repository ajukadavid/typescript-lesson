import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payments.js'
import { HasFormatter} from './interfaces/hasFormatter.js'

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 200)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number
}

const me: isPerson = {
    name: 'Ajuka',
    age: 30,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number): number {
        console.log('i spent', amount)
        return amount
    }
}

const greetPerson = (person: isPerson) => {
        console.log('hello ', person.name)
}

greetPerson(me)



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

const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

//inputs and type casting

const type = document.querySelector("#type") as HTMLSelectElement

const toFrom = document.querySelector("#toFrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

//list template instance

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)



form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})

// classes 



// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

// let invoices: Invoice[] = []

// invoices.push(invOne)
// invoices.push(invTwo)


// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })