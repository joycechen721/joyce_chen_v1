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

const cards = 3;
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
    $("#" + (index + j)).css("display", "inline-block");
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

var container = document.getElementById('animate');
var emoji = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];
var circles = [];

for (var i = 0; i < 15; i++) {
  addCircle(i * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
}



function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 10
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 800) {
      _this.y = 80 + Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

// animate();
