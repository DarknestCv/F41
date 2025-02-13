// ITERATORS
// ! реалізуючий метод next()

let namesArr = ['jo', 'anna', 'samanta']

function namesGen(){
    for(let i = 0; i < arr.length; i += 1){
        yield namesArr[i]
    }
}

// ! yield метод для виклику ітератора
// ! Ітератор обєкт для перебору значень

const namesiterator = namesGen()


// ! BigInt - літерали в кінці мають 'n'\

// * Типи даних - number string bool null undefined bigint symbol object