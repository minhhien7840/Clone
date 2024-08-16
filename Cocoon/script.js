/**
 * Sự kiện cho chuyển slider 
 */
const listProIntro = document.getElementsByClassName("product-introduce");
const listProIntroContainer = document.getElementById("product-container");
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const colorIndex = [{
    background: "#FFC255",
    color: "rgb(63, 42, 0)",
    active: "#C5A25D",
    dot: "#ECD6AB"
},
{
    background: "#11994B",
    color: "#fefbf4",
    active: "#FEFBF4",
    dot: "#59B77E"
}, {
    background: "#EFAFA5",
    color: "#FEFBF4",
    active: "#FEFBF4",
    dot: "#F4C6BD"
}, {
    background: "#FFE707",
    color: "#000000",
    active: "#C5A25D",
    dot: "#E0CDAA"
}, {
    background: "#EDE0CC",
    color: "rgb(63, 42, 0)",
    active: "#C5A25D",
    dot: "#E0CDAA"
}]
let currentIndex = 0;
changSlide(0);
prevBtn.addEventListener("click", () => prevSlide());
nextBtn.addEventListener("click", () => nextSlide());

function nextSlide() {
    if (currentIndex < listProIntro.length - 1) {
        changSlide(currentIndex + 1);
    }
    else {
        changSlide(0);
    }
}
function prevSlide() {
    if (currentIndex > 0) {
        changSlide(currentIndex - 1);
    } else {
        changSlide(listProIntro.length - 1);
    }
}
function changSlide(index) {
    listProIntroContainer.style.transform = `translateX(-${listProIntro[0].offsetWidth * index}px)`;
    changColor(index);
    currentIndex = index;
}
function changColor(currentIndex) {
    listProIntro[currentIndex].style.backgroundColor = colorIndex[currentIndex].background;
    listProIntro[currentIndex].style.color = colorIndex[currentIndex].color;
    const dots = listProIntro[currentIndex].getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = colorIndex[currentIndex].dot;
        if (i == currentIndex) {
            dots[i].style.backgroundColor = colorIndex[currentIndex].active;
        }
        dots[i].addEventListener("click", () => changSlide(i));
    }
}
//parallax
const headerParralax = document.getElementById('parrallax-header');
const parraContentContainer = document.getElementById('parra-content-container').getElementsByTagName('div')[0];
const parrDesign = document.getElementById('parrallax-design');
const imgDivParralax=document.getElementById('parralax-img').getElementsByTagName('div');
let lastScrollTop = 0;

function onScroll() {
    let scrollTop = window.scrollY;

    if (parrDesign.getBoundingClientRect().top < 1000 && parrDesign.getBoundingClientRect().top > -240) {
        headerParralax.style.transform = `translateY(-${scrollTop * 0.2}px)`; 
        parraContentContainer.style.transform = `translateY(-${scrollTop * 0.15}px)`;  
        imgDivParralax[0].style.transform = `translateY(${scrollTop * 0.25}px)`; 
        imgDivParralax[1].style.transform = `translateY(${scrollTop * 0.15}px)`; 
        imgDivParralax[2].style.transform = `translateY(${scrollTop * 0.075}px)`; 
        imgDivParralax[3].style.transform = `translateY(-${scrollTop * 0.15}px)`; 
    }

    lastScrollTop = scrollTop;
}

window.addEventListener('scroll', () => {
    if (lastScrollTop !== window.scrollY) {
        window.requestAnimationFrame(onScroll);
    }
});



