// ! Розгортування (npm i -> package.json)
// ! npm ci -> package-lock.json(скачає все рпавильно з правильними версіями)

// ? major.minor.patch
// ! major - зміни не сумісні з поперед версією(всі хто юзав потрібно буде переписати код)
// ! minor - зміни сумісні з попереднією версією
// ! patch - фікси помилок


// npm i tsx@latest - так останню верс качаем
// npm i tsx@4.19.3 - так качаем певну версію 
// щоб зафікусувати версію видаляємо "^"


// ! fs - модуль вбудований в Node для роботи з файлами

// ! Buffer - вбудований тип даниї який показує дані так як вони тримаються на диску
import fs, { appendFile } from 'fs';

// fs.readFile('./1.txt', (err, data) =>{
//     console.log(String(data))
// })


fs.readFile('./2.txt', (err,data) => {
    console.log(data)
    console(String(data))
})


fs.writeFile("./2.txt", "some text", (err) =>{})


// ! readfile - для прочитання содержимого файла
// ! writeFile - для запису даних в файл

fs,appendFile("./2.txt", "2", (err) =>{})
// ! appendfile - якщо файла нема він його створе

fs.unlink(path, callback)
// ! unlinnk(path, callback) - видаляє файл


fs.readdir("./node_modules", (err, files) =>{
    console.log(files)
})

// ! readdir - считує дирикторію


let data = fs.readFileSync("./1.txt")


fs.readFile(path)
.then((data) => {})

import {readFile} from "node:fs/promises"

// ! зверху стандарт підключення вбудованих пакетів