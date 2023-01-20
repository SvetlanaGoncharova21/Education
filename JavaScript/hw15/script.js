"use strict";

function Person(person_name, person_age, person_gender) {
  this.name = person_name;
  this.age = person_age;
  this.gender = person_gender;
}

const person1 = new Person("Андрей", 23, "М");
const person2 = new Person("Маша", 25, "Ж");
const person3 = new Person("Света", 35, "Ж");
const person4 = new Person("Марина", 15, "Ж");
const person5 = new Person("Антон", 30, "М");

console.log(person1.age);
console.log(person2.name);
console.log(person5.name);

Person.prototype.names = function () {
  console.log(`Пользователь ${this.name} Добро пожаловать!`);
};

person5.names();
