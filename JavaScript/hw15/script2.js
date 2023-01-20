"use strict";

const obj = { num: 2 };

function add(a, b) {
  return this.num + a + b;
}

const resultCall = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);

function minus(num) {
  return this - num;
}

const resultBind = minus.bind(10); //10 передается в this

console.log(resultCall, resultApply, resultBind(3));
