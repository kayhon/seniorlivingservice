$(document).ready(function() {
    $('#submitBtn').on("click", function () {
        event.preventDefault();

        var newRequest = {
            name: $("#name").val().trim(),
            serv: $("#services option:selected").text(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            zip: $("#location").val().trim()
        };

        // console.log(newRequest);

        // send the POST request.
        $.ajax("/api/orm", {
            type: "POST",
            data: newRequest
        }).then(function () {
            // console.log("created new request", newRequest);
            //  location.reload();   
        });
        setQuery();
        initialize();
        callApi();
        $("#results").empty();
    })
});


var map;
var locationInput = "";
var typeInput = "";
var address = "";
var service = "";

// Initializes map logic for api connection
function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(37.09024,-95.71289100000001),
      zoom: 3.5
    });
  };

// defines the variables used for the api call
function setQuery() {
    service = $("#services option:selected").text();
    locationInput = $("#location").val().trim();   
    // console.log(location);
    // console.log(service);
};

// Deletes the contents of the target div and appends a formatted api response to the dom
function appendHTML(img , name , address, phone , rating ) {
   
    var businessCard = "";
    businessCard += "<br>"
    businessCard += "<div class='container' id='pinned_bizzcard'>"
    businessCard += "<img id='thumbnailimg' src=" + img + ">"
    businessCard += "<div class='card-body textWrap'>"
    businessCard += "<h5 id='bizzName'>" + name + "</h5>"
    businessCard += "<p class='card-text' id='address1'>Address: " + address + "</p>"
    businessCard += "<p class='card-text' id='rating1'>Rating: " + rating + "/5</p>"
    businessCard += "</div>"
    businessCard += "</div>"
    $("#results").append(businessCard);
};

// API call logic
function callApi() {
    var geocoder = new google.maps.Geocoder();
    var address = locationInput;
    var queryLatLng = "";
    var idPass = "";
    var photoRef = "";


    if (geocoder) {
        geocoder.geocode({ 'address': address }, function (results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                // console.log(results[0].geometry.location.lat());
                // console.log(results[0].geometry.location.lng());
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
                    // console.log(results);
                    for (var i = 0; i < results.length; i++){
                        var place = results[i];
                        // console.log(results[i]);
                        idPass = results[i].place_id;
                        // console.log(idPass);
                        // run a details call for each object coming back from the api
                        var request = {
                            placeId: idPass
                          };
                      
                          service = new google.maps.places.PlacesService(map);
                          service.getDetails(request, callback);
                      
                      
                      
                          function callback(resultsTwo, status) {
                            if (status == google.maps.places.PlacesServiceStatus.OK) {
                            //   console.log(resultsTwo);
                            //   console.log(resultsTwo.photos[0].getUrl({"maxWidth":300,"minWidth":300}));
                            //   console.log(resultsTwo.name);
                            //   console.log(resultsTwo.formatted_address);   
                            //   console.log(resultsTwo.rating);
                              // function appendHTML(img , name , phone , rating )
                              appendHTML(resultsTwo.photos[0].getUrl({"maxWidth":200,"minWidth":200}) , resultsTwo.name , resultsTwo.formatted_address , resultsTwo.formatted_phone_number , resultsTwo.rating)
                            }
                        }
                    }   
                }
            }
        });
    }
};




