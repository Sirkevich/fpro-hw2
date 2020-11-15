let userNumbers = prompt("Введите числа через запятую").split(",")
let sum = 0;

for (let i = 0; i < userNumbers.length; i++) {
    sum = sum + parseFloat(userNumbers[i]);
    result = sum / userNumbers.length;
}

console.log('Среднее арифметическое = ', result.toFixed(1));

    