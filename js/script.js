//scroll page smooth
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {document.querySelector('header').classList.add('scrolled')}
    else {document.querySelector('header').classList.remove('scrolled')}
})

//main section-7 label animation
let label = document.querySelectorAll('.section-7 label')
let input = document.querySelectorAll('.section-7 input')

//main_section-5_question
const questionBlock = document.querySelectorAll('.index .section-5 .question-block')

questionBlock.forEach((block => {
    block.addEventListener("click", function() {
        this.classList.toggle('hide')
    })
}))

//main_section-4 swiper
new Swiper('.section-4_slider-block', {
    slidesPerView: 6,

    loop: true,

    //spaceBetween: 100,

    freeMode: true,
})