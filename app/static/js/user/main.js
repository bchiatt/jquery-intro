/* global $, document */
// alert('hey i am annoying!');

(function(){
  'use strict';

  var a = 3,
      b = 2;

  $(document).ready(initialize);

  function initialize(){
    $('div').css('color', 'red');
    $('h2').text('Brian Hiatt').css('font-size', '50px').fadeOut(2000).fadeIn(2000);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');
    console.log('the dom is now ready!');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(makeColor);
    $('#fade-in').click(makeFadeIn);
    $('#fade-out').click(makeFadeOut);
  }

  function makeRed(){
    $('body').css('background-color', 'red');
    console.log('you clicked the red button');
  }

  function makeYellow(){
    $('body').css('background-color', 'yellow');
    console.log('you clicked the yellow button');
  }

  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
    console.log('you clicked the yellow button');
  }

  function makeFadeIn(){
    var time = $('#fade-time').val() *1;
    $('footer').fadeIn(time);
  }

  function makeFadeOut(){
    var time = $('#fade-time').val() *1;
    $('footer').fadeOut(time);
  }

  console.log('the dom is NOT ready');
  console.log(a, b);
})();
