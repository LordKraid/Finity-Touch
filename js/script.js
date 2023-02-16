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
new Swiper('.index .section-4_slider-block', {

    spaceBetween: 100,
    //slidesPerView: 2,
    //watchOwerflow: true,

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
    freeMode: true,
    autoplay: {
        delay: 0,
        OnInteraction: false
    },

    speed: 3000
})

//main_section-1 swiper
new Swiper('.index .section-1_swiper-container', {
    breakpoints: {
        1300: {
            slidesPerView: 4,
        },
        970: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.2,
        }
    },

    spaceBetween: 40,
})

//main_section-3 swiper
new Swiper('.index .section-3_swiper-container', {
    slidesPerView: 4,
    spaceBetween: 47,
    //slidesPerColumn: 2,
    //gridRows: 2,

    /*
    breakpoints: {
        1300: {
            slidesPerView: 4,
        },
        970: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.1,
        }
    },
    */
})


//fund_section-1 swiper
new Swiper('.fund .section-1_swiper-container', {
    spaceBetween: 40,

    breakpoints: {
        1350: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.2,
        }
    },
})

//fund_section-3 question
const questionBlockFund = document.querySelectorAll('.fund .section-3 .question-block')

questionBlockFund.forEach((block => {
    block.addEventListener("click", function() {
        this.classList.toggle('hide')
    })
}))



//token_section-1 swiper
new Swiper('.token .section-1_swiper-container', {
    spaceBetween: 40,

    breakpoints: {
        1350: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.2,
        }
    },
})