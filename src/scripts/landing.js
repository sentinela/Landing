$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 60
});

$('#topNav').affix({ offset: { top: 200 } });

new WOW().init();

$('.non-active').on('click', function(event) {
  var active = $('.active').removeClass('active');
  var non_active = $('.non-active').removeClass('non-active');
  active.addClass('non-active');
  non_active.addClass('active');
});

$('.active').on('click', function(event) {
  var active = $('.active').removeClass('active');
  var non_active = $('.non-active').removeClass('non-active');
  active.addClass('non-active');
  non_active.addClass('active');
});

$('a.page-scroll').bind('click', function(event) {
  var $element = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($element.attr('href')).offset().top - 60)
  }, 1450, 'easeInOutExpo');
  event.preventDefault();
});

$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// ================  Typing effect =) ====================
// http://codepen.io/jeanbauer/pen/yJRmbK
document.addEventListener('DOMContentLoaded', function() {
  var search = document.getElementById('search');
});

var setTimeOutId = 0;
var speedWriting = 50;
var captionLength = 0;
var caption = '';

function type(val) {
  caption = val || 'Tente buscar sua cidade...'; typing();
}

function typing() {
  search.value = caption.substr(0, captionLength++);
  if (captionLength < caption.length + 1) {
    setTimeout('typing()', speedWriting);
  } else {
    captionLength = 0;
    caption = '';
  }
}

var searchSuggestions = ['Porto Alegre', 'Cachoeirinha', 'Gravataí', 'Rio de Janeiro'], i = 0 ;
setTimeOutId = setInterval(function() {
  type(searchSuggestions[i]); i++; if (i === searchSuggestions.length) i = 0;
}, 2000);

search.addEventListener('click', function() {
  clearInterval(setTimeOutId);
  document.querySelector('.search span').style.display = 'none';
  search.value = '';
});

search.addEventListener('focusout', function() {
  document.querySelector('.search span').style.display = 'inline';
  setTimeOutId = setInterval(function() { type(searchSuggestions[i]); i++; if (i === searchSuggestions.length) i = 0; }, 2000);
});
