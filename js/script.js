const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.reviews__slider');
let menu__btn = document.querySelector('.menu__btn');
let menu__list = document.querySelector('.menu__list');

let MySwiper = new Swiper(slider, {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'bullets'
    }
  });

let MySwiper1 = new Swiper(slider1, {
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'bullets'
    }
  }); 

function toggle() {
    const trailer = document.querySelector('.trailer')
    trailer.classList.toggle('active')
  }


menu__btn.addEventListener('click', function() {
  menu__btn.classList.toggle('active');
  menu__list.classList.toggle('active');
});
