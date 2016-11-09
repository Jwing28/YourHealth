$(document).ready(function() {
  var results = {};
  var bmr = 0;
  results.name = localStorage.getItem('name');
  results.sex = localStorage.getItem('sex');
  results.age = localStorage.getItem('age'); 
  results.height = localStorage.getItem('height');
  results.weight = localStorage.getItem('weight');
  results.multiplier = localStorage.getItem('activityMultiplier');
  
  $('#name').append(" " + results.name);
  $('#sex').append(" " + results.sex);
  $('#age').append(" " + results.age);
  $('#height').append(" " + results.height);
  $('#weight').append(" " + results.weight);

  $('#bmi').append(Math.round((results.weight / (Math.pow(results.height,2)) ) * 703));

  if(results.sex === 'male') {
    bmr = bmrMen(results.height, results.weight, results.age)
    $('#bmr').append(bmr);
  }else {
    bmr = bmrWomen(results.height, results.weight, results.age);
    $('#bmr').append(bmr);
  }

  $('#maintenance').append('Calories/day to maintain weight: ' + maintainWeight(bmr, results.multiplier));

  //BMR = (10 × weight in kg) + (6,25 × height in cm) - (5 × age in years) + 5
  function bmrMen (height, weight, age) {
    return ((5 * weight) + (8.5 * height) - (5 * age) + 5).toFixed(2);
  }

  //BMR = (10 × weight in kg) + (6,25 × height in cm) - (5 × age in years) - 161
  function bmrWomen(height, weight, age) {
    return ((5 * weight) + (8.5 * height) - (5 * age) - 161).toFixed(2);
  }  

  function maintainWeight(bmr, multiplier){
    return (bmr * multiplier).toFixed(2);
  }

  // d3
  d3.select('.d3')
    .append('svg')
    .attr('height',50)
    .attr('weight',50)
    .append('circle')
    .attr('cx',25)
    .attr('cy',25)
    .attr('r',5)
    .style('fill','purple')
});