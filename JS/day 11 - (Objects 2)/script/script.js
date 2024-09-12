// ! методи і копіювання обєктів

// const car = {
//     name: 'MB',
//     model: 'gla',
//     maxspeed: 340
// }

// const car2 = car
// console.log(car);
// console.log(car2);

// car2.maxspeed = 200
// console.log(car);

// ! 1 Object.assign()

// const car 2 = Object.assign({}, car)
// console.log(car);
// console.log(car2);

// car2.maxspeed = 200
// console.log(car);
// console.log(car2);

// ! 2 ...{}

// const car2 = {...car}

// console.log([1,2,3]);
// console.log(...[1,2,3]);

// console.log(car);
// console.log(...car);

// ! мінуси цих 2 варіантів

// const car = {
//     name: 'MB',
//     model: 'gla',
//     maxSpeed: {
//         km: 400,
//         ml: 250
//     },
//     engine: [1,2,3]
// }

// ! 1 Object.assign() -------

// const car2 = Object.assign({}, car)
// console.log(car);
// console.log(car2);

// car2.model = 'w211'
// car.maxSpeed.km
// car2.maxSpeed.km = 200
// car2.engine.push('444')
// console.log(car);
// console.log(car2);

// ! 2 ...{} ------------

// const car2 = {...car}

// car2.model = 'w211'

// car2.maxSpeed.km = 200
// car2.engine.push('444')

// console.log(car);
// console.log(car2);

// ! глибоке копіювання

// const car = {
//     name: 'MB',
//     model: 'gla',
//     maxSpeed: {
//         km: 400,
//         ml: 250
//     },
//     engine: [1,2,3],
//     fn: function (params) {console.log('This is function');}
//     productionYear: new Date()
// }

// const newcarJson = JSON.stringify(car) //string
// console.log(newcarJson);
// console.log(typeof newcarJson);

// const newCar = JSON.parse(newcarJson)//{}
// console.log(newCar);

// * скорочений запис
// const newCar = JSON.parse(JSON.stringify(car))

// newCar.maxSpeed.km = 500
// newCar.engine.push('444')
// console.log(car);
// console.log(newCar);

// ! обмеження JSON.parse(JSON.stringify(car))

// car.fn()

// newCar.fn()//error
// console.log(newCar);
// console.log(car.productionYear.getTime());

// ! structuredColone()

// const car = {
//     name: 'MB',
//     model: 'gla',
//     maxSpeed: {
//         km: 400,
//         ml: 250
//     },
//     engine: [1,2,3],
//     // fn: function (params) {}
//     productionYear: new Date()
// }

// const newCar = structuredClone(car)
// newCar.maxSpeed.km = 1000
// console.log(newCar);
// console.log(car);


// console.log(car.productionYear.getTime());
// console.log(newCar.productionYear.getTime());


// ! МЕТОДИ Object()

// ! Object.keys() => масив ключів обєкта [key,key,key]
// const car = {
//     name: 'MB',
//     model: 'gla',
//     maxSpeed: 250
// }    

// console.log(car);


// const objKey = Object.keys(car)
// console.log(objKey);

// ! Object.values() => маисв значень обєкта [val,val,val]

// const objValues = Object.values(car)
// console.log(objValues);

// ! Object.enterise() => масив масивів з ключами і значеннями

// const objEnterise = Object.entries(car)
// console.log(objEnterise);
    
// ! Object.definePropetry() => можемо створити новий ключ та передати йому властивість

// const objProperty = Object.defineProperty(car, 'clearance',{
//     value: 35,
//     enumerable: true
// })
// console.log(objProperty);
// console.log(objProperty.clearance);


// * PRACTICK WORK
// ! 1
const person = {
    name: 'Ilyha',
    age: 103,
    city: 'NewYork',
    printInfo: function(params) {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}, Місто: ${this.city}`);
    }
}

person.printInfo()


// ! 2

const calculator = {
    add: function (a,b) {
        return a + b
    },
    subtract: function (a,b) {
        return a - b
    },
    multiply: function (a,b) {
        return a * b 
    },
    divide: function (a,b) {
        if(a === 0 || b === 0){
            return 'Помилка, ділення на нуль неможливе'
        }else{
            return a / b
        }
    }
}

console.log('Додавання:' + ' ' + calculator.add(2,10), 'Віднімання:' + ' ' + calculator.subtract(9,220), 'Множення:' + ' ' + calculator.multiply(92,100),'Ділення на нуль:' + ' ' + calculator.divide(0,120),'Звичайне ділення:' + ' ' + calculator.divide(10,500));

// ! 3
const library = {
    books: [
        {
            title: "1984",
            author: "Джордж Орвелл",
            year: 1949
        },
        {
            title: "Соляріс",
            author: "Станіслав Лем",
            year: 1961
        },
        {
            title: "Майстер і Маргарита",
            author: "Михайло Булгаков",
            year: 1967
        }
    ],
    addBook: function addBook(title, author, year) {
        this.books.push({title, author, year})
    },
    getBookTitles: function() {
        return this.books.map(book => book.title);
    },
}

library.addBook('Великий кабачок','Ілюха кабачковський', 5000)

const busigarna = library.getBookTitles()
console.log('Книги в буцигарні:', busigarna);

// ! 4
const shoppingCart = {
    items: [
        {
            name: "Яблука",
            quantity: 3
        },
        {
            name: "Банани",
            quantity: 2
        },
        {
            name: "Апельсини",
            quantity: 5
        }
    ],
    addItem: function additem(name, quantity) {
        this.items.push({name, quantity})
    },
    removeItem: function(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1); // Видаляємо товар за індексом
        } else {
            console.log("Неправильний індекс");
        }
    },
    totalPrice: function totalPrice(params) {
        
    }
};

shoppingCart.removeItem(10);

items.addItem('Svini', 5000)


