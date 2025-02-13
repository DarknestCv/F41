let a: boolean; # вказуємо тип даних

function f(x: number, y: number): void { # тип даних завмочвчки "any", а так вказуємо як завжди 
    return x + y;
}

#тип 'void' - вказує що нічого не повертає


let arr: number[] = [] # означає що це масив чисел і так вони створюються
let arr2: (number | null)[] = [1,2, null] # тут може бути і числа і null
let arr3: Array<number> = [1,2, null] # робить одне і те саме з попереднім

let arr4: [number, string, null] = [1, 'ert', null] # отак це називається 'КОРТЕЖ'


const arr: readonly number[] = [1,2,3] # readonly - це ми кажемо що цей масив тільки на считання ! не змінювати!

let a: number | boolean # такий спосіб називається UNION 

a = 10
a = true
a = null # це вже не закинеться

arr.reduce((acc, el) =>el)