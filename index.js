$(document).ready(function() {
  var activityLvl = ""; //activity level on selection
  $('.activityLvl').on('click','tr',function(event){
    event.preventDefault();
    $('.activityLvl tr').removeClass('bg-success');
    $(this).addClass('bg-success');   
    activityLvl = $(this)[0].innerText;
  });

  $('form').on('submit',function(event){
    event.preventDefault(); //prevent pg refresh
    var inputs = $('form :input');//arr
    var keys = ['name','sex','age','height','weight'];
    //localStorage for persistant data across html files
    localStorage.setItem('activityMultiplier', parseFloat(activityLvl.slice(0,3))  );

    inputs.each(function(index,value){
      localStorage.userInput[keys[index]] = value.value;
      localStorage.setItem(keys[index],value.value)
    });
    //generated to send user to results page
    $('#summary').append('See Results');
    $('#summary').addClass('bg-success');
    $('#summary').css('font-size','20px');
  });
});

