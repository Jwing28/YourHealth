$(document).ready(function() {
  var results = {};

  results.name = localStorage.getItem('name');
  results.sex = localStorage.getItem('sex');
  results.age = localStorage.getItem('age'); 
  results.height = localStorage.getItem('height');
  results.weight = localStorage.getItem('weight');
  results.multiplier = localStorage.getItem('activityMultiplier');
  $('.results').append(JSON.stringify(results));
});