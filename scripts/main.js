/* new */
const newSwiper = new Swiper('#newswiper',{
    direction:'horizontal',
    slidesPerView:1,
    loop:true,
    navigation:{
        nextEl:'.next',
        prevEl:'.prev',
    },
    autoplay: {
        delay:2000,
        disableOnInteraction:false,
    },
})

/* list */
const productSwiper = new Swiper ('#listswiper', {
    direction:'horizontal',
    slidesPerView:4,
    spaceBetween:48,
    slidesPerGroup:1,
    slidesOffsetAfter:20,  
    scrollbar:{
        el:'.swiper-scrollbar',
        draggable:true,
    }
});

/* collection */
const collectionSwiper = new Swiper('#collectionSwiper', {
    slidesPerView:1,
    spaceBetween:32,
    loop:false,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});

/* store */
const btns = document.querySelectorAll('.store_wrap .tab_btn');
const contents = document.querySelectorAll('.store_wrap .tab_content');
const imgs = document.querySelectorAll('.store_wrap .left_image');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        for (let j = 0; j < btns.length; j++) {
            btns[j].classList.remove('active');
            contents[j].classList.remove('active');
            imgs[j].classList.remove('active');
        }
        btns[i].classList.add('active');
        contents[i].classList.add('active');
        imgs[i].classList.add('active');
    });
}

/* shorts */
const shortsSwiper = new Swiper('#shorts_swiper', {
    slidesPerView:5,
    spaceBetween:35,
    slidesPerGroup:1,
    loop:false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});