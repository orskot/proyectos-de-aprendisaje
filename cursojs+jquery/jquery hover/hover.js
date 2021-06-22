'use strict';

$(document).ready(function(){
$('#btn').html('PASA EL RATON');

$('#btn').hover(function(){
    $('#btn').html('SACA EL RATON');
    $('#texto').show(500);
}, function(){
    $('#btn').html('PASA EL RATON');
    $('#texto').hide(500);
})
});