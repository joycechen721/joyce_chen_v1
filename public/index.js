$(function () {
  $(document).scroll(function () {
    $(".nav-bar").toggleClass('scrolled', $(this).scrollTop() > $(".nav-bar").height());
  });
});

$(".collapse").hide();
$(".links-button").click(function(){
  $(".collapse-side").toggle("slide");
});
$("#algo1").click(function(){
  $(".collapse1").toggle("slideDown");
});
$("#duke").click(function(){
  $(".collapse2").toggle("slideDown");
});
$("#udemy").click(function(){
  $(".collapse3").toggle("slideDown");
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
  if ($(this).is("#3")){
    $("#taiwan").toggleClass("overlay-show");
  }
  else if ($(this).is("#0")){
    $("#concerts").toggleClass("overlay-show");
  }
  else if ($(this).is("#1")){
    $("#covid").toggleClass("overlay-show");
  }
  else if ($(this).is("#2")){
    $("#friends").toggleClass("overlay-show");
  }
  else if ($(this).is("#4")){
    $("#trips").toggleClass("overlay-show");
  }
}

$(".life-img").hover(showDes);

const cards = 5;
let slideIndex = 0;
let num;
const single = window.matchMedia("(max-width: 1000px)");
const double = window.matchMedia("(max-width: 1400px)");

single.addListener(slideNumber);
double.addListener(slideNumber);

slideNumber();

function slideNumber() {
  if (single.matches) {
    num = 1;
  }
  else if (double.matches) {
    num = 2;
  }
  else num = 3;
  showSlides(slideIndex, num);
}


function plusSlides(n) {
  showSlides(slideIndex += n, num);
}

function showSlides(index, num) {
  let i;
  let button = $(".button2")
  if (index >= cards) {slideIndex = 0}
  if (index < 0) {slideIndex = cards - 1}
  var j = 0;
  while(j < num){
    if (index + j >= cards) index -= cards;
    if (index + j < 0) index = cards - 1;
    button.before($("#" + (index + j)));
    $("#" + (index + j)).css("display", "block");
    console.log("append " + (index + j));
    j++;
  }
  var k = 0;
  var temp = index + num;
  while(k < cards - num){
    if (temp + k >= cards) temp -= cards;
    $("#" + (temp + k)).css("display", "none");
    console.log("remove " + (temp+k));
    k++;
  }
}
