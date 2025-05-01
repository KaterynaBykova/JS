/*Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let arr = [1, 'katya', true, 100, false, 0, {name: 'katya'}, [1, true], undefined, NaN];

console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9])

/*Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.*/
let book1 = {
    title: 'Transerfing',
    pageCount: 1000,
    genre: 'esoteric'
}
let book2 = {
    title: 'Sherlock',
    pageCount: 450,
    genre: 'detective'
}
let book3 = {
    title: 'Secret',
    pageCount: 500,
    genre: 'esoteric'
}
console.log(book1, book2, book3)

/*Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.*/

let book4 = {
    title: 'Transerfing',
    pageCount: 1000,
    genre: 'esoteric',
    authors: ['Zeland']
}
let book5 = {
    title: 'Sherlock',
    pageCount: 450,
    genre: 'detective',
    authors: ['Konandoyl', 'Shevchenko']
}
let book6 = {
    title: 'Secret',
    pageCount: 500,
    genre: 'esoteric',
    authors: ['Pushkin', 'Shevchenko']
}
console.log(book4, book5, book6)

/*Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let user = [
    {
        name: 'A',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'B',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'C',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'D',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'E',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'F',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'G',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'H',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'I',
        username: 'aa',
        password: 'qwerty'
    },
    {
        name: 'J',
        username: 'aa',
        password: 'qwerty'
    },
]
console.log(user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password)

/*описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу*/

let array = [
    {
        day: 'sunday',
        morning: 15,
        afternoon: 18,
        evening: 17
    },
    {
        day: 'monday',
        morning: 15,
        afternoon: 18,
        evening: 17
    },
    {
        day: 'tuesday',
        morning: 15,
        afternoon: 18,
        evening: 17
    },
    {
        day: 'wednesday',
        morning: 15,
        afternoon: 18,
        evening: 17
    },
    {
        day: 'thirsday',
        morning: 15,
        afternoon: 18,
        evening: 17
    },
    {
        day: 'friday',
        morning: 15,
        afternoon: 18,
        evening: 17
    },
    {
        day: 'saturday',
        morning: 15,
        afternoon: 18,
        evening: 17
    }
]
console.log(`температура у ${array[1].day} ін зе morning- is ${array[1].morning}`)

/*Є змінна х, якій ви надаєте довільне числове значення.

Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let number = -3;
if (number !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}

/*Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число

(в першу, другу, третю або четверту частину години).*/

let time = 100;
if (time >= 0 && time <= 15) {
    console.log('1ша чверть')
} else if (time > 15 && time <= 30) {
    console.log('2га чверть')
} else if (time > 30 && time <= 45) {
    console.log('3тя чверть')
} else if (time > 45 && time <= 59) {
    console.log('4та чверть')
} else {
    console.log('Введіть число від 0 до 59')
}
/*У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = -900;
if (day >= 1 && day <= 10) {
    console.log('1 dekada')
} else if (day > 10 && day <= 20) {
    console.log('2 dekada')
} else if (day > 20 && day <= 31) {
    console.log('3 dekada')
} else {
    console.log('введи число от 1 до 31')
}

/*Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на
екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let dayNumber = -8;
switch (dayNumber) {
    case 1:
        console.log('понеділок');
        break;
    case 2:
        console.log('вівторок');
        break;
    case 3:
        console.log('середа');
        break;
    case 4:
        console.log('четвер');
        break;
    case 5:
        console.log('пятница');
        break;
    case 6:
        console.log('субота');
        break;
    case 7:
        console.log('неділя');
        break;
    default:
        console.log('введіть день від 1 до 7')
}

/*Користувач вводить або має два числа.

Потрібно знайти та вивести максимальне число з тих двох .

Також потрібно врахувати, коли введені рівні числа.*/

let numbers = [1,100];
if(typeof numbers[0] === 'number' && typeof numbers[1] === 'number') {
    if (numbers[0] > numbers[1]) {
        console.log(`${numbers[0]} більше`)
    } else if (numbers[1] > numbers[0]) {
        console.log(`${numbers[1]} більше`)
    } else {
        console.log('Вони рівні')
    }
}else {
    console.log('введи 2 числа!')
}

/*є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який

 буде присвоювати змінній х значення “default”,
  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).*/

let x = null;
if(!!x===false){
    x = 'default'
}
console.log(x)

/*з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання.
У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Super')
}



