"use strict";

$(".button-collapse").sideNav();

  const carousel = $('#carousel');
  setInterval(() => {
    carousel.carousel('next');
  }, 30);