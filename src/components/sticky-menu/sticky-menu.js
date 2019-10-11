import $ from 'jquery';


const coordinates = $('.main-header').offset().top;

$(window).scroll(function (){
let windowScrollTop = $(window).scrollTop();

  if ( windowScrollTop >= coordinates ){
    $('.main-header').addClass('main-header_sticky');
  } else{
    $('.main-header').removeClass('main-header_sticky');
  }
});
