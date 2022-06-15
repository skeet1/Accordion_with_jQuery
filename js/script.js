$(document).ready(function() {
    $(".one").click(function() {
        $(".p_two, .p_three, .p_four").slideUp(300);
        $(".p_one").slideToggle(1000);
        $(".four").css('borderRadius', '0 0 15px 15px');
    })
    $(".two").click(function() {
        $(".p_one, .p_three, .p_four").slideUp(300);
        $(".p_two").slideToggle(1000);
        $(".four").css('borderRadius', '0 0 15px 15px');
    })
    $(".three").click(function() {
        $(".p_two, .p_one, .p_four").slideUp(300);
        $(".p_three").slideToggle(1000);
        $(".four").css('borderRadius', '0 0 15px 15px');
    })
    $(".four").click(function() {
        $(".four").css('borderRadius', '0px');
        $(".p_two, .p_three, .p_one").slideUp(300);
        $(".p_four").slideToggle(1000);
        $(".p_four").css('borderRadius', '0px 0px 15px 15px');
    })
});