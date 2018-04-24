

jQuery(document).ready(function($) {

  $('#preloader').fadeOut(1200,function(){$(this).remove();});

  $('#fullpage').fullpage({
    menu: '#pure-menu-list',
    anchors:['about', 'work', 'skills','contact'],
    scrollBar: true
  });
  $('.my-gallery').slick({
    lazyLoad: 'ondemand',
    infinite: 'false',
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $('.my-gallery').slickLightbox({
    itemSelector: 'li > a'
  });

});

  window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#photoshop', { color: '#07caff', duration: 3000, easing: 'easeInOut'});
    circle.animate(0.9);
    var circle = new ProgressBar.Circle('#illustrator', { color: '#fa7600', duration: 3000, easing: 'easeInOut'});
    circle.animate(0.7);
    var circle = new ProgressBar.Circle('#indesign', { color: '#ff3891', duration: 3000, easing: 'easeInOut'});
    circle.animate(0.95);
    var circle = new ProgressBar.Circle('#axure', { color: '#a60000', duration: 3000, easing: 'easeInOut'});
    circle.animate(0.8);
    var circle = new ProgressBar.Circle('#balsamiq', { color: '#a502b3', duration: 3000, easing: 'easeInOut'});
    circle.animate(1);
    var circle = new ProgressBar.Circle('#programming', { color: 'rgba(0, 0, 0, 0.87)', duration: 3000, easing: 'easeInOut'});
    circle.animate(0.75);
  };
