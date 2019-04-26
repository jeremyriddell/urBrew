// Search for beers 

$(document).on("click", "#search-button", function (event) {
    event.preventDefault();
    var searchTerm = "search?q=" + $("#search-field").val().trim();

    if ($("#search-field").val().trim() != "") {
        var queryURL = "https://sandbox-api.brewerydb.com/v2/" + searchTerm + "/&key=7380497d0148ba2e8a2b2d6ba7362a03";
        $("#brews-carousel").empty();
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                if (response.data.length > 0) {
                    var carouselItem = "";
                    var firstBeer = true;
                    console.log(response);
                    for (let i = 0; i < response.data.length; i++) {
                        console.log(response.data.length);
                        if (response.data[i].labels) {
                            if (firstBeer) {
                                carouselItem = "carousel-item active";
                                firstBeer = false;
                            } else {
                                carouselItem = "carousel-item";
                            }
                            var beerItem = $("<div>").addClass(carouselItem).append(
                                $("<img>").attr({
                                    "class": "d-block col-3 img-fluid",
                                    "src": response.data[i].labels.medium,
                                    "data": response.data[i].id,
                                    "name": response.data[i].name,
                                    "description": response.data[i].description,
                                    "beertype": response.data[i].style.name,
                                    "beertypedescription": response.data[i].style.description,
                                    "abv": response.data[i].abv,
                                    "ibu": response.data[i].ibu,
                                    "abvtypemax": response.data[i].style.abvMax,
                                    "abvtypemin": response.data[i].style.abvMin,
                                    "ibutypemax": response.data[i].style.ibuMax,
                                    "ibutypemin": response.data[i].style.ibuMin,
                                    "fgtypemax": response.data[i].style.fgMax,
                                    "fgtypemin": response.data[i].style.fgMin,
                                    "ogtypemax": response.data[i].style.ogMax,
                                    "ogtypemin": response.data[i].style.ogMin,
                                    "srmtypemax": response.data[i].style.srmMax,
                                    "srmtypemin": response.data[i].style.srmMin,
                                    "onclick": "getImageData(this)"
                                })
                            );
                            $("#brews-carousel").append(beerItem);
                        };

                    };
                    drawCarousel();
                    console.log("Draw Carousel Fired");
                };

            });
    }
});

//Gets 4 random beers
function getRandomBeer() {
    var getRandomBeerURL = "https://sandbox-api.brewerydb.com/v2/beer/random/?key=7380497d0148ba2e8a2b2d6ba7362a03";
    var carouselItem = "";
    var firstBeer = true;
    var fourRandosFound = 0;
    $("#brews-carousel").empty();
    for (let i = 1; i < 31; i++) {
        // console.log(fourRandosFound);
        $.ajax({
            url: getRandomBeerURL,
            method: "GET"
        })
            .then(function (response) {
                var uniqueBeer = "https://sandbox-api.brewerydb.com/v2/beer/" + response.data.id + "/?key=7380497d0148ba2e8a2b2d6ba7362a03";
                $.ajax({
                    url: uniqueBeer,
                    method: "GET"
                })
                    .then(function (response2) {
                        if (response2.data.labels && (fourRandosFound < 8)) {
                            if (firstBeer) {
                                carouselItem = "carousel-item active";
                                firstBeer = false;
                            } else {
                                carouselItem = "carousel-item";
                            }
                            var beerItem = $("<div>").addClass(carouselItem).append(
                                $("<img>").attr({
                                    "class": "d-block col-3 img-fluid",
                                    "src": response2.data.labels.medium,
                                    "data": response2.data.id,
                                    "name": response2.data.name,
                                    "description": response2.data.description,
                                    "beertype": response2.data.style.name,
                                    "beertypedescription": response2.data.style.description,
                                    "abv": response2.data.abv,
                                    "ibu": response2.data.ibu,
                                    "abvtypemax": response2.data.style.abvMax,
                                    "abvtypemin": response2.data.style.abvMin,
                                    "ibutypemax": response2.data.style.ibuMax,
                                    "ibutypemin": response2.data.style.ibuMin,
                                    "fgtypemax": response2.data.style.fgMax,
                                    "fgtypemin": response2.data.style.fgMin,
                                    "ogtypemax": response2.data.style.ogMax,
                                    "ogtypemin": response2.data.style.ogMin,
                                    "srmtypemax": response2.data.style.srmMax,
                                    "srmtypemin": response2.data.style.srmMin,
                                    "onclick": "getImageData(this)"
                                })
                            );
                            $("#brews-carousel").append(beerItem);
                            fourRandosFound++;
                            // console.log("Random Beer with label found! Count is " + fourRandosFound);
                            if (fourRandosFound == 8) {
                                drawCarousel();
                            }
                        }
                    });
            });
    }
}


