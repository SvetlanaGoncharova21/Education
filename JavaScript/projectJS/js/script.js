window.addEventListener("DOMContentLoaded", function () {
  const modal = require("./modules/modal"),
    cards = require("./modules/cards"),
    tabs = require("./modules/tabs"),
    timer = require("./modules/timer"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider"),
    calc = require("./modules/calc");

  modal();
  cards();
  tabs();
  timer();
  forms();
  slider();
  calc();
});
