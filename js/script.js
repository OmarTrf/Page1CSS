$(function(){
  $(window).scroll(function(){
     var scroll = $(this).scrollTop();
     if(scroll > 250){
     	$('.scroll-nav').slideDown();
     }else{
     	$('.scroll-nav').slideUp();
     }
  });
});