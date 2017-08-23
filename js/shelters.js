var zipCode = $('#zip').val();
var $sheltersHeaderElem = $('#shelters-header');
var $sheltersElem = $('#shelters');
var petfinderUrl = 'http://api.petfinder.com/shelter.find?format=json&key=534be8121199bc85bc6fb883bdac6b6d&location=' + zipCode

$.getJSON(petfinderUrl, function(data) {
    $sheltersHeaderElem.text('List of shelters near ' + zipCode);
    shelters = data.response.docs;
    for (var i = 0; i < shelters.length; i++) {
        var shelter = shelters[i];
        $sheltersElem.append('<li class="shelter">' +
            '<a href="'
            +shelter.web_url + '">' + shelter.name + '</a>' + '</li>');
    };

});
http://api.petfinder.com/auth.getToken?key=534be8121199bc85bc6fb883bdac6b6d&sig=9b60283c5a1b37eb0c59019cd2ae164d
// API key: 534be8121199bc85bc6fb883bdac6b6d
//Secret: e608997de757203c7f2e138397d4d5af
//e608997de757203c7f2e138397d4d5afkey=534be8121199bc85bc6fb883bdac6b6d

//9b60283c5a1b37eb0c59019cd2ae164d
//http://api.petfinder.com/shelter.find?format=json&key=534be8121199bc85bc6fb883bdac6b6d&location=63109&token=67890&sig=abcdef
