$(document).ready(function() {
$('.list').sortable({connectWith: ".list",
                       tolerance: 'pointer',
                      });

$('.list1').bind('sortstop', function(event, ui) {
        var idx = $('.list2').children().index($(ui.item[0]))-1,
            elm = $(ui.item[0]).clone(true);
 $('.list2').children(':eq('+idx+')').after(elm);
        $(this).sortable('cancel');
});
});