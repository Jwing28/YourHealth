$(document).ready(function() {
  //works
  console.log( document.getElementById('test').innerHTML );  

  $('.activityLvl').on('click','a',function(event){
    event.preventDefault();
    $('.activityLvl a').removeClass('bg-success');
    $(this).addClass('bg-success');
  });
})