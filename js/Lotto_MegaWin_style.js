// banner
$(window).scroll(function () {
  var currentscrollTop = $(window).scrollTop();
  if (currentscrollTop >= 50) {
      if (!$('.header').hasClass('replace')) { //被分配給定的class屬性
          $('.header').addClass('replace') //添加一個class屬性
      }
  } else {
      if (!$('.toggle-nav').hasClass('active')) {
          $('.header').removeClass('replace')
      }
  }
})