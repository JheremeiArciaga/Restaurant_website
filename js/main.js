var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
  });
  function myFunction(x) {
    x.classList.toggle("change");
  }

  const toggleMenu = document.querySelector(".toggle-menu");
  const links = document.querySelector(".links");

  toggleMenu.addEventListener("click", function() {
    links.classList.toggle("active");
    toggleMenu.classList.toggle("active");
  });