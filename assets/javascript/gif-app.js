var topics = []



$(function(){
    $("button").on("click", function(){
        var anime = $(this).attr("data-person");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
    
            var results = response.data
    
            for(var i=0; i < results.length; i++) {
    
                var animeDiv = $("<div>");
                var p = $("<p>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating : " + rating);
                var animeImage = $("<img>");
                animeImage.attr("src", results[i].images.fixed_height.url);
                animeDiv.prepend(p);
                animeDiv.prepend(animeImage);
                $("#gifs").prepend(animeDiv);
            };
    
        });
    });
});