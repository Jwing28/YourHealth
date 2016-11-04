$(document).ready(function() {
  //works
  console.log( document.getElementById('test').innerHTML );  

  $('.activityLvl').on('click','a',function(event){
    event.preventDefault();
    $('.activityLvl a').removeClass('activitySelected');
    $(this).addClass('activitySelected');
  });
})