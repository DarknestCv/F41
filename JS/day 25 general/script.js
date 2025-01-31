// ! Promise

const f1 = () => console.log('f1')
const f2 = () => console.log('f2')
const f3 = () => console.log('f3')

const promise = new Promise((resolve, reject) => {
    console.log('promise start')
    setTimeout(() => {f1(); resolve();}, 3000)
    resolve() // end - без помилока 
    reject() // end - з помилками
}) //! конструктор промис

const createTimer = (time) =>{
    return new Promise((resolve) =>{
        setTimeout(() => (Math.random()), time)
    })
}

createTimer(1500)
.then(console.log) //

promise
.then(f2)
.catch((x,y,z) => {})
.then()
.then()

class Color {
    bright() {


        return this
    }
}

new Color().bright().bright()

const main = async () => { //! async - обовязково шоб працював await
    try{
        let result = await createTimer(2000) // ! після того як буде евейт тру то піде дальше код
    } catch(err){
        ///
    }
    console.log(result)
    f2()
    f3()
    //
    //
    //
}

main()
.then(f2) // 
f2()

try{ //! спробувати 
    throw new Error('boom')
    let res = Math(10,20)
    console.log(res)
    console.log('try')
}catch(err) { //! catch - обробник помилок
    console.log('Ti lox')
}finally{ //! finally - виконається в любому випадку навіть якщо помилка
    console.log('finally')
} 
// ! Try catch - не відловлює синтаксичні помилки


throw new Error('err txt') //! throw - примусова помилка

function paint() {
    if(){
        throw new Error('... ... ...')
    }
}


const maintwo = async () =>{

    let arr = await Promise.all([createTimer(2000), createTimer(2000)]) //! all для того щоб викликати все одночасно

    // let x1 = await createTimer(2000)
    // let x2 = await createTimer(2000)
    console.log(arr[0] + arr[1])

    console.timeEnd() //! щоб заміряти час виконання
}

maintwo()

Audio.play() // повертається Promise