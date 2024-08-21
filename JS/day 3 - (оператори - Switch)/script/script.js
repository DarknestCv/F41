// // ? Оператори 

// // ! математичні оператори 

// console.log('Додавання 1 + 1 =>', 1 + 1);
// console.log('Віднімання 2 - 1 =>', 2 - 1);
// console.log('Множення 2 * 2 =>', 2 * 2);
// console.log('Ділення 4 / 2 =>', 4 / 2);
// console.log('Ділення з остачею 5 % 2 =>', 5 % 2);
// console.log('Степінь 3 ** 3 =>', 3 ** 3);

// // ! Матиматичні оператори з різними типами даних 
// console.log('Yes' + 'or' + 'Not');
// console.log('Number' + 3); //! приводить все до sring
// console.log('4' - 2);
// console.log(2 + '4' + true);
// console.log(2 + true);

// console.log(2 * '10srg'); //NaN

// // ! Унарний оператор

// console.log(+'245');
// console.log(+'400');
// console.log(+'test');
// console.log(+true);
// console.log(+false);
// console.log(+undefined);
// console.log(+null);

// // ! Оператор присвоєння

// const pi = 3 + 0.14
// console.log(pi);

// // ! скорочення

//  let a = 1
//  a = a + 2
// console.log(a);

// let b = 10
// console.log(b += 1); // 11
// console.log(b -= 1); // 10
// console.log(b *= 1); // 20
// console.log(b /= 1); // 10

// console.log(b);

// // ! інкремент і декремент

// // * інкремента ++1

// // let c = 10
// // c = c + 1
// // c += 1
// // console.log(c);

// let d = 100
// d++
// console.log(d);

// // * декремент --1

// let i = 111
// i--
// console.log(i);

// // ! постфіксний і префіксний розміщення інкремент і декремент

// // * посфіксне

// let f = 999
// console.log(f++);
// console.log(f);

// // * перфіксний

// let g = 999
// console.log(++g);
// console.log(g);

// // ! оператори порівняння

// //* >
// //* <
// //* <=
// //* >=
// //* == рівність по значення
// //* === сувора рівність (по типах)
// //* != НЕ рівність по значенню
// //* !== НЕ сувора рывність (по типах)

// // 1 == '1' => true
// // 1 == 2 => false
// // 1 === 1 => true
// // 1 === '1' => false

// // 1 != '1' => false
// // 1 !== '1' => true

// console.log(1 > 2);
// console.log(1 < 2);

// console.log(1 == 2);
// console.log(2 == 2);

// console.log(1 != 2);
// console.log(2 != 2);

// // ! порівняння  різних типів даних 

// console.log('2' > 1);
// console.log('1' == 1);

// console.log(true == 1);
// console.log(false == 0);

// console.log(1 === true);
// console.log(1 !== true);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 1);
// console.log(null == 1);

// console.log('a' === 'a'); //true
// console.log('A' < 'a'); //true
// console.log('b' > 'a'); //true
// console.log('abc' < 'abcd'); //true

// // ! логічні оператори || &&

// // ! || - або
// console.log(true || true); //true
// console.log(false || true); //true
// console.log(false || false); //false
// console.log(false || false || true || false || false); //true

// // ! && - і

// console.log(true && true); //true 
// console.log(true && true && true && false && true && true && true &&); //false

// // ! тернальний оператор

// let a = 1

// 1 === a ? console.log('1 === a') : console.log('1 !== a');

// // ! if else 

// if (a === 1){
//     console.log('1 === a');   
// } else{
//     console.log('1 !== a');
// }

// // ! switch case

// const j = 1

// switch(j){
//     case 1:
//         console.log(1);
//         break
//     case 2:
//         console.log(2);
//         break
//     case 3:
//         console.log(3);
//         break
//     default:
//         console.log(9999);
// }

// // /////////////////////////////////////////////////////////////////////////

// function month() {
//     const monthNumber = +document.querySelector('.monthNumber').value

//     switch (monthNumber){
//         case '1':
//         case '2':
//         case '12':
//             console.log('Winter!');
//             break
//         case '3':
//         case '4':
//         case '5':
//             console.log('Spring');
//             break
//         case '6':
//         case '7':
//         case '8':
//             console.log('Summer');
//             break
//         case '9':
//         case '10':
//         case '11':
//             console.log('Fall'); 
//             break      
//         default:
//             console.log('Error!!!');
//     }
// }

// // //////////////////////////////////////////////////////////////////////

// const select = document.getElementById('bgc')
// const bg = document.querySelector('body')
 
// select.addEventListener('change', function(){
//   const selectedValue = select.value
 
//   switch(selectedValue){
//     case 'green':
//       bg.style.backgroundColor = 'green'
//       break
//     case 'yellow':
//       bg.style.backgroundColor = 'yellow'
//       break
//     case 'blue':
//       bg.style.backgroundColor = 'blue'
//       break
//     default:
//       bg.style.backgroundColor = 'red'
//   }
// })

// ! Practik
// ? 1
// const day = prompt('Введіть номер дня тижня в формамті 1-7')
// switch(day){
//     case '1':
//         alert('Цей день понеділок')
//         break
//     case '2':
//         alert('Цей день вівторок')
//         break
//     case '3':
//         alert('Цей день середа')
//         break
//     case '4':
//         alert('Цей день четвер')
//         break
//     case '5':
//         alert('Цей день Пятниця')
//         break
//     case '6':
//         alert('Цей день Субота')
//         break
//     case '7':
//         alert('Цей день Неділя')
//         break
// }
// ? 2
// const ots = prompt('Введіть свою оцінку')
// switch(ots){
//     case '1':
//         alert('Погано')
//         break
//     case '2':
//         alert('Можна краще')
//         break
//     case '3':
//         alert('Непогано')
//         break
//     case '4':
//         alert('Задовільно')
//         break
//     case '5':
//         alert('Відмінно')
//         break
// }
// ? 3
// const chis = prompt('Введіть любе число')
// switch(chis){
//     case '-':
//         alert('Це число є відємним')
// }

// ? 4
// const month = prompt('Введіть номер місяця')
// switch(month){
//     case '1':
//         alert('Цей місяць січень')
//         break
//     case '2':
//         alert('Цей місяць лютий')
//         break
//     case '3':
//         alert('Цей місяць березень')
//         break
//     case '4':
//         alert('Цей місяць квітень')
//         break
//     case '5':
//         alert('Цей місяць травень')
//         break
//     case '6':
//         alert('Цей місяць червень')
//         break
//     case '7':
//         alert('Цей місяць липень')
//         break
//     case '8':
//         alert('Цей місяць серпень')
//         break
//     case '9':
//         alert('Цей місяць вересень')
//         break
//     case '10':
//         alert('Цей місяць жовтень')
//         break
//     case '11':
//         alert('Цей місяць листопад')
//         break
//     case '12':
//         alert('Цей місяць грудень')
//         break
// }
// ? 5
const n1 = +prompt('Введіть перше число')
const n2 = +prompt('Введіть друге число')
const operation = prompt('Введіть операцію')
let result = 0
switch(operation){
    case '-':
        result = n1 - n2
        alert(result)
        break
    case '+':
        result = n1 + n2
        alert(result)
        break
    case '*':
        result = n1 * n2
        alert(result)
        break
    case '/':
        result = n1 / n2
        alert(result)
        break
    case '%':
        result = n1 % n2
        alert(result)
        break
}



































