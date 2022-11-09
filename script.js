const slides = document.querySelectorAll('.slide');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let activeSlide = 0;


btnRight.addEventListener('click', () => {
    activeSlide++
    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    setActiveSlide()
})

btnLeft.addEventListener('click', ()=>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }
    setActiveSlide()

})

const  setActiveSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
        slides[activeSlide].classList.add('active')
    })
}