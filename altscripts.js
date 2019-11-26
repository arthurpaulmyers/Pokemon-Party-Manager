function pokeSubmit() {
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v1/pokemon/" + param;
    //pokeAPI does not have an Access-Control-Allow-Origin value set
    //so https://cors-anywhere.herokuapp.com/ is used to allow use of the api


    $.getJSON(pokeURL, function(data) {
        //console.log(data);
        console.log(JSON.stringify(data, null, " "));
        var pokeID = data.id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
        }
        else var pokeType2 = null;
        var imageURI = data.sprites.front_default;

        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
        console.log("Image URI: ", imageURI);
        console.log(data.moves[0].version_group_details[0].version_group.name)

        var li="";
        li += '<li><img src="' + imageURI + '">';
        li += '<h1>#' + pokeID + ' ' + pokeName + '</h1>';
        li += '<p>Type 1: ' + pokeType1 + '</p>';
        
        if (pokeType2 != null) {
            li += '<p>Type 2: ' + pokeType2 + '</p>';
        }
        li += '</li>';
        $("#pokeDetails").empty();

        $("#pokeDetails").append(li).promise().done(function(){
            $(this).listview("refresh");
        });
    });
}