import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

const jQueryBridget = require('jquery-bridget');
const Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);
// now you can use $().isotope()

$('.my-portfolio__works').isotope({
    itemSelector: '.my-portfolio__work',

});

$('.my-portfolio__works-menu-link').click(function(){

    $('.my-portfolio__works-menu-link').removeClass('current-link');
    $(this).addClass('current-link');
    const selector = $(this).attr('data-filter');

    $('.my-portfolio__works').isotope({
        filter: selector,
        animationOptions: {
            duration: 1000,
            easing: 'easeOutQuart',
            queue: false
        }
    });
    return false;

});