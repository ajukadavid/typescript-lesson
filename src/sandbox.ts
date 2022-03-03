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