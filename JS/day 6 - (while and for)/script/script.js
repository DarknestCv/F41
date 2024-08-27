// ? цикли в js

// console.log('hello');


// ! 1 FOR ЦИКЛ

// * for(початкове значення; умова(поки умова === true); крок){
// *    тіло нашого цикла
//* }

// for(let i = 0; i < 5; i++){
//     console.log('hello' + i);
// }

// //////////////////////////////////////////////////////////////////////////////////////////

// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Siat', 'Wolkswagen']
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// console.log(arr.length);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// ////////////////////////////////////////////////////////////////////
// ! вічний цикл

// for(let i = 0; i < 10; i){
//     console.log(i);
// }

// ! 2 WHILE

// while(умова === true){
//     тіло циклу
// }

// let a = 1
// while(a <= 5){
//     console.log(a);
//     a++
// }

// ///////////////////////////////////////////////////////////////////////////////////
// !Вічний цикл
// let a = 1
// while(true){
//     console.log(a);
//     a++
// }

// ! break - зупиняє цикл

// while(true){
//     let b = 0
//     b++
//     console.log(b);
// }

// //////////////////////////////////////////////////////////////////////

// const factiorial = (n) => {
//     if(n < 0){
//         return 'Факторіал визначається не для відємних чисел!'
//     }

//     let result = 1
//     while(n > 0){
//         result *= n
//         n--
//     }
//     return result
// }

// const number = 5
// const result = factiorial(number)
// console.log('Факторіал числа ${number} дорівнює: ${result}');


// ! do while (спочатку виконується а потім перевіряється)

// let y = 5

// do{
//     console.log(y);
//     y++
// }while(y < 5)

// let x = 5
// while(x < 5){
//     console.log(x < 5);
//     x++ 
// }

// ! do while -  спочатку виконує а потім перевіряє, а звичайний while перевіряє а потім виконує

// ............................................................................
// ? ще 2 види цикла for

// ! for of зручно працювати з масивом
// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferarri']
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let auto of arr){
//     console.log('auto:' + auto);
// }

// ! for in зручно з обєктами

// const person = {
//     name: 'Jon',
//     age: 30,
//     isMerried: true,
//     auto: 'VW'
// }

// console.log(person.age);
// console.log(person.name);

// for(let key in person){
//     console.log('${key}: ${person[key]}');
// }

// /////////////////////////////////////////////////////////////////////////////

// const multiplicationTable = () => {
//     const number = +prompt('Enter number')
// if(!isNaN(number)){
//     for (let i = 1; i <= 10; i++) {
//         console.log('${number} * ${i} = ${i * number}');   
//     }
    
//     }else{
//         alert('Enter number, not a symbols')
//         multiplicationTable()
//     }
// }

// multiplicationTable()

// /////////////////////////////////////////////////////////////////////////////

// * гра вгадай число

// console.log(Math.random());
// console.log(Math.random() * 100);
// console.log(Math.floor(Math.random() * 100) + 1);

// const nmverGame = () => {
//     const randomNumver = Math.floor(Math.random() * 100) + 1

//     let guess
//     let attempts = 0

//     while(true){
//         guess = +prompt('Guess the number between 1 and 100:')

//         if(isNaN(guess)){
//             alert('Please enter a valid number')
//             continue
//         }

//         attempts++

//         if(guess === randomNumver){ 
//             alert(`Congratulations! You Guessed the numver ${randomNumver} correctly in ${attempts} attempts.`)
//             break
//         }else if(guess > randomNumver){
//             alert('Too high! Try again.')
//         }else{
//             alert('Too low. Try again')
//         }

//     }
// }

// nmverGame()