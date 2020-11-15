const currentYear = +2020;

let userYearOfBirth = +prompt('Введите год Вашего рождения');

if (userYearOfBirth > 0 && userYearOfBirth < currentYear) {

    let result = currentYear - userYearOfBirth;
    console.log('Ваш возраст', +result);

} else if (userYearOfBirth === currentYear) {
    console.log('Тебе меньше года');
}
  else if (userYearOfBirth <= 0) {
    console.log('Указан некоректный год');  
  }
   else {
    console.log('Ти родишся в', userYearOfBirth + ' году')
}

