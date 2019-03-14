document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        $(".loading").fadeOut()
    }
}

$(window).on('load',function () {
/*
var $home = $('#yu'),
    $hom = $home.find('#imm');
$hom.fadeIn();
$home.delay(950).fadeOut(1000);
*/

/*$('body').fadeIn(1500);*/


    /*录播图*/
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});

