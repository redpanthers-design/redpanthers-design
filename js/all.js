// This is where it all goes :)

'use strict';

$(document).ready(function(){
  $('.portfolio-image-slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    infinite:true
  })

  var portfolioPageSlider = $('.portfolio-screen-shots');
  if(portfolioPageSlider.length > 0){
    portfolioPageSlider.slick({
      slidesToShow:1,
      slidesToScroll:1,
      infinite:true,
      arrows: true
    })
  }
});