
$(function () {
    $("button").on("click", function () {
        var anime = $(this).attr("data-person");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=dc6zaTOxFJmzC&limit=15";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data

            for (var i = 0; i < results.length; i++) {

                var animeDiv = $("<div>");
                var p = $("<p>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating : " + rating);
                var animeImage = $("<img>");
                animeImage.attr("src", results[i].images.fixed_height.url);
                animeDiv.prepend(p);
                animeDiv.prepend(animeImage);
                $("#gifs").prepend(animeDiv);
            }

            $('.anImage').on('click', function () {

                var state = $(this).attr('data-state');
                console.log(this);

                if (state == 'still') {

                    $(this).attr('src', $(this).data('animate'));

                    $(this).attr('data-state', 'animate');

                } else {

                    $(this).attr('src', $(this).data('still'));

                    $(this).attr('data-state', 'still');
                }
            });
        });
    });
});

var animeArray= [""];

$('#theButton').on('click', function(){
    var animeButton = $("#gif-input").val();
    //adds the new animal

    var newButton = $("<button/>").addClass( "btn btn-info animal").attr('data-name',animeButton).html(animeButton).css({'margin': '5px'});
    
    $("#animalsbuttons").append(newButton);
        console.log("Work");

    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeButton + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(animeButton);

    $.ajax({
    url: queryURL,
    method: 'GET'
    }).then(function(response){
        var results =response.data;

        for(var i = 0; i < results.length; i++){
            var animeDiv= $("<div/>");
            var p = $("<p/>");
            p.text(results[i].rating);
            var animeImage= $("<img/>");
            animeImage.addClass("anImage");

            animeImage.attr("src", results[i].images.fixed_height_still.url);

            animeImage.attr("data-still", resutls[i].images.fixed_height_still.url);

            animeImage.attr("data-animate", results[i].images.fixed_height.url);

            attr("data-state", "still");
            animeDiv.append(p);
            animeDiv.append(animeImage);
            animalDiv.prependTo($("#gifs"));
        }

        $('.anImg').on('click', function() {
            
            var state = $(this).attr('data-state'); 
            console.log(this);

            if (state == 'still') {
            
            $(this).attr('src', $(this).data('animate'));
            
            $(this).attr('data-state', 'animate');

            } else {
                    
            $(this).attr('src', $(this).data('still'));
            
            $(this).attr('data-state', 'still');
            }      
        });
    });

    $("#gif-input").val("");
    return false;
});
