const nextSlideButton = document.querySelector("[data-arrow='next']");
const prevSlideButton = document.querySelector("[data-arrow='prev']");
const opinionsSlider = document.querySelector("[data-opinions]");
const sliderMainContainer = document.querySelector("[data-slidesContainer]");
const slidesContainer = document.querySelector("[data-slides]");
const slides = document.querySelectorAll("[data-slide]");

let isPaused = false;
let sliderCounter = 1;

const slideWidth = slides[0].getBoundingClientRect().width;
const changeSlideVisibilityMediaQuery = matchMedia("(min-width: 800px)");

const changeElementsStylesIfMediaIsTrue = () => {
    if (changeSlideVisibilityMediaQuery.matches) {
        opinionsSlider.style.display = "flex";
        slidesContainer.style.transform = `translateX(-${sliderCounter * slideWidth}px)`;
        isPaused = false;
    } else {
        opinionsSlider.style.display = "none";
        isPaused = true;
    }
};

changeElementsStylesIfMediaIsTrue();

const addTransformAndTransitionToSlider = currentCounter => {
    slidesContainer.style.transition = "transform 0.3s linear";
    slidesContainer.style.transform = `translateX(-${currentCounter * slideWidth}px)`;
};

const changeTransformAndTransitionAtSpecialSlides = currentCounter => {
    slidesContainer.style.transition = "none";
    slidesContainer.style.transform = `translateX(-${currentCounter * slideWidth}px)`;
};

const pauseIntervalAfterClickSliderButtons = () => {
    isPaused = true;

    setTimeout(() => {
        isPaused = false;
    }, 3000);
};

const nextSlide = () => {
    if (sliderCounter > slides.length - 1) return;
    sliderCounter++;
    addTransformAndTransitionToSlider(sliderCounter);
};

const sliderIntervalIndex = setInterval(() => {
    if (!isPaused) {
        nextSlide();
    }
}, 5000);

nextSlideButton.addEventListener("click", () => {
    nextSlide();
    pauseIntervalAfterClickSliderButtons();
});

prevSlideButton.addEventListener("click", () => {
    if (sliderCounter <= 0) return;
    sliderCounter--;
    addTransformAndTransitionToSlider(sliderCounter);
    pauseIntervalAfterClickSliderButtons();
});

slidesContainer.addEventListener("transitionend", () => {
    if (slides[sliderCounter].dataset.slide === "last") {
        sliderCounter = slides.length - 2;
        changeTransformAndTransitionAtSpecialSlides(sliderCounter);
    } else if (slides[sliderCounter].dataset.slide === "first") {
        sliderCounter = slides.length - sliderCounter;
        changeTransformAndTransitionAtSpecialSlides(sliderCounter);
    }
});

window.addEventListener("resize", changeElementsStylesIfMediaIsTrue);

window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        isPaused = true;
    } else if (document.visibilityState === "visible") {
        isPaused = false;
    }
});
