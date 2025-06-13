$(document).ready(function () {
  'use strict';
  var windowHeight = $(window).height();
  $('body').height(windowHeight);

  $(".main-loader  .pulse-logo").fadeOut(500, function () {
    $(this).parent().fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $(this).remove();
      $('body').height("100%");
    });
  }
  );
})