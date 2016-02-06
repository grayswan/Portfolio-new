var mn = $(".nav");

$(window).scroll(function () {
  if( $(this).scrollTop() > 820 ) {
    mn.addClass(".nav-scrolled");
  }
  else {
    mn.removeClass(".nav-scrolled");
  }
});
