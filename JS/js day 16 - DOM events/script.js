// ! Event -  будь яка подія користувача на сторінці
// ! HtmlCollection - псевдо масив, в якого нема методів є дліна, index і немає методів синхронізуєця з страніцой
// ! NodeList - псевдо масив, але в отлічії від HtmlCollection від вибирається один раз іне змінююється
// ! click - лівий клік мишкою
// ! dblclick - подвійний клік
// ! contextmenu - правий клік миши
// ! mousemove - коли мищка рухаеться на елементі
// ! mouseover, mouseout - коли мишка заходить в елемент і виходить з нього
// ! el.addEventListener("click", () => {console.log('click')}) - прослуховує елементів в даному випадку що станеться коли станеться клік

// ! el.target - так можна дізнатись хто викликав подію
// ! ЗАГЛИБЛЕННЯ -  браузер створює обєкт події  і він починає викликати іі починаючи з WINDOW
// ! ВСПЛИТТЯ - повертаєтья назад і спрацює знову починаючи з елемента до якого ішло ЗАГЛИБЛЕННЯ
// ! Всі підписки спрацьовують на всплитті

// ! once:true - робить підписку одноразовою
// ! capture: true - підписка спрацює на заглибленні (передаеться 3 паратметром)

const pop = (e) =>{
        e.stopPropagation() // ! зупиняє подію
        e.preventDefault() // ! відміняє дефолтні браузеровські приколи
        console.log('!');
        console.log(e.target); // ! Target - той хто виклдикав подію
        console.log(e.currentTarget); // ! currentTarget - текущий елемент
}

window.addEventListener('click', pop)
document.addEventListener('click', pop)
document.body.addEventListener('click', pop)
document.body.children[0].addEventListener('click', pop)

// const p = document.getElementById("q")

// let callback = () => {
//     event.pageX
//     console.log("Click");
//     console.log(event);
// }
// p.addEventListener("click", callback)
// p.addEventListener("mouseover", callback)

// // ! 
// // p.removeEventListener("click", callback)

// p.onclick = callback;

// ! 1
// const rop = document.body

// let callback = () =>{
//     console.log(event.pageX, event.pageY);
// }

// rop.addEventListener("click", callback)

// ! 2
// document.body.addEventListener("click", (event) => {
//     if(event.target.tagName === "DIV"){
//         event.target.style.color = 'lime'
//     }
// })

// ! 3
// document.body.addEventListener("click", (event) => {
//     if(event.target.tagName !== "BODY"){
//         event.target.remove("click")
//     }
// })

// ! 4
// document.body.addEventListener("contextmenu", (event) => {
//     event.preventDefault(); //! preventDefault - відміняє виклик вбудовних обробників 
//     console.log("right click");
// })

// ! 5
// document.body.addEventListener("click", (event) => {
//     if(event.target.tagName === "IMG"){
//         document.body.style.backgroundImage = "url(" + event.target.src + ")"
//     }
// })

// ! practick work 1
// document.body.addEventListener("click", (event) => {
//     if(event.target.tagName === "DIV"){
//         event.target.textContent = parseInt(event.target.textContent) + 1
//     }
// })

// ! practick work 2
// document.body.addEventListener("mousemove", (event) =>{
//     if(event.target.tagName === "DIV"){
//         let width = parseFloat(event.target.style.width) || 0;
//         let height = parseFloat(event.target.style.height) || 0;

//         event.target.style.width = (width + 0.5) + "px"
//         event.target.style.height = (height + 0.5) + "px"
//     }
// })

// ! practick work 3
// const imageSection = document.querySelector('.imageSection')

// imageSection.addEventListener("click", (event) =>{

//     if(event.target.tagName === "IMG"){
//         const newImg = document.createElement("img")
//         newImg.src = event.target.src;
//         imageSection.appendChild(newImg)
//     }
// })

// imageSection.addEventListener("contextmenu", (event) => {
//     if(event.target.tagName === "IMG"){
//         event.preventDefault()
//         event.target.remove()
//     }
// })

// ! practick work 4
// const imgName = document.querySelector('.dodo')

// imgName.addEventListener("click", (event) =>{
//     if(event.target.tagName === "DIV"){
//         document.body.style.backgroundColor = event.target.style.backgroundColor
//     }
// })

// ! practick 5
const pram = document.querySelector(".bobo")

document.body.addEventListener("click", (event) =>{
        const tagName = event.target.tagName
        pram.textContent = `Тип тегу: ${tagName}`
        this
})

