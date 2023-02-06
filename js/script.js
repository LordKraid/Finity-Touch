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

    //spaceBetween: 50,

    breakpoints: {
        1700: {
            slidesPerView: 6,
        },        
        1450: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 3,
        },
        375: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.4,
        }
    },

    loop: true,
    //freeMode: true,
})

//main_section-1 swiper
new Swiper('.section-1_swiper-container', {
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 3,
        },
        350: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.1,
        }
    },

    spaceBetween: 40,
})