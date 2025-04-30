/*Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’,
1, 10, -999, 123, 3.14, 2.7, 16, true, false.

    Вивести кожну змінну за допомогою: console.log*/

let a1 = 'hello';
let a2 = 'owu';
let a3 = 'com';
let a4 = 'ua';
let a5 = 1;
let a6 = 10;
let a7 = -999;
let a8 = 123;
let a9 = 3.14;
let a10 = 2.7;
let a11 = 16;
let a12 = true;
let a13 = false;

console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)

/*Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)*/

let firstName = 'Катерина';
let middleName = 'Володимирівна';
let lastName = 'Бикова';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);


/*За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.*/

    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a, typeof b, typeof c)

/*За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль*/

let name = prompt('What is your name?');
let middle = prompt('What is your middlename?');
let surname = prompt('What is your surname?');
console.log(`${name} ${middle} ${surname}`)

