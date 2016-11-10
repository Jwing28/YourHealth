$(document).ready(function() {
  var results = {};
  var bmr = 0;
  var bmi = 0;
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

  bmi = Math.round((results.weight / (Math.pow(results.height,2)) ) * 703);

  $('#bmi').append(bmi);

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

  var test = [{limit:25},bmi];
  var bmr = [{limit:50}, {limit:32}, {user:40}]

  // BMI attempt - 1. get two shapes going and one overlay the other
  // 2 - get data from user into d3

  // d3

  //.data joins test array data to current (not yet exist)
  //p selection
  var svgContainer = d3.select('.d3').append('svg')
                                     .attr('width',100)
                                     .attr('height',100);

  var rectangles = svgContainer.selectAll('rect')
                               .data(test)
                               .enter()
                               .append('rect');

  var rectAttributes = rectangles
                          .attr('x',function (d) {
                            return typeof d === 'object' ? 25-9:d;
                          })
                          .attr('y',function (d) {
                            return typeof d === 'object' ? 25:d;
                          })
                          .attr('height', function(d) {
                            return typeof d === 'object' ? 25:d;
                          })
                          .attr('width', function(d) {
                            return typeof d === 'object' ? 25 * 10:d * 10;
                          })
                          .style('fill',function(d) {
                            return d < 25 ? 'lightblue':'gray';
                          });                                   

  var svgContainerBMR = d3.select('.bmr').append('svg')
                                     .attr('width',200)
                                     .attr('height',200);

  var rectanglesBMR = svgContainerBMR.selectAll('rect')
                               .data(bmr)
                               .enter()
                               .append('rect');                                                                    

  var rectAttributesBMR = rectanglesBMR
                          .attr('x',function (d) {
                            return d.limit || d.user;
                          })
                          .attr('y',function (d) {
                            return d.limit || d.user;
                          })
                          .attr('height', function(d) {
                            return d.limit / 2 || d.user / 2;
                          })
                          .attr('width', function(d) {
                            return d.limit * 10 || d.user * 10;
                          })
                          .style('fill',function(d) {
                            if(d.limit > 35){
                              return 'darkred';
                            }else if(d.limit < 35 && d.limit > 30){
                              return 'gray';
                            }
                            return 'lightblue'
                          });                            



















});