// ! Homework 6

// const arrayNumbers =  []

// for (let i = 0; i < 50; i++) {
//     arrayNumbers.push(Math.floor(Math.random() * 1000))
// }
// console.log(arrayNumbers);

// let minNum = arrayNumbers[0]

// for (let i = 1; i < arrayNumbers.length; i++) {
//     if(arrayNumbers[i] < minNum){
//         minNum = arrayNumbers[i]
//     }
// }

// console.log('Min number array:' + minNum);

// ! МЕТОДИ ПОШУКУ В МАСИВІ

// const cars = ['BMW','Audi','MB','Skoda','Porshe']
// console.log(cars);

// ? 1 indexOf() вертає індекс першого знайденого елемента

// console.log(cars.indexOf('MB'));
// console.log(cars.indexOf('MB',  3));


// ? 2 includes() повертає true або false 

// console.log(cars.includes('MB')); //true
// console.log(cars.includes('test')); //false

// ? 3 find() , findindex() , filter()

// const cars = [
//     {name: 'MB', cost: 111000},
//     {name: 'Bmw', cost: 341000},
//     {name: 'Audi', cost: 9511000},
//     {name: 'Ford', cost: 223000},
// ]
// console.log(cars);


// ! find() вертає знайдений обєкт

// console.log(cars.find((item)=>{return item.cost === 223000}));
// console.log(cars.find((item)=>{return item.cost === 245233000}));
// console.log(cars.find((item, index, array)=>{return item.cost === 245233000}));

// ! findIndex() - вертаэ ындекс першого знайденого елемента

// console.log(cars.findIndex((cars)=>{return car.cost === 341000})); // 2
// console.log(cars.findIndex((cars)=>{return car.cost === 1000})); // -1

// ! filter() - вертаэ всы обэкти якы выдповыдають певный умові

// console.log(cars.find((item)=>{return item.cost > 111000})); // вертаэ 1 машину
// console.log(cars.filter((item)=>{return item.cost < 9511000})); // вертаэ 3 машину

// ! Сортування масива

// ? sort() -  сортуэ елементи в масиві

//* string
// const cars = ['BMW','Audi','MB','Skoda','Porshe']
// console.log(cars);

// const sortuu = ['d','a,','b','c','s','n','y','k']

// console.log(sortuu.sort());
// console.log(cars.sort());

//* number

// const num = [95,8,72,6,5,44,3,2,11]

// console.log(num.sort());
// console.log(num.sort(a,b)=>{return b - a});
// console.log(num.sort(a,b)=>{return a - b});

// * revers()

// console.log(cars.reverse());

// ! Модифікування масивів

// const cars = ['BMW','Audi','MB','Skoda','Porshe']
// console.log(cars);

// * map() - вертає новий модифікований масив

// console.log(cars.map((car)=>{return car.toUpperCase()}));
// console.log(cars.map(car=>car.toLowerCase()));

// ? split() - розділяє строку по певним символам в масив

const numStr = '1,2,34,54,564,56,76,67,54,43,34,56,67,687'

const numArr = numStr.split(',')
console.log(numArr);

// ? join - робить з масива строку

// const cars = ['BMW','Audi','MB','Skoda','Porshe']
// console.log(cars);

// console.log(cars.join());
// console.log(cars.join('+-+'));
// console.log(cars.join('           '));


// ! перевірка на масив Array.isArray

// const array = []
// const object = {}

// console.log(typeof array);
// console.log(typeof object);

// console.log(Array.isArray(array));
// console.log(Array.isArray(object));

// ! метод циклу forEach() або як перебрати масив :void

// const cars = ['BMW','Audi','MB','Skoda','Porshe']
// console.log(cars);

// // 1
// for (const car of cars) {
//     console.log(car);
// }

// // 2
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// // 3 forEach()

// cars.forEach((item, index, array)=>{
//     console.log('${item} => ${index} => ${array}');
// })

// ! reduce() / reduceright()

// const num = [1,2,3,4,5,6,556,568,234,34]//430

// const reduce = num.reduce((previorsValue, item, index, array) => {
//     return previorsValue + item
// }, 0)

// console.log(reduce);
