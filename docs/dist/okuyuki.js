$(function() {
    $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('#bg01').css('background-position', '0 ' + parseInt( -y / 5 ) + 'px');
    $('#bg02').css('background-position', '0 ' + parseInt( -y / 10 ) + 'px');
    $('#bg03').css('background-position', '0 ' + parseInt( -y / 30 ) + 'px');
    });
    });