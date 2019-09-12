//Initial array of categories for buttons
var gifArray = ["Aladdin", "Fantasia", "The Rescuers", "The Little Mermaid", "Snow White"];


//Event handler for when gif buttons are clicked
$(document).on("click", ".gif-button", displayGifs)

//Function to display GIF info
function displayGifs() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DtZ1CEmAXaJle2RIii8Gagqf4NffsWhP&q=" + gif + "&offset=0&rating=G&lang=en"

    $("#add-gif").empty();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < 10; i++) {

            var gifImage = $("<img class='gifImage'>");
            gifImage.attr("src", response.data[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", response.data[i].images.fixed_height.url);
            gifImage.attr("data-still", response.data[i].images.fixed_height_still.url);
            $("#add-gif").append(gifImage);

        }

    var instructions = $("#instructions");
    instructions.empty();
    instructions.append("<p>Double click on the images below to see them move</p>");
    

    });
}

//function to generate buttons
function renderButtons() {

    $("#button-holder").empty();

    for (var i = 0; i < gifArray.length; i++) {

        var button = $("<button>");
        button.addClass("gif-button");
        button.attr("data-name", gifArray[i]);
        button.text(gifArray[i]);
        $("#button-holder").append(button);

    }
}

//Event handler for when user inputs new gif category
$("#submit").on("click", function (event) {

    event.preventDefault();

    var input = $("#search-info").val().trim();
    gifArray.push(input);
    renderButtons();

})

//Event handler for when gif images are clicked
$(document).on("click", ".gifImage", function () {

    var state = $(this).attr("data-state");
    var animate = $(this).attr("data-animate");
    var still = $(this).attr("data-still");
    
    if (state === "still") {
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
    }
})


renderButtons();
