$(document).ready(function() {
  $("button#change").click(function() {
      $("body").removeClass();
      $("body").addClass("black");
  });
  $("button#changeBack").click(function() {
    $("body").removeClass();
    $("body").addClass("white");
  });
});
