import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

import 'slick-carousel';

$('.main-slider').slick({
    dots: true,
    arrows: false
});
