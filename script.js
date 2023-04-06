const d = document,
w = window;

const $sliderContainer = d.getElementById("slider-container");
const $slider = d.querySelector(".slider");
const $sliderSection = d.querySelectorAll(".slider__section");
const $sliderImg = d.querySelectorAll(".slider__section-img");

let $sliderLast = $sliderSection[$sliderSection.length -1];

$slider.insertAdjacentElement("afterbegin", $sliderLast);


function next2() {
    $sliderFirst = d.querySelectorAll(".slider__section")[0];
    $slider.style.transform = "translateX(-200%)"
    $slider.style.transition = "all .2s"
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("beforeend", $sliderFirst);
        $slider.style.transform = "translateX(-100%)";
    }, 500);
}

$boton2 = d.getElementById("boton2");
$boton2.addEventListener("click", () => {
    next2()
})

setInterval(() => {
   // next2()
}, 3000);
