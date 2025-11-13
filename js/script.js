// //alert(Math.PI);
// let myName = 'Sara';

// const myBirthYear = 1986;

// let word = 'skateboard';

// let facialHair = word.slice(5).replace('o', 'e');

// console.log('o meu nome é ' + myName + ' e o meu ano de nascimento é '+myBirthYear+'.');

// console.log(`o meu nome é ${myName} e o meu ano de nascimento é ${myBirthYear}.`)

// let userName = prompt('qual é o teu nome');
// console.log(userName)

// const students = ['Rui', null, 1455, 'Rute'];
// students[1] = 'Jorge';
// console.log(students)

// const cesaeCursos = [
//     ['Diogo', 'Ricardo', 'Iva', [9, null], 'Catarina', 'Taís'],
//     ['Luís', 'Rita', 'Gonçalo']
// ]

// cesaeCursos[1][1]

// let curso = {
//     cName: 'Software Developer',
//     hours: 1050,
//     isCertificated: true,
//     modules: ['JS', 'Algoritmia', 'Web']
// }
// let cursos = [
//     {
//     cName: 'Software Developer',
//     hours: 1050,
//     isCertificated: true,
//     modules: ['JS', 'Algoritmia', 'Web']
// },
//  {
//     cName: 'Software Developer',
//     hours: 1050,
//     isCertificated: true,
//     modules: ['JS', 'Algoritmia', 'Web']
// }
// ]
// console.log(curso.modules[1])
// curso.hours =1000;
// console.log(curso)

function helloWorld(message) {
  alert("Olá " + message);
}

//p10
// const fullNames = [
//     { first: 'Albus', last: 'Dumbledore' },
//     { first: 'Harry', last: 'Potter' },
//     { first: 'Hermione', last: 'Granger' },
//     { first: 'Ron', last: 'Weasley' },
//     { first: 'Rubeus', last: 'Hagrid' },
//     { first: 'Minerva', last: 'McGonagall' },
//     { first: 'Severus', last: 'Snape' }];

// const fistNames = fullNames.map(function (item){
//     return item.first
// })

// console.log(fistNames)

//pp 18
function validUserNames(usernames = []) {
  const checkedUsers = usernames.filter((item) => {
    return item.length < 10;
  });

  return checkedUsers;
}

//pp21
function allEvens(nums = []) {
  return nums.every((num) => num % 2 == 0);
}

//ex 3 da tarefa 1
function generatePass() {
  const stuff = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "|",
    "\\",
    "`",
    "~",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let pass = "";
  let passLength = prompt("qual é o tamanho da pass?");
  console.log(passLength);


  for(let i = 0; i<passLength; i++){
    let randomIndex = Math.floor(Math.random() * stuff.length);
    let myStr = stuff[randomIndex];
    pass = pass + myStr;
  }

  console.log(pass)
}
