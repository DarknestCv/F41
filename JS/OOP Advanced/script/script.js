// ! В js всі типи даних важаються примітивами крім обєктів, обєкти це /object and array/
// ! В js OOP - прототипне - на прототипах
// ! Прототип - це окремий обєкт який тримає суспільні методи для певного типа даних

// let arr = [] // ? Дивитись в консолі

// const pizzaProto = { // прототип, для кожної наприклад нової піци ці значення будуть юзатись
//     base: "Furnichi",
//     discount(){
//         this.price /= 2;
//     }
// }

// function Pizza(price, type) {  // конструктор
//     this.price = price;
//     this.type = type;
// }

// Pizza.prototype = pizzaProto; // присвоєння прототипа конструктору

// let pizza = new Pizza(10, "dodo") // створення нової піци

// class Pizza{
//     constructor(price, type) {
//         this.price = price;
//         this.type = type;
//     }

//     // ! Все що поза конструктором в класах переноситься в прототипа і використовується для всіх

//     base = 'Furnichi' // Для всіх

//     discount(){ // Додавання прототтипа в класах
//         this.price /= 2;
//     }
// }

// let pizza = new Pizza(10, 'dodo')
// pizza.discount()

// class Pizza { // Базовий клас для всіх піц, що є в ньому те буде і у всіх піцах якщо його підключити

//     static amount = 0;
//     static printAmount(){
//         console.log(Pizza.amount)
//     }
//     // ! static - робить властивість саме для класу, воно являється статичним


//     constructor(){
//         this.fillings = [];
//         Pizza.amount += 1;
//     }

//     cook(){}
// }

// class Cheese4 extends Pizza{
//     constructor(price, type) {
//         super();
//         this.price = price;
//         this.type = type;
//     }
// }

// class Havai extends Pizza {
//     constructor(){
//         this.best = true;
//     }
// }

// ! Extends -  використовується щоб вспадкувати якийсь інший клас, так сказати батьківський, а в конструкторі обовязково потрібно викликати "super() означає  виклик батьківського конструктора"

// class Car {
//     constructor(engnine, model){
//         this.engine = engine;
//         this.model = model;
//     }
// }

// new Car({}, "SuperDuperPuper")

// class ElectroCar extends Car {
//     constructor(engine, model){
//         super(engine, model)
//         this.ok = true;
//         setTimeout(() => {
//             this.break();
//         }, 2000);
//     }
//     break(){
//         if(Math.random() >= 0.5){
//             this.ok = false
//             console.error("the car is broken!");
//         }
//     }
// }

// new ElectroCar({}, "Kolya")

// ! practick work
// ! 1
// class giftBox{
//     static amountBox = 1;
//     constructor(size = 1){
//         this.size = size;
//         this.price = size * 1.7;
//         giftBox.amountBox += 1
//         console.log('Кількість свторених коробок на момент виклику' + ' ' + giftBox.amountBox);
//         console.log('Ціна коробки становить' + ' ' + this.price + ' ' + '$');
        
//     }
// }

// let prom = prompt('Write a size box')

// new giftBox(prom)

// ! 2
class Antdefault {
    constructor () {
        console.log('Ant worked');
    }
}

class Ant extends Antdefault{
    constructor(type, number){
        super()
        this.type = type;
        this.number = number;
    }
}

new Ant('holdi', 1)

// ! 3
// class antFriend{
//     constructor(type,num){
//         this.type = friend;
//         this.num = 0;
//         this.num += 1
//     }
// }

// class antwithFriend extends antFriend{
//     static friend = antFriend    
//     constructor(){
//         new antFriend()

//     }
// }
