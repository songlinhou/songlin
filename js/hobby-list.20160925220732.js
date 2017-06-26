(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="ipvtpohmjo26Anbjmt/vdbt/bd/do!";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-88').attr('src', (dpi>1) ? 'images/cloud-84.png' : 'images/cloud-42.png');
$('.js-89').attr('src', (dpi>1) ? 'images/vrlog-84.png' : 'images/vrlog-42.png');
$('.js-90').attr('src', (dpi>1) ? 'images/phone-32.png' : 'images/phone-16.png');
$('.js-91').attr('src', (dpi>1) ? 'images/pc-80.png' : 'images/pc-40.png');
$('.js-92').attr('src', (dpi>1) ? 'images/circuit-66.png' : 'images/circuit-33.png');

var a='data-src'; if($('.js-94 .slide0').hasAttr('src')) { a='src'; } $('.js-94 .slide0').attr(a, (dpi>1) ? 'images/piano-700.jpg' : 'images/piano-350.jpg');

$('.js-98').attr('src', (dpi>1) ? 'images/eye-700.jpg' : 'images/eye-350.jpg');
var a='data-src'; if($('.js-100 .slide0').hasAttr('src')) { a='src'; } $('.js-100 .slide0').attr(a, (dpi>1) ? 'images/game1-698.jpg' : 'images/game1-349.jpg');
var a='data-src'; if($('.js-100 .slide1').hasAttr('src')) { a='src'; } $('.js-100 .slide1').attr(a, (dpi>1) ? 'images/game2-698.jpg' : 'images/game2-349.jpg');
var a='data-src'; if($('.js-102 .slide0').hasAttr('src')) { a='src'; } $('.js-102 .slide0').attr(a, (dpi>1) ? 'images/movie1-696.jpg' : 'images/movie1-348.jpg');
var a='data-src'; if($('.js-102 .slide1').hasAttr('src')) { a='src'; } $('.js-102 .slide1').attr(a, (dpi>1) ? 'images/movie2-696.jpg' : 'images/movie2-348.jpg');
$('.js-104').attr('src', (dpi>1) ? 'images/singing-694.jpg' : 'images/singing-347.jpg');};
if(!window.HTMLPictureElement){r();}
$('.js-94 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});$('.js-96 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});$('.js-100 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});$('.js-102 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js-86')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-87')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-93')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-95')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-97')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-99')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-101')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-103')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-105')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});