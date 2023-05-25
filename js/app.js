let bookATable = document.querySelector('.bookjs');
let bookMain = document.querySelector('.book');
let bookHeaderBg = document.querySelector('.header--bg');
let bookClose = document.querySelector('.book__close-btn');

bookATable.addEventListener('click', function(){
    bookMain.classList.toggle('active');
    bookHeaderBg.classList.toggle('active');
})

bookClose.addEventListener('click', function() {
    bookMain.classList.toggle('active');
    bookHeaderBg.classList.toggle('active')
})