// * заміна видалення додавання -> в певний індекс 

// const cars = ['BMW', 'AUDI', 'MB', 'Skoda', 'Porshe']
// console.log(cars);
// // заміна
// cars[2] = 1
// console.log(cars);
// // видалення
// delete cars[2] //не рекомендується використовувати delete -> проблема з empty index
// console.log(cars);
// //додавання
// cars[cars.length] = 'the end'
// console.log(cars);


// ! Метод масива splice()

// const cars = ['BMW', 'AUDI', 'MB', 'Skoda', 'Porshe']
// console.log(cars);

// ? ВИДАЛЕННЯ елементів з масива 
// cars.splice(2, 3) //(start, index к-ть елементів після старта)
// console.log(cars);

// const deleteElements = cars.splice(2, 2) //return-ить елементи які він видалив
// console.log(deleteElements);

// ? ЗАМІНА елемента в масиві під певним індексом
// const test = ['f1', 'Saah', 'Ford', 'Bankil']

// cars.splice(2, 1, 'Renault', 'Seat')
// cars.splice(1, 2, ...test)

// console.log(cars);

// ? ДОДАВАННЯ елементів в масив
// const cars = ['BMW', 'AUDI', 'MB', 'Skoda', 'Porshe']
// console.log(cars);


// cars.splice(3, 0, 'Saab', 'Ford', 'Renault')
// console.log(cars);

// ? Додавання ЗАМІНА ВИДАЛЕННЯ з кінця
// cars.splice(-2, 1)
// console.log('revrse', cars);

// console.log(...cars); //оператор 'spret', типу просто знімає дужки 

// ! Метод масива slice / копіювання масива
// const cars = ['BMW', 'AUDI', 'MB', 'Skoda', 'Porshe']
// console.log(cars);

// const newCopyArray = cars.slice(0,3)
// console.log(newCopyArray);

// з кінця
// const newCopyArray = cars.slice(-3,-1)
// console.log(newCopyArray);

// Скопіюваювати весь масив
// const newCopyAllArray = cars.slice(0, cars.length)
// console.log(newCopyAllArray);

// const newCopyArray = cars.slice()
// console.log(newCopyAllArray);

// ////////////////////////////////////////////
// cars[1] = 'TEST999'
// console.log(cars);
// console.log(newCopyArray);

// ! Метод масива concat() копіювати масива з додавання нових елементів в скопіюваний масив
// const cars = ['BMW', 'AUDI', 'MB', 'Skoda', 'Porshe']
// console.log(cars);

// ! 1 варіант
// const copyArrayConcat = cars.concat('Ford', 'Saab')
// console.log(copyArrayConcat);

// ! 2 варіант
// const arr = ['Renault', 'Saab', 'Ferrari']
// const arr2 = ['Sitroen', 'Fiat', 'Subaru']
// const copyArrayConcat = cars.concat(arr, arr2)
// console.log(copyArrayConcat);

// ! Practick work

// ! 1
// function arrayAdded(myArray) {
//     myArray.splice(myArray.length, 0, 4,5,6,7,8,9);
//     return myArray;
// }
// let myArray = [1, 2, 3];
// let updatear = arrayAdded(myArray);
// console.log(updatear);

// ! 2
// function niuceJob(array) {
//     array.splice(0, 0, 5,6);
//     return array;
// }

// let myArray = [2, 3, 4];

// let updatedArray = niuceJob(myArray);
// console.log(updatedArray);

