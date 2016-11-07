// This is where it all goes :)

'use strict';

$(document).ready(function(){

  var portfolioImageSlider = $('.portfolio-image-slider');
  if(portfolioImageSlider.length > 0){
    portfolioImageSlider.slick({
      slidesToShow:1,
      slidesToScroll:1,
      infinite:true
    })
  }


  var portfolioPageSlider = $('.portfolio-screen-shots');
  if(portfolioPageSlider.length > 0){
    portfolioPageSlider.slick({
      slidesToShow:1,
      slidesToScroll:1,
      infinite:true,
      arrows: true
    })
  }
  var feedbackSlider = $('.feedback-sliders');
  if(feedbackSlider.length > 0){
    
    feedbackSlider.slick({
      slidesToShow:1,
      slidesToScroll:1,
      infinite:true,
      dots:true,
      arrows: true
    })
  }

});