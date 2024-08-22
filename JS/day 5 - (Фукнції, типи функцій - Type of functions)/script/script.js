// ? Типи функцій

// ! Функції оголошенння (Function Declaration)
// ! всплития - цей тип функцій доступний скріз

// console.log(add(1,1)); // перед фун

// (a , b) це параметри функції
// function add(a, b){
//     return a + b
// }

// (1,1) це аргументи функції
// console.log(add(1,1)); // після фун

// * arguments

// function logArguments(){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[8]);
//     console.log(arguments[10]);
//     console.log(arguments.length); //к-ть елементів
// }

// logArguments(1,2,3,4,5,6,7,8,true,null,undefined)

// .................................................................................
// * return

// function logReturn(a){
//     console.log('Start');
//     if(a === 10){
//         return
//     }

//     console.log('Finish');
//     return a
// }

// console.log(logReturn(10));


// ! 2. функції вирази (Function Expression)

// const sayHello = function(){
//     console.log('Hello');
// }

// sayHello() //+++

// ! 3. Стрілкові функції (Arraw Functions)
// const nameFn = () => {}

// const sayBye = (personName) => {
//     console.log('Bay' + personName);
// }

// sayBye('illya')
// // /////////////////////////////////////////////////////////////////
// const test = () => {
//     // console.log(arguments);
//     return 1 + 2 //++++++++++
// }
// console.log(test(1,2));
// // ///////////////////////////////////////////////////////

// const test2 = a => 1 + 2 + a

// console.log(test2(1));

// ! 4. Самовикликаючий тип функцій (IIFE immediately invoker function express)

// (function (name){
//     console.log('Hello $(name)!!!');
// })('Robert')

// (function (name){
//     console.log('Hello $(name)!!!');
// }('Robert'))

// const iife = function (name) {
//     console.log('Hello $(name)!!!');
// }('Illya')

// ! РЕКУРСІЯ, РЕКУРСИВНІ ФУНКЦІЇ(Recursive functions)

// function logNum(num, end){
//     console.log(num);
//     if(num === 100){
//         return
//     }
//     logNum(++num)
// }

// logNum(1)

// ///////////////////////////////////////////////////////////////////

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n){
//     if(n === 0){
//         return 1 // 0! = 1
//     }else{
//         return n * factorial(n - 1)
//     }
// }

// const number = 5
// const result = factorial(number)

// console.log('${number}! = ${result}');

// //////////////////////////////////////////////////////////////////////////////

// let conuter = 1
// function Recursion(number){
//     console.log(conuter);
//     if(conuter < number){
//         console.log('Inside');
//         conuter++
//         Recursion(number)
//     }
// }

// Recursion(100)

// /////////////////////////////////////////////////////////////////////////////////

// function generateNestedList(depth, items){
//     if(depth === 0){
//         return ''
//     }

//     const openTag = '<ul>'
//     const closeTag = '</ul>'
//     let listItems = ''

//     for (let i = 0; i < items; i++){
//         listItems += '<li>${generateNestesList(depth - 1, items)}</li>'
//     }
//     return '${openTag}${lisstItems}${closeTag}'
// }

// const nestedList = generateNestedList(2, 1)
// console.log(nestedList);

// ! Kontr
// ! 1

// function power(one, stap) {
//     if(stap === 0){
//         return 1
//     }
//     return one * power(one, stap -1)
// }

// console.log(power(3,2));

// ! 3

function fibonacci(n){
    if(n === 0){
        return 0
    } else if(n === 1){
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(4));

