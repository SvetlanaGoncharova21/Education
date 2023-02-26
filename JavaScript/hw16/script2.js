"use strict";
setTimeout(function () {
  alert("Время заняться практикой JavaScript!");
}, 3000);

// пример

(() => {
  const doCount = (i) => {
    console.log(i);
    if (i < 10) {
      setTimeout(() => doCount(i + 1), 15);
    }
  };
  doCount(0);
})();

// пример

const user = (function () {
  const privat = function () {
    console.log("I am privat!");
  };

  return {
    say: privat,
  };
})();

user.say();
