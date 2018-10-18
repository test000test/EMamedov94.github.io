'use strict';

$(document).ready(function () {

  // Scroll down button

  $('.btn-scrl-dwn').click(function () {
    $('html,body').animate({ scrollTop: $('header').height() + 20 }, 600);

    return false;
  });
});