

class Pokemon {
    constructor(name, type1, type2, currLevel, moveslist, slot, getEvol, move1, move2, move3, move4, sprite, newSpecies) {
        //constructor(name, type1, type2, currLevel, moveslist, slot, getEvol, move1, move2, move3, move4, sprite, newSpecies, verified, movesKnown, newSpecies)
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.currLevel = currLevel;
        this.moveslist = moveslist;
        this.slot = slot;
        this.getEvol = getEvol;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
        this.sprite = sprite;
        this.newSpecies = newSpecies;
        //this.verified = verified;
        //this.movesKnown = movesKnown;
    }
    LearnMove() {
        //needs to take 
        if (movesKnown === 1) {
            move2 = moveset[i];
        }
        else if (movesKnown === 2) {
            move3 = moveset[i];
        }
        else if (movesKnown === 3) {
            move4 = moveset[i];
        }
        else {
            ChangeMove();
        }
    }
    
    ChangeMove() {
    
    }

    EvolCheck() {

    }

    VerificationCheck() {

    }
}

var party = [];
var box = [];

function locSubmit() {
    var poke = document.getElementById("speciesList");
    var loc = document.getElementById("locList");
    var locParam = loc.options[loc.selectedIndex].text;
    if (locParam === "Starter Pokemon") {
        $("#speciesList").html(' \
        <option value="chikorita">chikorita</option>\
        <option value="cyndaquil">cyndaquil</option>\
        <option value="totodile">totodile</option>\
        ');
    }
    else if (locParam === "Route 29") {
        $("#speciesList").html(' \
        <option value="rattata">rattata</option>\
        <option value="pidgey">pidgey</option>\
        <option value="sentret">sentret</option>\
        <option value="hoothoot">hoothoot</option>\
        ');
    }
}

function LevelUp() {
    if (currLevel != 100) {
        currLevel+= 1;
        console.log('added to chikorita level');
        $('#currentLevel').text('Current Level: ' + currLevel);
        $('#currentLevel').text('Current Level: ' + currLevel);
        if (currLevel === getEvol) {
            EvolCheck();
        }
        // else if (verified != true) {
        //     VerificationCheck();
        // }
        // for (i = 0; i < moveslist.length; i++) {
        //     if (currLevel === moveslist[i]) {
        //         LearnMove();
        //     }
        // }
    }
}


function pokeSubmit() {
    var loc = document.getElementById("locList");
    var locParam = loc.options[loc.selectedIndex].text;
    var poke = document.getElementById("speciesList");
    var param = poke.options[poke.selectedIndex].text;
    var pokeURL = "https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v1/pokemon/" + param;
    //pokeAPI does not have an Access-Control-Allow-Origin value set
    //so https://cors-anywhere.herokuapp.com/ is used to allow use of the api

//Get the data and push it to the console
    $.getJSON(pokeURL, function(data) {
        //console.log(data);
        console.log(JSON.stringify(data, null, " "));
        var pokeID = data.id;
        var pokeName = data.name;

        //determine type
        var pokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
        }
        else var pokeType2 = null;

        //determine moveset
        var moveslist = {};

        //determine evolution
        if (pokeName === "chikorita") {
            getEvol = 16;
            newSpecies = 'bayleef';
        } else if (pokeName === "bayleef") {
            getEvol = 32;
            newSpecies = 'meganium';
        } else if (pokeName === "cyndaquil") {
            getEvol = 14;
            newSpecies = 'quilava';
        } else if (pokeName === "quilava") {
            getEvol = 36;
            newSpecies = 'typhlosion';
        } else if (pokeName === "totodile") {
            getEvol = 18;
            newSpecies = 'croconaw';
        } else if (pokeName === "croconaw") {
            getEvol = 30;
            newSpecies = 'feraligatr';
        } else if (pokeName === "rattata") {
            getEvol = 20;
            newSpecies = 'raticate';
        } else if (pokeName === "pidgey") {
            getEvol = 18;
            newSpecies = 'pidgeotto';
        } else if (pokeName === "pidgeotto") {
            getEvol = 36;
            newSpecies = 'pidgeot';
        } else if (pokeName === "hoothoot") {
            getEvol = 20;
            newSpecies = 'noctowl';
        } else if (pokeName === "sentret") {
            getEvol = 15;
            newSpecies = 'furret';
        } else if (pokeName === "meganium") {
            getEvol = 101;
            newSpecies = 'none';
        } else if (pokeName === "typhlosion") {
            getEvol = 101;
            newSpecies = 'none';
        } else if (pokeName === "feraligatr") {
            getEvol = 101;
            newSpecies = 'none';
        } else if (pokeName === "pidgeot") {
            getEvol = 101;
            newSpecies = 'none';
        } else if (pokeName === "raticate") {
            getEvol = 101;
            newSpecies = 'none';
        } else if (pokeName === "noctowl") {
            getEvol = 101;
            newSpecies = 'none';
        } else if (pokeName === "furret") {
            getEvol = 101;
            newSpecies = 'none';
        }


        //determine level upon adding
        if (locParam === "Starter Pokemon") {
            currLevel = 5;
        } else if (locParam === "Route 29") {
            if (pokeName === "rattata") {
                currLevel = 4;
            }
            else if (pokeName === "sentret") {
                currLevel = 4;
            }
            else if (pokeName === "pidgey") {
                currLevel = 4;
            }
            else if (pokeName === "hoothoot") {
                currLevel = 4;
            }
        }
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
                        var moveName = data.moves[i].move.name;
                        console.log(data.moves[i].version_group_details[m].level_learned_at);
                        var moveLevel = data.moves[i].version_group_details[m].level_learned_at;
                        moveslist[moveName] = moveLevel;
                    }
                }
            }
        }
        //name, type1, type2, currLevel, moveslist, slot, getEvol, move1, move2, move3, move4, sprite, verified, movesKnown, newSpecies)
        var poke1 = new Pokemon(pokeName, pokeType1, pokeType2, currLevel, moveslist, '1', getEvol, 'move1', 'move2', 'move3', 'move4', imageURI, newSpecies);
        
        if (party.length < 6) {
            party.push(poke1);
        }
        else {
            box.push(poke1);
        }

        console.log(party);
        console.log(box);

        $("#yourPokemon").empty;
        //$("#yourPokemon").html('<p>hello!</p>');

        //making it appear on the screen
        var li="";
        li += '<li><img src="' + poke1.sprite + '">';
        li += '<h1>#' + pokeID + ' ' + poke1.name + '</h1>';
        li += '<p>Type 1: ' + poke1.type1 + '</p>';
        
        if (pokeType2 != null) {
           li += '<p>Type 2: ' + poke1.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke1.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke1.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke1.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke1.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke1.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        li += '<p>Slot: ' + poke1.slot + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>'
        li += '</li>';

        //$("#pokeDetails").empty();

        $("#yourPokemon").append(li).promise().done(function(){
        //    $(this).listview("refresh");
        //});
        });
    });
}