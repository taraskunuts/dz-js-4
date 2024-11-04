const textOne = prompt("Bведіть значення для текстового поля 1");
const textTwo = prompt("Bведіть значення для текстового поля 2");
if (textOne !== null && textOne.trim() !== '' && textTwo !== null && textTwo.trim() !== '') {//P.S не мав іншої думки як інакше це зробити:/
    alert("Обидва поля заповнені");
} else {
    alert("Не всі поля заповнені");
}
//
//
//
const number1 = parseFloat(prompt("Будь ласка введіть перше число"));
const number2 = parseFloat(prompt("Будь ласка введіть друге число"));
if (!isNaN(number1) && !isNaN(number2)) {//P.S isNaN це абревіатура(is Not a Number). !isNаN значить(Not is Not a number.! це Not(або не є на українській). Not і Not закреслюється і виходить is a Number тобто ми хочемо отримати число)
    const sum = number1 + number2;
    if (sum === 10 || sum > 10) {
        alert("Сума більша/дорівнює за 10");
    } else {
        alert("Сума менша за 10");
    }
} else {
    alert("Це не число/введіть правильний формат.");
}
//
//
//
const userInput = prompt("Будь ласка введіть текст");
if (userInput && userInput.toLowerCase().includes("javascript")) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript/Текст не було введено");
}
//
//
//
const userPut = prompt("Будь ласка введіть число");
const number = parseFloat(userPut);
if (!isNaN(number)) {
    if (number > 10 && number < 20) {
        alert("Число більше за 10 але менше за 20");
    } else {
        alert("Число не відповідає умові");
    }
} else {
    alert("Будь ласка введіть дійсне число");
}
//
//
//
const name = prompt("введіть ваше імя");
const email = prompt("введіть ваш email");
const password = prompt("введіть ваш пароль");
let message = "";
if (name.length < 3) {
    message = 'Імя має містити не менше 3 символів.';
} else if (!email.includes('@') || !email.includes('.')) {
    message = 'Email має містити символ "@" та крапку"."';
} else if (password.length < 6) {
    message = 'Пароль має містити не менше 6 символів';
} else {
    alert("Акаунт зареєстровано успішно, перенаправляєм на сайт")
    window.location.href = 'https://rozetka.com.ua/';//гугл виручив знову ;D
}
if (message) {
    alert(message);
}