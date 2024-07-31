$(document).ready(function(){
    $("#hide").click(function(){
      $("#img").hide();
    });
    $("#show").click(function(){
      $("#img").fadeToggle(800);
    });
  });