import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

const progressbars = document.querySelectorAll('[data-progressbar]');

function progressbar(element) {
    const progressbarEl = document.createElement('div');
    const fillingEl = document.createElement('div');
    const percentsEl = document.createElement('div');
    const progress = +element.getAttribute('data-progressbar');

    element.appendChild(progressbarEl);
    progressbarEl.setAttribute('class','progressbar');

    progressbarEl.appendChild(fillingEl);
    fillingEl.setAttribute('class','progressbar__filling');

    fillingEl.appendChild(percentsEl);
    percentsEl.setAttribute('class','progressbar__percents');

    let width = 0;
    const id = setInterval(frame, 20);

    function frame() {

        if ( width >= progress ) {
            clearInterval(id);
        } else {
            width = Math.round(width + progress/100);
            fillingEl.style.width = width + '%';
            percentsEl.innerHTML = width + '%';
        }

    }
}



// var targetPos = $('.my-skills').offset().top; //смещение блока от начала документа
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight/5;
// $(window).scroll(function(){
//     var winScrollTop = $(this).scrollTop();
//     if(winScrollTop > scrollToElem){
        progressbars.forEach(progressbar);
//     }
// });