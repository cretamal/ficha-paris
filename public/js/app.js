app={
  init:function(){
    var dirScroll;
    // console.log('app init');
    $('[data-fancybox]').fancybox({
      youtube : {
        controls : 0,
        showinfo : 0,
        css : {
          width: '100%',
          height: '100%'
        }
      },
      vimeo : {
        color : 'f00'
      }
    });

    $('.ficha-2020-samsung .banner-4 .btns .left').on('click',function(){
      $('.ficha-2020-samsung .banner-4 .btns .rigth h3').removeClass('active');
      $('.ficha-2020-samsung .banner-4 .btns .left h3').addClass('active');
      $('.ficha-2020-samsung .banner-4 .note20').css('display','grid');
      $('.ficha-2020-samsung .banner-4 .note20-ultra').css('display','none');
    });
    $('.ficha-2020-samsung .banner-4 .btns .rigth').on('click',function(){
      $('.ficha-2020-samsung .banner-4 .btns .left h3').removeClass('active');
      $('.ficha-2020-samsung .banner-4 .btns .rigth h3').addClass('active');
      $('.ficha-2020-samsung .banner-4 .note20').css('display','none');
      $('.ficha-2020-samsung .banner-4 .note20-ultra').css('display','grid');
    });

    // var waypoint = new Waypoint({
    //   element: document.getElementById('p2'),
    //   handler: function(direction) {
    //     if(direction === 'down'){
    //       $('.ficha-2020-samsung .banner-1 .scrolling').addClass('rotateScrolling');
    //       dirScroll = 'up';
    //     }
    //   }
    // });
    var waypoint = new Waypoint({
      element: document.getElementById('p1'),
      handler: function(direction) {
        if(direction === 'up'){
          $('.ficha-2020-samsung .banner-1 .scrolling').removeClass('rotateScrolling');
          dirScroll = 'down';
        }else{
          $('.ficha-2020-samsung .banner-1 .scrolling').addClass('rotateScrolling');
          dirScroll = 'up';
        }
      }
    });
    

    $('.ficha-2020-samsung .banner-1 .scrolling').on('click', function(){
      if(dirScroll === 'up'){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    });

  }
}

$(function(){
  app.init();
});