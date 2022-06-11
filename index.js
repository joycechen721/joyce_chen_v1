$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar");
    var $top = $(".top-container")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
