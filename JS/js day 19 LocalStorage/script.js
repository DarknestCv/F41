// localStorage.clear() //! очистити
// localStorage.setItem('theme', 'dark') //! додати (лише стрінга) (ключ, данні)
// localStorage.getItem('theme') //! дістати 
// localStorage.removeItem('theme') //! видалити 
// localStorage.length //! перевірити кількість

// * Приклад 1

// let click = Number(localStorage.getItem('clicks'));

// const init = () =>{
//     let LSclicks = localStorage.getItem('clicks')
    
//     if(LSclicks === null){
//         click = 0
//     }else{
//         click = LSclicks
//     }
//     div.textContent = Number(click)
// }

// div.addEventListener('click', ()=>{
//     click += 1;
//     localStorage.setItem('clicks', click)
//     span.textContent = click
// })

// init()

let nov = document.getElementById("new")
let old = document.getElementById('old')


let oldNum = localStorage.getItem('k')

if(oldNum !== null){
    old.textContent = oldNum
}

let newNum = Math.random()
localStorage.setItem('k', newNum)
nov.textContent = newNum