
let age = 13;
console.log(age);

const name = "Sviatoslav";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString =
  "'You are filled with determination'";
console.log(myString);

let myNumber = 5;
let number = myNumber + 10;
console.log(number);

const myNull = null;
console.log(myNull);

let userName = prompt("Введіть ваше ім'я");
alert("Вітаємо, " + userName);

const confirmAction = confirm("Підтвердіть вашу дію");
if (confirmAction) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

let dangerAction = confirm("Ця дія небезпечна. Ви впевнені?");
if (dangerAction) {
  alert("Дію підтвердженно");
} else {
  alert("Дію відмінено!");
}