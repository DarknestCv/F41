// ! Видалення елемента зі сторінки - el.remove()
// ! DOM - document object model

// ?
// ? можна отримати обєкт по clas, id, tag

let div = document.getElementsByClassName('q') //! повертає HTMLCollection[]
document.getElementById('span1') //! повертає або null, || {tag}

document.querySelector() //! повертає null || {tag}
document.querySelectorAll() //! повертає nodeList[]
// ! console.dir() - щоб дізнітись про обєкт більше

div.textContent // !можна побачити що всередені за текст
div.textContent = 'bob' // !так можна змінити текст

div.innerHTML = '<b>new text</b>' //! для того щоб записувати нові теги в блоки не як текст а як теги

div.classList.add('big') // !так можна додавати класи для тегів
div.classList.remove('') // !видалення класів
div.classList.contains() //! перевірка чи є такий клас в тега
div.classList.toggle('') // !можна переключати так класи для тегів

div.style.color = 'green' //! так можна змінювати властивості css для тега !! МАЮТЬ НАЙВИИЩИЙ ПРИОРІТЕТ !!

div.setAttribute('x', '1') // !можна так додавати атрибути 
div.setAttribute('x') //! можна так считувати атрибути 
div.removeAttribute('x') //! можна так видаляти атрибути 

let tagd = document.createElement('p') //! так можна створювати обєкт
tagd.textContent = 'boba'

document.body.append(tagd)
tagd.remove() //! так можна видалити тег

div.getElementsByClassName() // ! так буде швидше шукати якшо елементи в цьому тезі лежить

div.children //! дочерні елементи цього тега
div.parent //! посилання на батьківській елемент для цього це буде (body)

document.body //! body
document.head //! head
document.documentElement // ! Html

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

