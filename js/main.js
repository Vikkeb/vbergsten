
jQuery(document).ready(function($) {

  $(window).load(function(){
    $('#preloader').fadeOut(1200,function(){$(this).remove();});
    });

    $('.my-gallery').slick({
      lazyLoad: 'ondemand',
      infinite: 'false',
      rows: 2,
      slidesToShow: 4,
    });
    $('.my-gallery').slickLightbox({
      itemSelector: 'li > a'
    });

    $('.my-gallery-work').slick({
      lazyLoad: 'ondemand',
      infinite: 'false',
      rows: 1,
      slidesToShow: 4,
    });

    $('.my-gallery-work').slickLightbox({
      itemSelector: 'li > a'
    });

    $('#fullpage').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors:['home', 'work', 'skill', 'experience', 'contact'],
      verticalCentered: true,
      autoScrolling:true,
      loopHorizontal: false,
      scrollHorizontally: true,
      menu: '.side',
      navigation: true,
      fixedElements: '.side',
      afterRender: function() {
       $('.ux').fadeTo( 1, 0 );
       $('.work_blur_bg').css({ "filter": "blur(0px)" });
     },
      afterLoad: function() {
        $('.ux').fadeTo( 500, 1 );
        $('.work_blur_bg').css({ "filter": "blur(10px)" });
      }

    });

});
