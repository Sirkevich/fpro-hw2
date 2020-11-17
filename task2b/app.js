let arrUserNumbers = prompt("Введите числа через запятую").split(",")
let sum = 0;

for (let i = 0; i < arrUserNumbers.length; i++) {
    sum = sum + parseFloat(arrUserNumbers[i]);
    result = sum / arrUserNumbers.length;
}

console.log('Среднее арифметическое = ', result.toFixed(1));

    