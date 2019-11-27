

class Pokemon {
    constructor(name, type1, type2, level, moveslist, slot, evol, move1, move2, move3, move4, sprite) {
    this.name = name;
    this.type1 = type1;
    this.type2 = type2;
    this.level = level;
    this.moveslist = moveslist;
    this.slot = slot;
    this.evol = evol;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
    this.sprite = sprite;
    }
}

var party = [];
var box = [];

function pokeSubmit() {
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v1/pokemon/" + param;
    //pokeAPI does not have an Access-Control-Allow-Origin value set
    //so https://cors-anywhere.herokuapp.com/ is used to allow use of the api

//Get the data and push it to the console
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
        var lengthPoke = data.moves.length;
        console.log('Number of moves: ', lengthPoke)
        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
        console.log("Image URI: ", imageURI);
        console.log(data.moves[0].version_group_details[0].version_group.name)
        var i;
        for (i = 0; i < lengthPoke; i++) {
            //console.log(data.moves[i]);
            //console.log(data.moves[i].version_group_details[0]);
            //console.log(data.moves[i].version_group_details[0].version_group.name);
            var numOfGamesWithMove = data.moves[i].version_group_details.length;
            //console.log("number of games", data.moves[i], "is available in: ", data.moves[i].version_group_details.length);
            var m;
            for (m = 0; m < numOfGamesWithMove; m++) {
                if (data.moves[i].version_group_details[m].version_group.name === 'heartgold-soulsilver') {
                    if (data.moves[i].version_group_details[m].level_learned_at > 0) {
                        console.log(data.moves[i].move.name);
                        console.log(data.moves[i].version_group_details[m].level_learned_at);
                    }
                }
            }
        }

        var poke1 = new Pokemon(pokeName, pokeType1, pokeType2, '1', [], '1', 'yes', 'move1', 'move2', 'move3', 'move4', imageURI);
        if (party.length < 6) {
            party.push(poke1);
        }
        else {
            box.push(poke1);
        }

        //making it appear on the screen
        //var li="";
        //li += '<li><img src="' + poke1.sprite + '">';
        //li += '<h1>#' + pokeID + ' ' + poke1.name + '</h1>';
        //li += '<p>Type 1: ' + poke1.type1 + '</p>';
        
        //if (pokeType2 != null) {
        //    li += '<p>Type 2: ' + poke1.type2 + '</p>';
        //}
        //li += '<p>Move 1: ' + poke1.move1 + '</p>';
        //li += '<p>Move 2: ' + poke1.move2 + '</p>';
        //li += '<p>Move 3: ' + poke1.move3 + '</p>';
        //li += '<p>Move 4: ' + poke1.move4 + '</p>';
        //li += '<p>Evolution Method: ' + poke1.evol + '</p>';
        //li += '<p>Slot: ' + poke1.slot + '</p>';
        //li += '</li>';

        console.log(party);
        console.log(box);

        //$("#pokeDetails").empty();

        //$("#pokeDetails").append(li).promise().done(function(){
        //    $(this).listview("refresh");
        //});
    });
}