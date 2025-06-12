$(document).ready(function () {
  "use strict";
  var windoh = $(window).height();
  $("body").height(windoh);

  $(".component-stert  .component--intro ").fadeOut(1000, function () {
    $(this)
      .parent()
      .fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(this).remove();
        $("body").height("100%");
      });
  });
});
