const config = {
    id: '...',
    commets: 10,
}

// ! JSON - java script object notation

jsonConfig = JSON.stringify(config); //! stringify Зробити JSON


let obj = JSON.parse(answer) //! parse зробити з JSON обєкт



// * AJAX - асихронний джава скрипт

const URL = 'https://randomuser.me/api/';

// * 1
const xhr = new XMLHttpRequest() // ! створюємо мережевий запит


// * 2
xhr.open('GET', URL) 

xhr.onload = () => { //! onload - відповідає за оброблення подій після завантаження даних з серверу
   let human = JSON.parse(xhr.response).results[0]
}

// * 3
xhr.send()

// 1**
// 2**
// 3**
// 4** помилка клієнта
// 5** помилка сервера



// * FETCH

// ! .then що робити далі (перед цим обовязково розпарсити)
fetch(URL, {
    method: 'GET', // ? GET - отримати, POST - відправляємо дані, PUT - відправляємо дані які хочемо замінити, DELETE - якщо хочемо щось видалити з сервера 
    headers: {
      "Content-Type": 'application/json' // ? text/html  
    }, 
    body: JSON.stringify({data: '...'}) //? дані які відправляємо на сервер
}).then((result) => result.json()).then((obj) => console.log(obj))