function getImageData(data) {

    var beerId = "";
    var beerName = "";
    var beerDescription = "";
    var beerType = "";
    var beerTypeDescription = "";
    var beerABV = "";
    var beerIBU = "";
    var abvTypeMax = "";
    var abvTypeMin = "";
    var ibuTypeMax = "";
    var ibuTypeMin = "";
    var fgTypeMax = "";
    var fgTypeMin = "";
    var ogTypeMax = "";
    var ogTypeMin = "";
    var srmTypeMax = "";
    var srmTypeMin = "";
    var beerDetails = "";

    for (i = 0; i < data.attributes.length - 1; i++) {
        if (data.attributes[i].name == "data") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerId = data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "name") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerName = data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "description") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerDescription = data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "beertype") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerType = data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "beertypedescription") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerTypeDescription = data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "abv") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerABV += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "ibu") {
            if (typeof data.attributes[i].value !== 'undefined') {
                beerIBU += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "abvtypemax") {
            if (typeof data.attributes[i].value !== 'undefined') {
                abvTypeMax += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "abvtypemin") {
            if (typeof data.attributes[i].value !== 'undefined') {
                abvTypeMin += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "ibutypemax") {
            if (typeof data.attributes[i].value !== 'undefined') {
                ibuTypeMax += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "ibutypemin") {
            if (typeof data.attributes[i].value !== 'undefined') {
                ibuTypeMin += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "fgtypemax") {
            if (typeof data.attributes[i].value !== 'undefined') {
                fgTypeMax += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "fgtypemin") {
            if (typeof data.attributes[i].value !== 'undefined') {
                fgTypeMin += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "ogtypemax") {
            if (typeof data.attributes[i].value !== 'undefined') {
                ogTypeMax += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "ogtypemin") {
            if (typeof data.attributes[i].value !== 'undefined') {
                ogTypeMin += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "srmtypemax") {
            if (typeof data.attributes[i].value !== 'undefined') {
                srmTypeMax += data.attributes[i].value;
            }
        }
        else if (data.attributes[i].name == "srmtypemin") {
            if (typeof data.attributes[i].value !== 'undefined') {
                srmTypeMin += data.attributes[i].value;
            }
        }
    }

    if (beerDescription == "") {
        if (beerTypeDescription !== "") {
            beerDescription = beerTypeDescription;
        }
    }

    if (beerABV !== "") {
        if (beerDetails == "") {
            beerDetails += beerName + ":  ABV: " + beerABV;
        }
        else {
            beerDetails += "<br />" + beerName + ":  ABV: " + beerABV;
        }
    }
    else {
        if (abvTypeMin !== "" && abvTypeMax !== "") {
            if (beerDetails == "") {
                beerDetails += beerType + ":  Min ABV: " + abvTypeMin + "  Max ABV: " + abvTypeMax;
            }
            else {
                beerDetails += "<br />" + beerType + ":  Min ABV: " + abvTypeMin + "  Max ABV: " + abvTypeMax;
            }
        }

    }

    if (beerIBU !== "") {
        if (beerDetails == "") {
            beerDetails += beerName + ":  IBU: " + beerIBU;
        }
        else {
            beerDetails += "<br />" + beerName + ":  IBU: " + beerIBU;
        }
    }
    else {
        if (ibuTypeMin !== "" && ibuTypeMax !== "") {
            if (beerDetails == "") {
                beerDetails += beerType + ":  Min IBU: " + ibuTypeMin + "  Max IBU: " + ibuTypeMax;
            }
            else {
                beerDetails += "<br />" + beerType + ":  Min IBU: " + ibuTypeMin + "  Max IBU: " + ibuTypeMax;
            }
        }

    }
    if (srmTypeMin !== "" && srmTypeMax !== "") {
        if (beerDetails == "") {
            beerDetails += beerType + ":  Min SRM: " + srmTypeMin + "  Max SRM: " + srmTypeMax;
        }
        else {
            beerDetails += "<br />" + beerType + ":  Min SRM: " + srmTypeMin + "  Max SRM: " + srmTypeMax;
        }
    }
    if (ogTypeMin !== "" && ogTypeMax !== "") {
        if (beerDetails == "") {
            beerDetails += beerType + ":  Min OG: " + ogTypeMin + "  Max OG: " + ogTypeMax;
        }
        else {
            beerDetails += "<br />" + beerType + ":  Min OG: " + ogTypeMin + "  Max OG: " + ogTypeMax;
        }
    }
    if (fgTypeMin !== "" && fgTypeMax !== "") {
        if (beerDetails == "") {
            beerDetails += beerType + ":  Min FG: " + fgTypeMin + "  Max FG: " + fgTypeMax;
        }
        else {
            beerDetails += "<br />" + beerType + ":  Min FG: " + fgTypeMin + "  Max FG: " + fgTypeMax;
        }
    }


    $('#beerInfo').text(beerName);
    $('#BeerType').text(beerType);
    $('#BeerBody').text(beerDescription);
    $('#BeerDetails').html(beerDetails);
    $('#beerModal').modal('toggle');
    $('#thumbsup').attr("name", beerName);
}

//Opens new html page for google places.


//Regex to validate Zip Code

function isValidUSZip(sZip) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
}

//Opens new html page for google places if Zip Code is validated.
$("#find-button").click(function () {
    tempZip = $("#zip-field").val().trim();
    if (isValidUSZip(tempZip)) {
        console.log("valid zip code!");
        localStorage.setItem("Zip", tempZip);
        window.open("localbreweries.html");
    } else {
        console.log("not a valid zip code");
        $('#zipModal').modal('toggle');
    }
});

$(document).ready(function () {
    getRandomBeer();
});

// Google places code to create map and markers.
function handleResponse(data) {
    console.log("handle response function: " + data);
    latLong = data.results[0].geometry.location;
    console.log(latLong);
    initMap(latLong);
}

function getLatLngByZipcode(zipcode) {
    var latLongQuery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyAxR6ZRJI9Wrw_dljpvfsR2Ic35iF-3OPo"
    $.ajax({
        url: latLongQuery,
        method: "GET",
        success: function (response) {
            handleResponse(response);
        }
    })
}

console.log(localStorage.getItem("Zip"));
latLng = getLatLngByZipcode(localStorage.getItem("Zip"));

var map;

function initMap(customLocation) {
    if (/localbreweries.html/.test(window.location.href)) {
        // Create the map.
        // var customLocation = { lat: 33.423409, lng: -111.940412 };
        // console.log(customLocation);
        map = new google.maps.Map(document.getElementById('map'), {
            center: customLocation,
            zoom: 17
        });

        //   Create the places service.
        var service = new google.maps.places.PlacesService(map);
        var getNextPage = null;
        var moreButton = document.getElementById('more');
        moreButton.onclick = function () {
            moreButton.disabled = true;
            if (getNextPage) getNextPage();
        };

        // Perform a nearby search.
        service.nearbySearch(

            { location: customLocation, radius: 500, type: ['bar'] },

            function (results, status, pagination) {
                if (status !== 'OK') return;

                createMarkers(results);
                moreButton.disabled = !pagination.hasNextPage;
                getNextPage = pagination.hasNextPage && function () {
                    pagination.nextPage();
                };
            });

    }
}

function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById('places');

    for (var i = 0, place; place = places[i]; i++) {
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });

        var li = document.createElement('li');
        li.textContent = place.name;
        placesList.appendChild(li);

        bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}

// Bootstrap carousel with multiple slides and interval based update.

function drawCarousel() {
    // console.log("draw carousel first")

    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        // console.log("draw carousel")
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
}

var config = {
    apiKey: "AIzaSyANPVjyDPOaf__7rBLObpggPLvD8hxgJ2o",
    authDomain: "group-project-1-e214d.firebaseapp.com",
    databaseURL: "https://group-project-1-e214d.firebaseio.com",
    projectId: "group-project-1-e214d",
    storageBucket: "group-project-1-e214d.appspot.com",
    messagingSenderId: "734613753940"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#search-button").on("click", function () {
    var beer = $("#search-field").val().trim().toLowerCase();

    database.ref("/beers").push({ beer: beer });
});


var database = firebase.database();
var clickCounter = 0;

$("#thumbsup").on("click", function () {
    clickCounter++;
    //   database.ref("/clicks").set(clickCounter);
    database.ref("/clicks").transaction(function (currentClicks) {
        return (currentClicks || 0) + 1;
    });
    var beerName = $("#thumbsup").attr("name");
    console.log;
    likeBeer(beerName);
    //   this.data
});

database.ref("/clicks").on("value", function (snapshot) {
    console.log(snapshot.val());
    //   $("#click-value").text(snapshot.val().clickCount);
    //   clickCounter = snapshot.val().clickCount;


});

database.ref("/likes").on("value", function (snapshot) {
    console.log(snapshot.val());


});
function likeBeer(beerName) {
    database.ref("/likes").transaction(function (likedBeer) {
        var likes = likedBeer || {}
        likes[beerName] = (likes[beerName] || 0) + 1
        return likes
    });
}

$("#favorite-button").click(function () {
    $("#beer-body").html("");
    $('#favModal').modal('toggle');
    database.ref("/likes").once("value", function (childSnapshot) {
        var beerNameTemp = childSnapshot.val();
        var tempArr = [];
        $.each(beerNameTemp, function (i, v) {
            tempArr.push([i, v]);
        });
        console.log(tempArr);
        console.log(tempArr.length);
        $.each(tempArr, function (i, v) {
            console.log("I: " + i,"V: " + v[0] + " likes: " + v[1]);
            var newRow = $("<tr>").append(
                $("<td>").text(v[0]),
                $("<td>").text(v[1])
            );
            $("#beer-table > tbody").append(newRow);
        });
    });
});