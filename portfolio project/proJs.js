// scroll btn 

$(function(){
 if ($(window).scrollTop()>="250") $("#ToTop").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()<="250") $("#ToTop").fadeOut("slow")
   else $("#ToTop").fadeIn("slow")
 });

 if ($(window).scrollTop()<=$(document).height()-"999") $("#OnBottom").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()>=$(document).height()-"999") $("#OnBottom").fadeOut("slow")
   else $("#OnBottom").fadeIn("slow")
 });

 $("#ToTop").click(function(){$("html,body").animate({scrollTop:0},1000)})
 $("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},1000)})
});
       


//slider our work
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin:20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 3000
  });
});



//show main menu button

document.getElementById('topMenu').onclick = () => { setTimeout(function(){
    
document.getElementById("menuShow").classList.toggle("show")},350);
       
};

/////////map toogle 

document.querySelector('.pannelToogle').onclick = () => {
 
document.querySelector('.getLocations').classList.toggle('showMap');    
};






