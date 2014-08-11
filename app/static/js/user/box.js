/* global document, $ */

(function(){
  'use strict';

  $(document).ready(function init(){
    $('#add-boxes').click(addBoxes);
  });

  function addBoxes(){
    var num = $('#box-num').val() * 1,
        i,
        $box,
        value,
        type;

    $('#boxes').empty();
    for(i = 0; i < num; i++){
      value = (i % 2) ? i * i * i : i * i;
      type  = (i % 2) ? 'odd' : 'even';

      $box = $('<div>');
      $box.text(value);
      $box.addClass('box').addClass(type);
      $('#boxes').append($box);
    }
  }

})();
