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

// const age = 20
// console.log(age);
// console.log (typeof age);

// const value = 3.14
// console.log(value);
// console.log(typeof value);

// //! 2 string

// 'Bill' | "Bill"

// const name = 'Bill'
// console.log(name);
// console.log(typeof name);

// const email = "test@gmail.com"
// console.log(email);
// console.log(typeof email);

// const password = "123456test"
// console.log(password);
// console.log(typeof password);


// const test = 'usdhgihsidgo ishdisd jsdiuhfsdiuh siodhjisdfoj oidijfs'
// console.log(test);


// const numString = '10'
// console.log(numString);
// console.log(typeof numString);



// ! 3 boolean
// true|false

// let isActivate = false
// console.log(isActivate);
// console.log(typeof isActivate);

// isActivate = true
// console.log(isActivate);
// console.log(typeof isActivate);

// ! 4 undefined - присвоює сам js коли в нас пуста змінна або константа тобто без данних

// let any
// console.log(any);
// console.log(typeof any);

// any = 'test'
// console.log(any);
// console.log(typeof any);

// let same = undefined //? примусово присвоюємо це значення

// ! 5 null - що ми знаємо що данна змінна є пуста 

// let port = null
// console.log(port);
// console.log(typeof port);

// !приклад з if
// if(port === null){
//     console.log('port is empty');
// }else if(port !== null){
//     console.log('port is ok'); 
// }

// //////////////////////////////////////////////////////
// ! математичні дії
// const a = 5.2, b = 10, c = 2

// let result = 0

// result = a + b
// result = a - b
// result = a * b
// result = a / b
// result = 5 % 2

// result = (2 + 2) * 2

// console.log(result);

// //////////////////////////////////////////////////////////

// const hello = 'hello its my first app'
// // alert(hello)

// const num1 = +prompt('Enter number 1!')
// const num2 = +prompt('Enter number 2!')

// alert(num1 + num2)

// !ПРАКТИКА

// ! 1 exercise
// const yourname = prompt('Привіт, введіть своє імя')

// alert ('Привіт' + ' ' + yourname)

// ! 2 exercise
// const yourage = prompt('Привіт, введи свій рік народження')

// let ageresult = 0

// ageresult = 2024 - yourage

// console.log(ageresult);
// console.log(typeof ageresult);

// ! 3 exercise
// const length = prompt('Привіт, введи довжину однієї сторони Квадрата!')

// let squareresult = 0

// squareresult = length * 4

// alert ('Периметр квадрата буде -' + ' ' + squareresult + 'см' )

// ! 4 exercise
// const radius = prompt('Веддіть будь ласка радіус кола')

// let resultradius = 0

// resultradius = radius * 2 * 3.14

// alert ('Площа кола буде становити -' + ' ' + resultradius )

// ! 5 exercise
// const distance = prompt('Веддіть відстань між вашим  містом та містом до якого ви хочете дістатися у км')
// const time = prompt('За який час ви хочете добратися? Відповідь введіть у годинах')

// let resultdistance = 0
// let resulttime = 0
// let speed = 0

// resultdistance = distance
// resulttime = time
// speed = resultdistance / resulttime

// alert ('Щоб дістатися до місця призначеня за' + ' ' + resulttime + ' ' +('Потрібно їхати зі швидкістю') + ' ' + speed)

// ! 6 exercise
// const dollar = prompt('Веддіть кількість долларів яку ви хочете перевести у євро')
// const euro = 1.09

// let resultdollar = 0

// resultdollar = dollar * euro

// alert('З вашої кількості долларів вийде -' + ' ' + resultdollar + ' ' + ('euro'))






