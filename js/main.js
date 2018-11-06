
 $(function() {

// // parallax

// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();
//     $('.logo').css({
//         'transform' : 'translate(0px, '+wScroll /2 +'%)'
//     });
//     $('.back-bird').css({
//         'transform' : 'translate(0px, '+wScroll /4 +'%)'
//     });
//     $('.fore-bird').css({
//         'transform' : 'translate(0px, -'+wScroll /30 +'%)'
//     });
// });

// sticky
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if (scroll <10) {
        $(".main-menu-area").removeClass("sticky");
    }else{
        $(".main-menu-area").addClass("sticky");
    }
});

// // second img section
// if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

//     $('.clothes-pics .img-area').each(function(i){

//       setTimeout(function(){
//         $('.clothes-pics .img-area').eq(i).addClass('is-showing');
//       }, 150 * (i+1));
//     });

//   }

// });



$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
  
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
  
    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });
  
    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });
  
    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
  
      $('.clothes-pics .img-area').each(function(i){
  
        setTimeout(function(){
          $('.clothes-pics .img-area').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
  
    }
  
  });
  

});