'use strict';

$(document).ready(function() {
    $('.parrafo').hover(function() {
        $(this).addClass('borde');
    },function() {
        $(this).removeClass('borde')
    })
})