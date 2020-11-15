let userNumber = prompt('Введите три числа через запятую');

let firstUserNumber  = +userNumber.split(/,/)[0];
let secondUserNumber  = +userNumber.split(/,/)[1];
let thirdUserNumber  = +userNumber.split(/,/)[2];

let result = (firstUserNumber + secondUserNumber + thirdUserNumber) / 3;

console.log(result);
    