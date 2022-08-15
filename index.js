$(function () {
  $(document).scroll(function () {
    $(".nav-bar").toggleClass('scrolled', $(this).scrollTop() > $(".nav-bar").height());
  });
});

$("div.collapse").hide();

$(".links-button").click(function(){
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

function showDes(){
  if ($(this).is("#0")){
    $("#taiwan").toggleClass("overlay-show");
    $("#concerts").removeClass("overlay-show");
    $("#covid").removeClass("overlay-show");
  }
  else if ($(this).is("#1")){
    $("#concerts").toggleClass("overlay-show");
    $("#taiwan").removeClass("overlay-show");
    $("#covid").removeClass("overlay-show");
  }
  else if ($(this).is("#2")){
    $("#covid").toggleClass("overlay-show");
    $("#concerts").removeClass("overlay-show");
    $("#taiwan").removeClass("overlay-show");
  }
}

$(".life-img").click(showDes).hover(showDes);

const cards = 5;
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(index) {
  let i;
  let button = $(".button2")

  if (index >= cards) {slideIndex = 0}
  if (index <= 0) {slideIndex = cards}

  var j = 0;
  while(j < 3){
    if (index + j >= cards) index -= cards;
    button.before($("#" + (index + j)));
    $("#" + (index + j)).css("display", "block");
    console.log("append " + (index + j));
    j++;
  }

  var k = 0;
  var temp = index + 3;
  while(k < cards - 3){
    if (temp + k >= cards) temp -= cards;
    $("#" + (temp + k)).css("display", "none");
    console.log("remove " + (temp+k));
    k++;
  }
}
