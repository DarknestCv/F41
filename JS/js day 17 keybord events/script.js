// ! currentTarget - текущий обєкт через який проходить евент, або на чому було викликано прослуховувач
// ! capture - що спрацювували на заглибленні
// ! once - щоб спрацьовували тільки один раз
// const onClick = (event)=>{
//     event.stopPropogation()
//     console.group()
//     console.log("currentTarget", event.currentTarget);
//     console.log("target:", event.target)
//     console.groupEnd()
// }

// document.onclick = onClick
// document.body.onclick = onClick
// span.onclick = onClick

// span.addEventListener("click", onClick, {
//     capture: true,
//     once: true,
// })

// ! keydown - натискання клавіши
// ! keyup - коли відпускаєте клавішу
// ! keypress - типу забороненний метод хз шо делає

// ? key - значення що ввели
// ? code - назва клавішу яку натиснула людина
// input, textarea, document, window

// * mini mractick 1
// const el = document.querySelector('.bobo')

// document.addEventListener('keydown', (event) =>{
//     el.textContent = event.key
// })

// * mini practick 2

// const str  = `const {
//   stopOnFail,
//   chdir,
//   tasks: { git, copy, exec, replaceInFile, npmRun, npx, writeToFile },
//   runok,
// } = require('runok')
// const contributors = require('contributor-faces')
// const { execSync } = require('node:child_process')
// const semver = require('semver')

// let documentation

// import('documentation').then((mod) => (documentation = mod))

// const helperMarkDownFile = function (name) {
//   return docs/helpers/.md
// }
// const documentjsCliArgs = '-f md --shallow --markdown-toc=false --sort-order=alpha'

// stopOnFail()

// module.exports = {
//   async docs() {
//     // generate all docs (runs all docs:* commands in parallel)
//     await Promise.all([this.docsHelpers(), this.docsPlugins(), this.docsExternalHelpers()])
//   },

//   async def() {
//     await Promise.all([this.buildLibWithDocs(true), this.docsPlugins(), this.docsExternalHelpers()])
//     await this.defTypings()
//   },`


// const el  = document.querySelector('.bobos')
// let i = 0

// document.addEventListener('keydown', () =>{
//     el.textContent  += str.slice(i, i += 1)
// })

// 
// ! input.value - щоб дітстати з інпутів що в них є по тексту

// ? для всіх елементів форм
// ! input - кожна змінна
// ! change - після розфокусування він перевіряє змінну

// ! tag.focus() - авто фокус буде
// ! tag.blur() - розфокуватись
// 

// ! Practick work 1
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')

document.addEventListener('keydown', (event) => {
    div1.textContent = event.code
    div2.textContent = event.key
})

// ! Practick work 2
const inp = document.querySelector('.suck')
const p = document.querySelector('.p')

document.addEventListener('keydown', (event) =>{
    p.textContent = inp.value
})
p.textContent = inp.value

// ! Practick work 3

document.addEventListener('keydown', (event) =>{
    if (event.key === 'F12') {
        event.preventDefault()
    }

    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault()
    }
})

// ! Practick work 4
// const im = document.querySelector('.lyn')

// let posY = 100
// let posX = 100

// im.style.left = posX + 'px'
// im.style.top = posY + 'px'

// document.addEventListener('keydown', (event) =>{
//     if(event.key === 'w'){
//         posY -= 3
//     }else if(event.key === 'a'){
//         posX -= 3
//     }else if(event.key === 's'){
//         posY += 3
//     }else if(event.key === 'd'){
//         posX += 3
//     }

//     im.style.left = posX + 'px'
//     im.style.top = posY + 'px'
// })

// ! Practick work 5

const country = document.querySelector('.ul')
const box = document.querySelector('.box')

country.addEventListener('change', ()=>{
    const selC = country.value

    box.style.backgroundImage = 'none'
    if(selC === 'ukraine'){
        box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg')";
    }else if(selC === 'usa'){
        box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')";
    }else if(selC === 'france'){
        box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg')";
    }
})