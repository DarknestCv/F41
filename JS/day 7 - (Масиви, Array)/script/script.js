// // ! МАСИВИ, Array []

// // ! Створення масива

// const array = new Array()

// const array2 = []

// // ! Синтаксис і наповнення масива

// const arrNumbers = [1, 2, 3]
// console.log(arrNumbers);

// const arrType = [
//     1,
//     'string',
//     true,
//     undefined,
//     null,
//     function(){
//         return 1
//     },
//     [1,2,3],
//     {name: 'Rock'}
// ]

// // ! як отримати дані з масива

// console.log(arrType[0]);
// console.log(arrType[1]);
// console.log(arrType[2]);
// console.log(arrType[4]);

// console.log(arrType[5]()); // виклик функц
// console.log(arrType[6][1]);
// console.log(arrType[7].name);


// // ! інвексація

// const matrix = [
//     [1,2,3]
//     [4,5,6]
//     [7,8,9]
// ]

// console.log(matrix[2][1]);

// // ! довжина масива

// // console.log(matrix.length);

// // ! копіювання масивів

// const arr = [1,2,3]
// console.log(arr);

// const copyArr = arr
// copyArr.length = 2

// console.log(arr);
// console.log(copyArr);

// const test = []
// const obj = {
//     name: 'Kon'
// }

// // ! змінювати значення масива

// const arr = [1,2,3]
// console.log(arr);

// arr[0] = 99
// console.log(arr);

// arr[arr.length - 1] += 11 // дізнатись та присвоїьт нове значення для останнього елменту
// console.log(arr);

// // ! створення нових елементів в масиві

// arr[3] = 4
// console.log(arr);

// arr[arr.length] = 5
// console.log(arr);

// // ////////////////////////////////////////////////////////////////////////////////////////////////////
// // ? МЕТОДИ МАСИВІВ
// // * Додавання елементів в масив
// const cars =  ['Bmw', 'Audi', 'MB']
// console.log(cars);

// // ! додавання елементе в КІНЕЦЬ масива push()
// cars.push('Skoda', 'Porshe')
// console.log(cars);

// // ! додавання елемента в ПОЧАТОК масива unshift()
// cars.unshift('Wolkswagen', 'Renault')
// console.log(cars);

// // * Видалення Елементів в МАСИВІ
// // ! Видалення елемента з КІНЦЯ масива pop()
// cars.pop()
// console.log(cars);

// // ! видалееея елемента з ПОЧАТКУ масиву shift()
// cars.shift()
// console.log(cars);

// //////////////////////////////////////////////////////////////////////////////

// // const obj = {
// //     one: function(){return 1}
// // }
// //  obj.one()
 
// //  window.alert()



// //  console.log(arr.length);
 

// !practick work
// * 1
numbers = []
numbers.push(1,2,3)
console.log(numbers);

// * 2
fruits = ['Apple', 'Banana']
fruits.unshift('Orange')
console.log(fruits);

// * 3
colors = ['red','Blue','Green']
colors.pop()
console.log(colors);

// * 4
numberss = [1,2,3,4,5]
numberss.reverse()
alert(numberss)

// * 5
let numberssas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




