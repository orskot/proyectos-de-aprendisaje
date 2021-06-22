'use strict';

$(document).ready(function(){
    $('#btnmostrar').click(function(){
        $('#texto').html('Acabas de pulsar el boton');
    });
    $('#btnocultar').click(function(){
        $('#texto').hide(1500);
//      $('#texto').show(1500);
    });
});