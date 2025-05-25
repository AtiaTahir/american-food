 document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // or 'vertical'
    loop: true,

    // If you need pagination
    pagination: {
      el: '.swiper-pagination',
    },
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if you want scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});