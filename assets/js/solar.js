var galaxy = [
    {
        name : 'Sun',
        type : 'star',
        size : 'x-large',
        color : 'yellow',
        location : 0,

    },
    {
        name : 'Mercury',
        type : 'planet',
        size : 'small',
        color : 'grey',
        location : 1

    },
    {
        name : 'Venus',
        type : 'planet',
        size : 'medium',
        color : 'orange',
        location : 2
    },


];

$(document).ready(function() {
    console.log(galaxy)
    for (var i = 0; i < galaxy.length; i++) {
        var current = galaxy[i];
        var toto = $('#galaxy').append('<div class="'+ current.type + ' ' + current.size+ ' ' + current.color + ' location-'+ current.location + '"></div>');
        toto.addClass('tutu')
    }
});
