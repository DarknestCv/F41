// let cat = {
//     name: muxtar, // без функції це властивість, цілий рядок називається 'поле'
//     age: 1,
//     meo(){ // а це вже метод
//         console.log('Meo');
//     }
// }

// cat.age // виведеться 1
// cat.color = 'red' // добавиться властивість колор якщо нічого не буде в ній тто буде undefined
// cat.meo()

// let prop = prompt() // Вводимо властивість яку хочемо зчитати

// cat[prop] // Синтаксис для того щоб користувач сам вибирав що він хоче зчитати

// ! Mini practick work
// let cats = {
//     walkToDeathAmount: 3,
//     walkCount:0,
//     canEat: ["grass", "fish", "bread"],
//     isAlive: true,
//     walk(){
//         if(this.walkCount >= this.walkToDeathAmount || !this.isAlive){
//             this.isAlive = false;
//             console.log('Cat dead');
//             return
//         }
//         this.walkCount += 1;
//         console.log('walk');
//     },
//     eat(foodName){
//         if(!this.isAlive){
//             console.log('Cat dead');
//             return
//         }
//         if(this.canEat.includes(foodName)){
//             this.walkCount =0
//             console.log('eat');
//         }else{
//             this.isAlive = false;
//             console.log('Cat dead');
            
//         }
//     }
// }

// cats.walk() //
// cats.walk()
// cats.eat('fish')
// cats.walk() 
// cats.eat('break') // walkCount = 3 тому мертвий
// cats.walk() 


// let meo = cat.meo.bind(cat)
// // ! Bind - метод функції щоб привязувати контекст функції до отриманих нами обєктів, короче говоря використовуємо його щоб в такому як Timeout не терялось значения this, використовуємо коли хочемо передати ффункцію кудись
// //this -> cat
// setTimeout(cat.meo, 1000, "grass")


// const f = () =>{
//     this; // ! (Стрілкова функція) Завжди береттся з зовнішнього середовища, свого в ниих немає
// }

function Note(title,text){
    this.tittle = tittle;
    this.text = text;
}

let tittle;
let text;
let note;
let noteArr = []; //[{title: "...", text: "..."}, {title: "....", text: "...."}]

while(confirm("add new note?")){
    tittle = prompt("Enter note title")
    text = prompt("Enter note text")

    note = new Note(tittle,text)
    noteArr.push(note)
}

console.table(noteArr)

// let note = new Note("Title", "123") //{tittle: "title", text: "123"}
// let note2 = new Note("Title", "food") //{tittle: "title", text: "food"}

// ! Конструктор - функція  яка створює обєкти і щоб вона спрацювала як конструктор викликати з оператором "new"

