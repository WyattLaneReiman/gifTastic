
$(function () {
    var animeArray= ["Rasengan", "Chidori", "HunterxHunter", "One Punch Man", "Luffy", "Kakashi Sensai", "Naruto", "Sasuke", "Goku", "Piccolo", "Tokyo Ghoul", "SAO", "assassination Classroom", "SAO 2"];
    function renderButtons() {
        $("#animeButtons").html('')
        for(var i = 0; i< animeArray.length; i++ ){
            $("#animeButtons").append("<button data-person="+ animeArray[i]+ ">"+animeArray[i]+"</button>")
        }
    }
    renderButtons()


    $("#animeButtons").on("click", "button",function () {
        var anime = $(this).attr("data-person");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=dc6zaTOxFJmzC&limit=15";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data


            for (var i = 0; i < results.length; i++) {

                var still = results[i].images.fixed_height_still.url;
                var animate = results[i].images.fixed_height.url;

                var animeDiv = $("<div>");
                var p = $("<p>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating : " + rating);
                var animeImage = $('<img class="gif">');
                animeImage.attr("data-still", still)
                animeImage.attr("data-animate", animate)
                animeImage.attr("data-state", "still")
                animeImage.attr("src", results[i].images.fixed_height.url);
                animeDiv.prepend(p);
                animeDiv.prepend(animeImage);
                $("#gifs").prepend(animeDiv);
            }


        });
    });

    $('#gifs').on('click', "img", function () {

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


    $('#theButton').on('click', function(e){
        e.preventDefault()
        var animeButton = $("#gif-input").val();
        animeArray.push(animeButton)
        renderButtons();
        console.log(animeButton )
        //adds the new animal
    
        // queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeButton + "&api_key=dc6zaTOxFJmzC&limit=10";
        //     console.log(animeButton);
    
        // $.ajax({
        // url: queryURL,
        // method: 'GET'
        // }).then(function(response){
        //     var results =response.data;
    
        //     for(var i = 0; i < results.length; i++){
        //         var animeDiv= $("<div>");
        //         var p = $("<p>");
        //         p.text(results[i].rating);
        //         var animeImage= $("<img>");
        //         animeImage.addClass("anImage");
    
        //         animeImage.attr("src", results[i].images.fixed_height_still.url);
    
        //         animeImage.attr("data-still", results[i].images.fixed_height_still.url);
    
        //         animeImage.attr("data-animate", results[i].images.fixed_height.url);
    
        //         attr("data-state", "still");
        //         animeDiv.append(p);
        //         animeDiv.append(animeImage);
        //         animalDiv.prependTo($("#gifs"));
        //     }
    
        //     $('.anImg').on('click', function() {
                
        //         var state = $(this).attr('data-state'); 
        //         console.log(this);
    
        //         if (state == 'still') {
                
        //         $(this).attr('src', $(this).data('animate'));
                
        //         $(this).attr('data-state', 'animate');
    
        //         } else {
                        
        //         $(this).attr('src', $(this).data('still'));
                
        //         $(this).attr('data-state', 'still');
        //         }      
        //     });
        // });
    
        // $("#gif-input").val("");
        // return false;
    });
    

});


