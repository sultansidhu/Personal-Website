$(function(){
    
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.project').eq(clickedIndex).addClass('active');
  });
  
});