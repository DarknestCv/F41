console.log('Test');

// ! 1 типи змінних або константи

//? глобальна зона видимості
var number = 1 


//? блочні зони видимості
let number2 = 2 //! змінна
const number3 = 3.14 //! константа

// console.log(number2);

// number2 = 222
// console.log(number2);


// console.log(number3);


// number3 = 3.99
// console.log(number3);

// function test(params) {
//     let a = 1
// }
// test()
// console.log(a);



//! типи данних в js

//! 1 number

const age = 20
console.log(age);
console.log (typeof age);

const value = 3.14
console.log(value);
console.log(typeof value);

//! 2 string

'Bill' | "Bill"

const name = 'Bill'
console.log(name);
console.log(typeof name);

const email = "test@gmail.com"
console.log(email);
console.log(typeof email);

const password = "123456test"
console.log(password);
console.log(typeof password);


const test = 'usdhgihsidgo ishdisd jsdiuhfsdiuh siodhjisdfoj oidijfs'
console.log(test);


const numString = '10'
console.log(numString);
console.log(typeof numString);



// ! 3 boolean
// true|false

let isActivate = false
console.log(isActivate);
console.log(typeof isActivate);

isActivate = true
console.log(isActivate);
console.log(typeof isActivate);

// ! 4 undefined - присвоює сам js коли в нас пуста змінна або константа тобто без данних

// let any
// console.log(any);
// console.log(typeof any);

// any = 'test'
// console.log(any);
// console.log(typeof any);

// let same = undefined //? примусово присвоюємо це значення

// ! 5 null - що ми знаємо що данна змінна є пуста 

let port = null
console.log(port);
console.log(typeof port);

// !приклад з if
// if(port === null){
//     console.log('port is empty');
// }else if(port !== null){
//     console.log('port is ok'); 
// }

// //////////////////////////////////////////////////////
// ! математичні дії
const a = 5.2, b = 10, c = 2

let result = 0

result = a + b
result = a - b
result = a * b
result = a / b
result = 5 % 2

result = (2 + 2) * 2

console.log(result);

// //////////////////////////////////////////////////////////

const hello = 'hello its my first app'
// alert(hello)

const num1 = +prompt('Enter number 1!')
const num2 = +prompt('Enter number 2!')

alert(num1 + num2)






