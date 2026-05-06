var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    slidesPerView: "auto",
    
    autoplay: {
        delay: 4000, 
        disableOnInteraction: false, 
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
    slideToClickedSlide: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    }
});
swiper.on("click", function (swiper, event) {
    const clickedIndex = swiper.clickedIndex;
    const activeIndex = swiper.activeIndex;

    if (clickedIndex === activeIndex) return;
    
    const rect = swiper.el.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const isRightSide = clickX > rect.width / 2;

    if (isRightSide) {
        swiper.slideNext();
    } else {
        swiper.slidePrev();
    }
});

const interestsBg = document.querySelector(".interests-bg");

function updateSwiperBg(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const bg = activeSlide.getAttribute("data-bg");

    if (bg) {
        interestsBg.style.backgroundImage = `url(${bg})`;
    }
}
updateSwiperBg(swiper);

swiper.on("slideChange", function () {
    updateSwiperBg(swiper);
});