jQuery(function($) {

  //Preloader
  var preloader = $('.preloader');
  $(window).load(function(){
    preloader.remove();
  });

  //#main-slider
  var slideHeight = $(window).height();
  $('#home-slider .item').css('height',slideHeight);

  $(window).resize(function(){'use strict',
    $('#home-slider .item').css('height',slideHeight);
  });
  
  //Scroll Menu
  $(window).on('scroll', function(){
    if( $(window).scrollTop()>slideHeight ){
      $('.main-nav').addClass('navbar-fixed-top');
    } else {
      $('.main-nav').removeClass('navbar-fixed-top');
    }
  });
  
  // Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });

  $('.navbar-collapse ul li a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

  // User define function
  function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-collapse').find('.scroll a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top);
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
      if ( winTop > contentTop[i] - rangeTop ){
        $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');      
      }
    })
  };

  $('#tohash').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });
  
  //Initiat WOW JS
  new WOW().init();
  //smoothScroll
  smoothScroll.init();



  if($(".trending-items").length > 0){
  $(".trending-items .outer").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    autoplay:true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
            }
    }
        ]
  });
}

  if($(".from-blog").length > 0){
  $(".from-blog .outer").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots:false,
    autoplay:false,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
            }
    }
        ]
  });
  }


});