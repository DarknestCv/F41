// ? OBJECT

// ! СТВОРИТИ ОБЄКТ

const obj1 = new Object()
const obj2 = {}

console.log(obj1);
console.log(obj2);

// ! синтаксис object

// * const objName = {
// *   key: value,
// *   email: 'any@gmail.com',
// *}

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}

// ! отримати дані з обєкта

console.log(car);
console.log(car.name + ' ' + car.model);
console.log(car['age']);// 2 []
/////////////////////////////

const objKey = 'maxSpeed'

console.log(car.objKey); //undefined
console.log(car[objKey]); // 330

// ! що ми можемо вложувати в object

const obj = {
    str: 'string',
    number: 999,
    boolean: true,
    null: null,
    und: undefined,
    arr: [1,2,3],
    obj: {name: 'test'},
    fn: function(){console.log('Ok')} // метод
}
console.log(obj);

console.log(obj.arr[1]);
console.log(obj.obj.name);

obj.fn()

// ? модифікування обєкта
// ! 1 ДОДАВАННЯ НОВИХ ВЛАСТИВОСТЕЙ 

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}
console.log(car);

// ! ВЛАСТИВІСТЬ ++
car.kg = 2100
console.log(car);


// ! obj 
car.engine = {
    name: 'm57',
    type: 'disel',
    power: 350
}
console.log(car);

// ! 2 ВИДАЛЕННЯ ВЛАСТИВОСТЕЙ

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}
console.log(car);

delete car.maxSpeed
console.log(car);

// ! Редагування ВЛАСТИВОСТЕЙ

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}
console.log(car);

car.age = 3
console.log(car);

// ? КОПІЮВАННЯ ОБЄКТІВ

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}
console.log(car);

// ! як правильно копіювати або метод assugn()


const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}
console.log(car);

const superCar = Object.assign({}, car)
superCar.age = 5
console.log(superCar);
console.log(car);

////////////////////////////
// 1 може обєднати багато обєктів в один
// 2 він робить справжню копію обєкта

const target = {a: 1, b: 2}
const source = {b: 4, c: 5}
const source2 = {d: 4, e: 5}

const returnedTarget = Object.assign(target, source, source2, {name:test})
console.log(returnedTarget);

// ! перевірка на існування певного ключа(властивості)

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
}
console.log(car);

console.log('age' in car); //true
console.log('engine' in car); //false

if('age' in car){
    console.log(car.age);
}

// ! перебрати обєкт

for (const key in object) {

}

// ! методи обєктів

const car = {
    name: 'BMW',
    model: 'm5',
    age: 2,
    maxSpeed: 330,
    showInfo: function(){
        console.log('${this.name} ${this.model} ${this.maxSpeed}');
    }
}
car.showInfo()

// ! Practic work

// ! 1
const obj = {
    name: 'Kaban',
    surname: 'Kabachok',
    age: 103
};
document.getElementById("output").innerText = JSON.stringify(obj, null, 2);

// ! 2
const book = {
    name: 'BigBimba',
    avtors: 'IlyhaKaban',
    agerelease: 2035
}
console.log(Object.keys(book).length);

// ! 3
const student1 = {
    name: 'Vitalik',
    surname: 'Kabachkovskiy',
    age: 893
}
const studentball = {
    middleball: 9
}
const allobj = Object.assign(student1, studentball)
console.log(allobj);

// ! 4 
const mas = [
    {name: 'Vitalik',age: 89},
    {name: 'Benik',age: 5},
    {name: 'Ilyha',age: 1093},
    {name: 'Nastya',age: 3}
]

const student21 = mas.filter(koni => koni.age > 21)
console.log(student21);

// ! 5
const mas2 = [
    {name: 'cats', price: 200},
    {name: 'koni', price: 5000},
    {name: 'people', price: 50},
    {name: 'tapki', price: 3}
]
mas2.sort((a,b) => a.price - b.price)

console.log(mas2);
