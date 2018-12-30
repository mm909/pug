var pContainerHeight = $('.bird-box').height();

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  });

  $('.back-bird').css({
    'transform': 'translate(' + wScroll / 100 + 'px, ' + wScroll / 4 + '%)'
  });

  $('.fore-bird').css({
    'transform': 'translate(0px, -' + wScroll / 60 + '%)'
  });
});