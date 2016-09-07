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

  if(wScroll > $('.promo-scope').offset().top - $(window).height()){
    $('.promo-scope').css({'background-position':'center '+ (wScroll - $('.promo-scope').offset().top) +'px'});
  }

  // Floating Elements

  if(wScroll > $('.blog-post').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-post').offset().top +$(window).height() - 350)).toFixed();

    $('.blog-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.blog-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }

});
