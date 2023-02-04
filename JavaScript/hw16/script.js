"use strict";

class Person {
  constructor(name, surname) {
    this.name = name;
    this._surname = surname;
  }

  #age = 31;

  introduce() {
    console.log(
      `Hello, my name is ${this.name} ${this._surname}. I am ${
        this.#age
      } years old`
    );
  }
}

const otto = new Person("Svetlana", "Shinkareva");

otto.introduce();
