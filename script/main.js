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