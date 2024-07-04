const cardsSwiper = new Swiper(".js-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".button-arrow--next",
      prevEl: ".button-arrow--prev",
    },
  });