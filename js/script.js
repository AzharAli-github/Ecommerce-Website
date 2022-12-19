var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var navBtn = document.querySelector('#navButton');
var navDivOne = document.querySelector('#navDivOne');
let x = true;

navBtn.addEventListener('click', (e) => {
    e.preventDefault;
    if (x == true) {
        navDivOne.classList.add('navDivOne');
        x = false;
    } else {
        navDivOne.classList.remove('navDivOne');
        x = true;
    }
})

var swiper = new Swiper(".mySecondSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-second-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".myThirdSwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-three-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".myFourthSwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    }
});