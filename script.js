$(document).ready(function(){
    $("#buttons > a").click(function(){
        var myId = $(this).attr('id');
        // $('.image_Umra > .active').removeClass('active');
        $('.image_Umra > img').attr('alt', 'imagesL2/' + myId + '.png')
        // var i = $('.image_Umra img').length;
        // while(i--) {
        //     if ($($('.image_Umra img')[i]).attr('alt', 'asd') === myAttr) {
        //         $($('.image_Umra img')[i]).addClass('active');
        //     };
        // }
        $('.info_Umra').text(obj[myId]);
    });
});

var text1 = 'asdasdsa';
var text2 = 'asdasdsa';
var text3 = 'asdasdsa';

var arr = [
    'asdadwdwd',
    'awdsefsrfs',
    'awdwad'
];
var obj = {
    umra: 'awkdyawjkdgkawygd',
    hadj: 'lauwawldiwauhd',
    hotels: 'asdlhgkrgkerkjhrkfjer'
}
