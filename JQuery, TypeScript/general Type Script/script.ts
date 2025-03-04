// @ts-check //!

// @ts-ignore //! настпуний вираз після нього буде проігнорований


// typescript

// ! npm list - пакети текущого проекту
// ! npm list -g - пакети які встановлені на системі
// ! npm view package-name - подивитись інфу про пакет 
// ! npm view <package-name> version- подивитись інфу про пакету з версіями (dev - це версія в розробці) (rs - це кандидат на реліз, останні доробки перед релізом)


let a: number = 19

// ! --outdir -  відповідає за те куди він буде записувати скомпельовані файли

// ? bundle - запакований проект(підготований до деплоя)
// ? tsc --init - (створити файл конфігуратор ТС)
// ? strict -  строгий режим завжди бажано додавати

// union - обєднання (|)
let c: number | string = 39

let arr: number[]
let arr2: Array<number>
let arr3: (number | string)[]

// corteg
let arr4: [number, boolean] = []

// так можна робити свій тип даних
type Id = [number, boolean]

let arr6: Id

// void - пустота (абсолюнто нічого - немає ретурн ми не повертаємо значення)
const f =(x:number, y:number = 10):number =>{
    return x + y
}

let res: string = f(1,2)


// ! any - вимикає перевірку в виразах де він використовується
let x: any = '4'
let z: number = x

z = 10 / x

// ! unknown - теж будь який тип але в ньому у є перевірка(аналог any, але він безпечніший)
let m: unknown = "4"
let v: number = m
v = 10 / m

// node -> ts



