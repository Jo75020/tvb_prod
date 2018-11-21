$(window).scroll(function() {
  var sc = 250
  var scroll_position = $(window).scrollTop()
  var w_logo = document.getElementById("white-logo")
  var b_logo = document.getElementById("div-logo-black")
  var mid_text = document.getElementById("text-middle")

    if ( scroll_position >= sc &&  w_logo.style.opacity != '0'  ) {
      w_logo.style.opacity = '0';
      w_logo.style.transition = '0.6s';
      b_logo.style.opacity = '0.5';
      mid_text.style.opacity = '1';
    }
    if ( scroll_position <= sc &&  w_logo.style.opacity == '0' && scroll_position <= 1500 ) {
      w_logo.style.opacity = '1';
      b_logo.style.opacity = '0';
      mid_text.style.opacity = '0';
    }
    if ( scroll_position >= 1051  ) {
      w_logo.style.opacity = '1';
      w_logo.style.transition = '0.6s';
      b_logo.style.opacity = '0';
      mid_text.style.opacity = '0';
    }
});

 $(function() {
    $('#go-us').click (function() {
      $("html, body").animate({ scrollTop: 700 }, 600);
      return false;
    });
    $('#go-event').click (function() {
      $("html, body").animate({ scrollTop: 1670 }, 600);
      return false;
    });
    $('#go-up').click (function() {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
