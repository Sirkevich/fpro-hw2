const randomNumber = +Math.floor(Math.random() * (10 - 1) + 1);

let userNumber = +prompt('Угадай число, которое я задумал от 1 до 10');
let result = randomNumber === userNumber;

console.log(result);


