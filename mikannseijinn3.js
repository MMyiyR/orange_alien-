$(function() {
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    // 速度
    $('#bg2').css('top', '200 ' - ( y / 20 ) + 'px');
    $('#bg3').css('top', '0 ' - ( y / 4 ) + 'px');
    $('#hanabi_1').css('top', '1000 ' - ( y / 2 ) + 'px');
    $('#hanabi_2').css('top', '1250 ' - ( y / 0 ) + 'px');
    $('#hanabi_3').css('top', '1650 ' - ( y / 2 ) + 'px');
    $('#hanabi_4b').css('top', '2300 ' - ( y / 1.5 ) + 'px');
    $('#hanabi_4').css('top', '2300 ' - ( y / 1.5 ) + 'px');
    $('#hanabi_4a').css('top', '2200 ' - ( y / 1.8 ) + 'px');

    // 表示非表示
    if (y >= 200 && y <= 500) {
      $('#hanabi_1').fadeIn(1000);
    } else {
      $('#hanabi_1').fadeOut(1000);
    }

    if (y >= 700 && y <= 900) {
      $('#hanabi_2').fadeIn(800);
    } else {
      $('#hanabi_2').fadeOut(800);
    }

    if (y >= 800 && y <= 1000) {
      $('#hanabi_3').fadeIn(1200);
    } else {
      $('#hanabi_3').fadeOut(1500);
    }

    if (y >= 800 && y <= 1000) {
      $('#hanabi_4b').fadeIn(1200);
    } else {
      $('#hanabi_4b').fadeOut(1500);
    }

    if (y >= 1000 && y <= 1200) {
      $('#hanabi_4').fadeIn(1200);
    } else {
      $('#hanabi_4').fadeOut(1500);
    }

    if (y >= 1200 && y <= 1400) {
      $('#hanabi_4a').fadeIn(1200);
    } else {
      $('#hanabi_4a').fadeOut(1500);
    }

    if (y >= 2800 && y <= 3500) {
      $('#hanabi_5').fadeIn(700);
    } else {
      $('#hanabi_5').fadeOut(1000);
    }
  });
});
