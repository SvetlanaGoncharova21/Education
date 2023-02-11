import modal, { openModal } from "./modules/modal";
import cards from "./modules/cards";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    3000
  );

  modal("[data-modal]", ".modal", modalTimerId);
  cards();
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", "2023-03-01");
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer_slider-wrapper",
    field: ".offer_slider-inner",
  });
  calc();
});
