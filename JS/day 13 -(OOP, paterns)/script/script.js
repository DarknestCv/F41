// ! DZZZZZZZZ
const order = []

function orders(type, size, price) {
    this.type = type;
    this.size = size;
    this.price = price;
}

while(confirm("add to order?")) {
    const type = prompt("pizza/cola?");
    const size = prompt("s/m?");
    const price = Number(prompt("enter price"));

    // order.push({type: type, size: size, price: price})
    orders.push(new order(type, size, price))
}


// ! Leassons

let a = {
    name: "JO",
    age: 1,
} // new Object()

Object.keys(a) // ["name", "age"]
Object.values(a) // ["Jo", 1]
Object.entries(a) // [["name", "Jo"],["age", 1]]

"name" in a

a.t = 123 // create new case
delete a.age // delete case

for (let key in a) {
} // ? використовуєтсья для того щоб пробігтися бо масиву або обєкту і глянути які та є ключі


// ! Patterns - проектування 

// * Паторне проектування це повторення якоЇсь дії результат якої одинаковий 

function apple(type, price) {
    this.type = type;
    this.price = price;
}
new apple = ("golden", price)

// fabric = pattorn для створення обэктів
function applesFactory(){
    // season
    // price
    // new Apple
    // return apple
}

let apple = applesFactory()

// ! Приклад
// const fridge = {
//   bread: 3,
//   cheese: 1,
//   sausage: 2,
// };

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// fridge.push({ name: 'tomato', inners: getRandomInt(2, 5) });
// fridge.push({ name: 'creamcheese', inners: getRandomInt(2, 5) });
// fridge.push({ name: 'cucumber', inners: getRandomInt(2, 5) });

//   function Sandwich(inners) {
//     this.inners = inners;
//   }
  
//   let addinnersID

//   function SandwichFactory(inners = ["bread", "cheese"]) {
//     for (let i = 0; i < inners.length; i += 1) {
//       fridge[inners[i]] -= 1;
     
//       if (fridge[inners[i]] === 1) {
//         console.warn(`need to order ${inners[i]}`);
//         setTimeout(addinners, 5000, inners[i], 5)
//       } else if (fridge[inners[i]] === 0) {
//         console.error(`out of ${inners[i]}`);
//         clearTimeout(addinnersID)
//         setTimeout(addiner, 1000, inners[i], 3)
//       }
//       for(let i = 0; i < inners.length; i += 1){
//         if(fridge[inners[i]] === 0){
//           console.error("вибачте, цієї начинки поки немає в наявності")
//           return
//        } 
//       }
//     }
//   }
//     return new Sandwich(inners);
    
//     const obj = SandwichFactory(["bread", "cheese", "sausage", "tomato", "creamcheese", "cucumber"]);
    
//     function addinners(innerName){
//       fridge[innerName] += 5
//     }
//     function addiner(innerName) {
//     fridge[innerName] += 3
//     }
    

    // ! Teacher version
    const fridge = {
      bread: rnd(2, 5),
      cheese: rnd(2, 5),
      sausage: rnd(2, 5),
    };
     
    const addInnerTimers = {
      bread: null,
      cheese: null,
      sausage: null,
    }
     
    function rnd(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
     
    function addInner(innerName, num) {
      fridge[innerName] += num;
    }
     
    function Sandwich(inners) {
      this.inners = inners;
    }
     
     
    function SandwichFactory(inners = ["bread", "cheese"]) {
      for (let i = 0; i < inners.length; i += 1) {
        if (fridge[inners[i]] === 0) {
          console.error(`sorry, we run are out of ${fridge[inners[i]]}`)
          return
        }
      }
     
      for (let i = 0; i < inners.length; i += 1) {
        fridge[inners[i]] -= 1;
       
        if (fridge[inners[i]] === 1) {
          console.warn(`need to order ${inners[i]}`);
          addInnerTimers[inners[i]] = setTimeout(addInner, 5000, inners[i], 5)
        } else if (fridge[inners[i]] === 0) {
          console.error(`out of ${inners[i]}`);
          clearTimeout(addInnerTimers[inners[i]]);
          setTimeout(addInner, 1000, inners[i], 3)
        }
      }
     
      return new Sandwich(inners);
    }
