$(document).ready(function(){
  $('.offers__list').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
    speed: 450,
    infinite: false,
    touchMove: false,
    waitForAnimate: false,
    responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 554,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  });
});