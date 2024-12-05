// ! practick work 1
// const f = (id,text) => {
//     let a = document.getElementById(id);
//     a.textContent = text;
// }

// f("q", "koil")

// ! 2

// const Factory = () => {
//     let div = document.createElement("div")


// }

// ! 3
// const cont = document.body

// const f2 = (value, text) =>{
//     for (let i = 0; i < value; i++) {
//         let el = document.createElement("div")
//         el.textContent = text;
//         cont.appendChild(el)
//     }
// }

// f2(5, 'small pig, big pig')

// ! 4
// const f3 = (clas) => {
//     let el = document.createElement("div")
//     el.className = clas;
//     document.body.appendChild(el)
    
// }

// f3('oi')

// ! 5


// ! 6
const tag = () => {
    let el = document.createElement('p')
    el.textContent = 0
    document.body.appendChild(el)
    setTimeout(el.textContent, 1000, 1)
}

