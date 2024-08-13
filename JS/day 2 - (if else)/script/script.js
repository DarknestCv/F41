// ! if else

// if(умова){наслідок}

// (умова)
// ! > true/false
// ! < true/false
// ! <= true/false
// ! >= true/false

// if(1>2){console.log('ok')}

const a = +prompt('enter 1 number')
const b = +prompt('enter 2 number')

if(a >= b){
    alert('a(${a}) > b(${b})')
}
else if(a < b){
    alert('a(${a}) < b(${b})')
} else{
    alert ('a(${a}) = b(${b})')
}
// else if( a === b){
//     alert('a(${a}) = b(${b})')
// }

// ! == - просто рівність 1 == '1' true тільки значення 
// ! === - сувора рівність 1 === '1' false тип даних а потім тільки значення

const x = 5
const v = '5'

// 1) number === String => false
// 2) 5 === 5

// console.log(x, typeof x);
// console.log(v, typeof v);

// if (x == v){
//     console.log('True');
// }else{
//     console.log('False');
// }

// ..................................................................
// ! (&&) = і - and  (true && true && true) ==> true
// ! (||) = або - or (false || true) ==> true --- (false || false) ==> false

// const m = +prompt('enter "m" number')
// const n = +prompt('enter "n" number')
// const k = +prompt('enter "k" number')

// if(m > n && m > k){
//     console.log("m > n and m > k");
// }
// else if(n > m && n > k){
//     console.log("n > m and n > k");
// }
// else if(k > m && k > n){
//     console.log("k > n and k > m");
// }
// else{
//     console.log("k = n = m");
// }

//....................................................................

// const password = prompt("Enter your password")
// const confirmpassword = prompt("Enter confirm password")

// if(password.length <= 4 || confirmpassword.length <= 4){
//     console.log('Less then 4');
// }
// else if(password.length >- 16 || confirmpassword.length >- 16){
//     console.log("More then 16");
// }
// else if(password === confirmpassword){
//     console.log("Welcome!!!");
// }
// else{
//     console.log('Different passwords');
// }

// ..........................................................................

function month() {
    const monthNumber = +document.querySelector('.monthNumber').value
    if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12){
        console.log('Winter');
    }
    else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
        console.log('Spring');
    }
    else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
        console.log('Summer');
    }
    else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
        console.log('fall! autumn');
    }
    else{
        console.log('Invalid input');
    }
}

// ! тернальний оператор ( умова ? if True : if False)
// const age = +prompt('How old are you ')
// if(age >= 18){
//     console.log('Можете голосувати');
// }else{
//     console.log('Вам заборонено голосувати ');
// }

// ...........................................................................
age >= 18 ? console.log('Lets go to geyGYM') : console.log('So bad, you dont going with us to geyGYM');
