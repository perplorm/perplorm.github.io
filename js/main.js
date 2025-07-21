var $window = $(window);

$window.on('load', function() {
    var $jumper = $('.jumper');
    $window.scroll(function(){
        var visible = $window.scrollTop() > 150;
        $jumper.css('opacity', visible ? 1 : 0);
    });
});