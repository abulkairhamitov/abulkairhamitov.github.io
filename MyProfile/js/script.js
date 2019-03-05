$('h3').click(function() {
    $('nav').addClass('menu menu_active');
});
$('p').click(function() {
    $('nav').removeClass('menu menu_active');
});

$('h2').click(function() {
    $('.folders_container').addClass('folders_container_active');
});
$('p').click(function() {
    $('nav').removeClass('menu menu_active');
});