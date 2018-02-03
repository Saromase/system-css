var galaxy = [
    {
        name : 'Star-One',
        type : 'star',
        size : 'large',
        color : 'yellow',
        location : 0,

    },
    {
        name : 'Planet-One',
        type : 'planet',
        size : 'small',
        color : 'grey',
        location : 1

    },
    {
        name : 'Planet-Two',
        type : 'planet',
        size : 'small',
        color : 'orange',
        location : 2
    },
    {
        name : 'Planet-Three',
        type : 'planet',
        size : 'small',
        color : 'red',
        location : 3
    },
    {
        name : 'Planet-Four',
        type : 'planet',
        size : 'small',
        color : 'blue',
        location : 4
    },
];

$(document).ready(function() {
    console.log(galaxy)
    for (var i = 0; i < galaxy.length; i++) {
        var systemObject = galaxy[i];
        var div = $('<div></div>');
        div.addClass(systemObject.type).addClass(systemObject.size).addClass(systemObject.size).addClass(systemObject.color).addClass('location-' + systemObject.location);
        $('#galaxy').append(div);

    }
});
