$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar");
    var $top = $(".top-container")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$("div.collapse").hide();

$("button").click(function(){
  $("div.collapse").toggle("slide");
});

function myFunction(){
  var x = document.getElementById("topNav");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}
