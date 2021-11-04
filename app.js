$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    speed: 8000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 1,

      },
      1000: {
        items: 2,

      }
    }
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    speed: 8000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  })
})





const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true
  }
  else {
    menuBtn.classList.remove('open');
    menuOpen = false
  }
})
