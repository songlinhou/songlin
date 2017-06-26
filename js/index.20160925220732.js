(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="ipvtpohmjo26Anbjmt/vdbt/bd/do!";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);location.href=addr;}
function sm(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-7').attr('src', (dpi>1) ? 'images/table-580.jpg' : 'images/table-290.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/meeting-588.jpg' : 'images/meeting-294.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/hobbies-572.jpg' : 'images/hobbies-286.jpg');};
if(!window.HTMLPictureElement){r();}
sm();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "1.40s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "1.40s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "1.40s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "0.40s", 1, 100);
wl.start();

});