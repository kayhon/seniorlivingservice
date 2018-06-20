$(function () {
    $("create-form").on("submit", function(event) {
        //preventDefault on a submit event.
        event.preventDefault();

        var newRequest = {
            name: $("#name").val().trim(),
            serv: $("#serv").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            zip: $("#zip").val().trim()
        };
        //send the POST request.
        $.ajax("/api/request", {
            type: "POST",
            data: newRequest
        }).then( function() {
            console.log("created new request");
            location.reload();
        });
    });

});


// Start of api logic


var locationInput = "";
var typeInput = "";
var address = "";

// $('#targetdiv').empty();


// defines the variables used for the api call
function setQuery() {
    location = $("#zip").val().trim();
    service = $("#service").val().trim();
    console.log(location);
    console.log(service);
};

function appendHTML(img , name , address, phone , rating ) {
    var businessCard = "";
    businessCard += "<div class='container' id='pinned_bizzcard'>"
    businessCard += "<img id='thumbnailimg' src=" + img + ">"
    businessCard += "<div class='card-body textWrap'>"
    businessCard += "<h5 id='bizzName'>" + name + "</h5>"
    businessCard += "<p class='card-text' id='address1'>Address:" + address + "</p>"
    businessCard += "<p class='card-text' id='phoneNumber1'>Phone Number:" + phone + "</p>"
    businessCard += "<p class='card-text' id='rating1'>Ratings:" + rating + "</p>"
    businessCard += "</div>"
    businessCard += "</div>"
    
    $("body").append(businessCard);
 
};

function detailsCall() {


    var request = {
      placeId: idPass
    };

    service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);



    function callback(resultsTwo, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(resultsTwo);
        console.log(resultsTwo.photos[0].getUrl({"maxWidth":300,"minWidth":300}));
        console.log(resultsTwo.name);
        console.log(resultsTwo.formatted_address);   
        console.log(resultsTwo.rating);
        // function appendHTML(img , name , phone , rating )
        appendHTML(resultsTwo.photos[0].getUrl({"maxWidth":200,"minWidth":200}) , resultsTwo.name , resultsTwo.formatted_address , resultsTwo.formatted_phone_number , resultsTwo.rating)
      }
    }
};

function callApi() {
    var geocoder = new google.maps.Geocoder();
    var address = location;
    var queryLatLng = "";
    var idPass = "";
    var photoRef = "";


    if (geocoder) {
        geocoder.geocode({ 'address': address }, function (results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                // defining the lat and lng for the next part of the api call
                queryLatLng = new google.maps.LatLng(results[0].geometry.location.lat(),results[0].geometry.location.lng());
            }
            else {
                console.log("Geocoder failed: " + status);
            }

            var request = {
                location: queryLatLng,
                radius: '5000',
                keyword: [service]
            };

            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    console.log(results);
                    for (var i = 0; i < results.length; i++){
                        var place = results[i];
                        console.log(results[i]);
                        idPass = results[i].place_id;
                        console.log(idPass);
                        detailsCall();

                    }
                    // id needed for a details call will be results[i].place_id
                }
            }
        })
    }


}


$('#placeholderBtnId').on("click", function() {
    event.preventDefault();
    setQuery();
    callApi();
})

