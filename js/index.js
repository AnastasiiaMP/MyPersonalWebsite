$(document).ready(function () {

$(function() {
  var header = $('.button-menu');
  var hederHeight = header.height();
$(function() {
  $("h1").fadeTo(3000, 1);
});

$(window).scroll(function() {
  if($(this).scrollTop() > 1) {
   header.addClass('button-menu-fixed');
   $('body').css({
      'paddingTop': hederHeight + 'px'
   });
  } else {
   header.removeClass('button-menu-fixed');
   $('body').css({
    'paddingTop': 0
   })
  }
});
});

$("#about-me").on("click", () => {
  $(".profile-pic").focus();
});

$("#skills").on("click", () => {
  $(".skill-focus").focus();
});

$("#contact").on("click", () => {
  $(".btn").focus();
});

var i = 0;

function typeWriter() {
  var txt = "Junior FullStack Developer";
  var speed = 100;
  if (i < txt.length) {
    document.getElementById("dev-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

$(function(){
  new WOW().init();
});

});
