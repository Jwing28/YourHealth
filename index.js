$(document).ready(function() {
  
  $('.activityLvl').on('click','tr',function(event){
    event.preventDefault();
    $('.activityLvl tr').removeClass('bg-success');
    $(this).addClass('bg-success');
  });

  $('.activityLvl').on('click','a',function(event){
    event.preventDefault();
    $('.activityLvl a').parent().eq(0).removeClass('bg-success');
    $(this).parent().eq(0).addClass('bg-success');
  });  


});