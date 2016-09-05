var pContainerHeight = $('header').height();

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });
  }

  if(wScroll  > $('.container').offset().top - ($(window).height() / 1.2)) {
       $('.container ul li').each(function(i){
         console.log(i);
         setTimeout(function() {
           $('.container ul li').eq(i).addClass('animate-items');
         },(700 * (Math.exp(i * 0.14))) - 700);
       });
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){
    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
  }
});
