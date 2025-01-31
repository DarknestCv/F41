//  window document
//* document.DOMContentLoaded() - коли сторінка завантажена
//* load - ресурси завантаження(img, css, scripts, font)
//* resize - дізнатись що розмір  вюпорта змінився

window.addEventListener('DOMContentLoaded', () => console.log('DonCobtebtLoaded'))
window.addEventListener('load', () => console.log('load'))
window.addEventListener('resize', () => console.log('resize'))

// ! Декструктуризація

function f({target}) { // ? можна діставати тільки те що потрібно
    target;
}


f({q: 10,x: 5,y: 15,z: -5}) // ? не вліяє послідовність і так краще крч

// --------------------------------------------------------------------------------

let obj = {
    name: 'Jo',
    pet: 'Parrot',
}

// let name = obj.name
// let pet = obj.pet

let {name, pet} = obj // ? простіший синтаксис але так буде помилка якщо зміна вже є працює якщо тільки змінна свтор в цей момент
({name, pet} = obj) //? якщо змінні вже існують то отак робити


{//? област видимості можна створити дужками
    let a;
}

// * масиви

let arr =[0,1,3,6]

let ([q,w, ,t]) = arr //? якшо хочемо пропустити щось ставимо порожню кому

// ? якщо змінні вже існують круглі дужки не потрібні


function x () {
    return[1,5] // ! якщо потрібно повернути пару відповідей
}

let [x,y] = x() // ? в масивах привязка по індексу

// ---------------------------------------------------------------------

// * структури даних (масив[тримає дані по індексу], обєкт{тримає дані по ключам})

// * структура Set(1,7,5,3,2,10) - набір даних, їсть менше памяті, автоматично фільтрує дублікати

let s  = new Set() // ? виклик конструктора

s.add(1) //? додати туди щось
s.add(2)
s.add(2) //? а це не додасть
// ! .add чейниться і можна писати в родок

s.clear() //? очистити
s.delete(1) //? видалити щось 
s.has(1) //? дізнатись чи є там таке значення
s.size//? дізнатись що там взагалі є
// ! зчитувати не можна тому що нащо це якщо ми і так знаємо це

s.forEach((val) => { //! forEach щоб пройтися(це для всього)

})


// * структура Map - тут вже ключ -> значення

let m = new Map()
// ! методи ті самі тільки ще є метод 'get', і 'set'
// ! в Map що завгодно може бути ключем тобто будь який тип даних тобто немає назви як у object там тільки ключі і все


// * setter/getter - це

// syntax

//! abstract
// publick | private //! модифікатори доступа
class Account {
// ! якщо ставимо # тоді поле приватне
    #money
    constructor(){
        // private
        this.#money = 0;
    }

    withdraw(amount){
        if(this.money >= amount){
            this.money -= amount;
        }else{
            console.log('Ти бомж!')
        }
    }

    getMoney(){ //! getter - щоб безпечно дістати
        return this.money
    }

    setMoney(val){ //! безпечно записати дані
        //
    }


    // ? спеціальний синтаксис

    get money(){
        return this.#money
    }

    set money(amount){
        this.#money = amount
        //
        //
        //
        //! можна також писати додаткові дії
    }
}

Account.withdraw(905)
Account.getMoney()
Account.setMoney(2356)


new Account().money // спрацює як get
new Account().money = 12 // спрацює як set

tag.textContent = '123' // set
let text = tag.textContent // get

class Logs{

    print(msg){
        console.log(msg)
        return this
    }

}

let loger = new Logs()

loger.print('123').print('123')


