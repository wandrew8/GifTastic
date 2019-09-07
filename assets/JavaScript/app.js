//Initial array of categories for buttons
var gifArray = ["Aladdin", "Fantasia", "The Rescuers", "The Little Mermaid", "Snow White"];



//Function to display GIF info
function displayGifs() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DtZ1CEmAXaJle2RIii8Gagqf4NffsWhP&q=" + gifArray[0] + "&limit=10&offset=0&rating=G&lang=en"	

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var gifDiv = $("<div class='gif'>");
        console.log(response)

        var title = respone.title
        gifDiv.append(title);


    });

}
displayGifs();

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

renderButtons();
//function to connect to Giphy API


//Function to 