

//create the Pokemon class

class Pokemon {
    constructor(name, type1, type2, currLevel, moveslist, partySlot, getEvol, move1, move2, move3, move4, sprite, newSpecies) {
        //constructor(name, type1, type2, currLevel, moveslist, slot, getEvol, move1, move2, move3, move4, sprite, newSpecies, verified, movesKnown, newSpecies)
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.currLevel = currLevel;
        this.moveslist = moveslist;
        this.partySlot = partySlot;
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
}

// initialize the Party and the Box

var party = [];
var box = [];
var poke1, poke2, poke3, poke4, poke5, poke6 = '';

function showPoke1(poke1) {
    if (typeof poke1 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
    } else if (typeof poke1 === 'object') {
        console.log(poke1.name);
        var li="";
        li += '<img src="' + poke1.sprite + '">';
        li += '<h1>' + poke1.name + '</h1>';
        li += '<p>Type 1: ' + poke1.type1 + '</p>';
        
        if (poke1.type2 != null) {
           li += '<p>Type 2: ' + poke1.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke1.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke1.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke1.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke1.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke1.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        li += '<p>' + poke1.moveslist + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}


function showPoke2(poke2) {
    if (typeof poke2 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
    } else {
        console.log(poke2.name);
        var li="";
        li += '<img src="' + poke2.sprite + '">';
        li += '<h1>' + poke2.name + '</h1>';
        li += '<p>Type 1: ' + poke2.type1 + '</p>';
        
        if (poke2.type2 != null) {
           li += '<p>Type 2: ' + poke2.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke2.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke2.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke2.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke2.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke2.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke2.getEvol + ' into ' + poke2.newSpecies + '</p>';
        li += '<p>This Pokemon is Party Member: ' + poke2.partySlot + '</p>';
        li += '<p>' + poke2.moveslist + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
function showPoke3(poke3) {
    if (typeof poke3 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
    } else {
        console.log(poke3.name);
        var li="";
        li += '<img src="' + poke3.sprite + '">';
        li += '<h1>' + poke3.name + '</h1>';
        li += '<p>Type 1: ' + poke3.type1 + '</p>';
        
        if (poke3.type2 != null) {
           li += '<p>Type 2: ' + poke3.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke3.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke3.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke3.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke3.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke3.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke3.getEvol + ' into ' + poke3.newSpecies + '</p>';
        li += '<p>This Pokemon is Party Member: ' + poke3.partySlot + '</p>';
        li += '<p>' + poke3.moveslist + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    }
}
function showPoke4(poke4) {
    if (typeof poke4 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
    } else {
        console.log(poke4.name);
        var li="";
        li += '<img src="' + poke4.sprite + '">';
        li += '<h1>' + poke4.name + '</h1>';
        li += '<p>Type 1: ' + poke4.type1 + '</p>';
        
        if (poke4.type2 != null) {
           li += '<p>Type 2: ' + poke4.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke4.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke4.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke4.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke4.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke4.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke4.getEvol + ' into ' + poke4.newSpecies + '</p>';
        li += '<p>This Pokemon is Party Member: ' + poke4.partySlot + '</p>';
        li += '<p>' + poke4.moveslist + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    }
}
function showPoke5(poke5) {
    if (typeof poke5 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
    } else {
        console.log(poke5.name);
        var li="";
        li += '<img src="' + poke5.sprite + '">';
        li += '<h1>' + poke5.name + '</h1>';
        li += '<p>Type 1: ' + poke5.type1 + '</p>';
        
        if (poke5.type2 != null) {
           li += '<p>Type 2: ' + poke5.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke5.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke5.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke5.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke5.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke5.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke5.getEvol + ' into ' + poke5.newSpecies + '</p>';
        li += '<p>This Pokemon is Party Member: ' + poke5.partySlot + '</p>';
        li += '<p>' + poke5.moveslist + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    }
}
function showPoke6(poke6) {
    if (typeof poke6 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
    } else {
        console.log(poke6.name);
        var li="";
        li += '<img src="' + poke6.sprite + '">';
        li += '<h1>' + poke6.name + '</h1>';
        li += '<p>Type 1: ' + poke6.type1 + '</p>';
        
        if (poke6.type2 != null) {
           li += '<p>Type 2: ' + poke6.type2 + '</p>';
        }
        li += '<p id="currentLevel">Current Level: ' + poke6.currLevel + '</p>';
        li += '<p id="move1">Move 1: ' + poke6.move1 + '</p>';
        li += '<p id="move2">Move 2: ' + poke6.move2 + '</p>';
        li += '<p id="move3">Move 3: ' + poke6.move3 + '</p>';
        li += '<p id="move4">Move 4: ' + poke6.move4 + '</p>';
        li += '<p id="evolutionsentence">Evolves at level ' + poke6.getEvol + ' into ' + poke1.newSpecies + '</p>';
        li += '<p>This Pokemon is Party Member: ' + poke6.partySlot + '</p>';
        li += '<p>' + poke6.moveslist + '</p>';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        </p>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    }
}

function startNewPokemon() {
    if (party.length >= 6) {
        console.log("You already have a full party! Please come back later when Box functionality is updated.")
    } else {
        $("#yourCurrentPokemon").html('\
        <div data-role="main" class="ui-content">\
        <form id="chooseLocation" action="#" method="post">\
                <div>\
                    <label for="locList">Where did you find the Pokemon?</label>\
                    <select type="text" name="locList" id="locList" value="">\
                        <option value="starter">Starter Pokemon</option>\
                        <option value="route29">Route 29</option>\
                    </select>\
                </div>\
        <br>\
                <div>\
                    <a class="ui-btn" onclick="locSubmit();">Choose Location</a>\
                </div>\
        </form>    \
        ');
    }
}

// change the values of the species list based upon the location value selected

function locSubmit() {
    var poke = document.getElementById("speciesList");
    var loc = document.getElementById("locList");
    var locParam = loc.options[loc.selectedIndex].text;
    $("#yourCurrentPokemon").append('\
    <form id="chooseSpecies" action="#" method="post">\
                <div>\
                    <label for="speciesList">What Pokemon did you find?</label>\
                    <select type="text" name="speciesList" id="speciesList" value="">\
                        <option value="species0"></option>\
                    </select>\
                </div>\
                <br>\
                <div>\
                    <a class="ui-btn" onclick="pokeSubmit();">Choose Pokemon</a>\
                </div>\
    ');
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
        var partySlot = party.length + 1;

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
        // console.log('Number of moves: ', lengthPoke)
        // console.log("Number: ", pokeID);
        // console.log("Name: ", pokeName);
        // console.log("Type 1: ", pokeType1);
        // console.log("Type 2: ", pokeType2);
        // console.log("Image URI: ", imageURI);
        // console.log(data.moves[0].version_group_details[0].version_group.name)
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
        var pokemon = new Pokemon(pokeName, pokeType1, pokeType2, currLevel, moveslist, partySlot, getEvol, 'move1', 'move2', 'move3', 'move4', imageURI, newSpecies);
        
        if (party.length < 6) {
            party.push(pokemon);
        }

        if (party.length == 1) {
            poke1 = pokemon;
            $("#poke1button").text(pokemon.name);
            var poke1html = "";
            poke1html = "<div>";
            poke1html = poke1html + "<p>You added ";
            poke1html = poke1html + pokemon.name;
            poke1html = poke1html + " to your party! Select the first Pokemon link in the navigation to see details";
            poke1html = poke1html + "</p></div>";
            $("#yourCurrentPokemon").append(poke1html);

        } else if (party.length == 2) {
            poke2 = pokemon;
            $("#poke2button").text(pokemon.name);
            var poke2html = "";
            poke2html = "<div>";
            poke2html = poke2html + "<p>You added ";
            poke2html = poke2html + pokemon.name;
            poke2html = poke2html + " to your party! Select the second Pokemon link in the navigation to see details";
            poke2html = poke2html + "</p></div>";
            $("#yourCurrentPokemon").append(poke2html);
        } else if (party.length == 3) {
            poke3 = pokemon;
            $("#poke3button").text(pokemon.name);
            var poke3html = "";
            poke3html = "<div>";
            poke3html = poke3html + "<p>You added ";
            poke3html = poke3html + pokemon.name;
            poke3html = poke3html + " to your party! Select the third Pokemon link in the navigation to see details";
            poke3html = poke3html + "</p></div>";
            $("#yourCurrentPokemon").append(poke3html);
        } else if (party.length == 4) {
            poke4 = pokemon;
            $("#poke4button").text(pokemon.name);
            var poke4html = "";
            poke4html = "<div>";
            poke4html = poke4html + "<p>You added ";
            poke4html = poke4html + pokemon.name;
            poke4html = poke4html + " to your party! Select the fourth Pokemon link in the navigation to see details";
            poke4html = poke4html + "</p></div>";
            $("#yourCurrentPokemon").append(poke4html);
        } else if (party.length == 5) {
            poke5 = pokemon;
            $("#poke5button").text(pokemon.name);
            var poke5html = "";
            poke5html = "<div>";
            poke5html = poke5html + "<p>You added ";
            poke5html = poke5html + pokemon.name;
            poke5html = poke5html + " to your party! Select the fifth Pokemon link in the navigation to see details";
            poke5html = poke5html + "</p></div>";
            $("#yourCurrentPokemon").append(poke5html);
        } else if (party.length == 6) {
            poke6 = pokemon;
            $("#poke6button").text(pokemon.name);
            var poke2html = "";
            poke6html = "<div>";
            poke6html = poke6html + "<p>You added ";
            poke6html = poke6html + pokemon.name;
            poke6html = poke6html + " to your party! Select the sixth Pokemon link in the navigation to see details";
            poke6html = poke6html + "</p></div>";
            $("#yourCurrentPokemon").append(poke6html);
        }

        else {
            box.push(pokemon);
        }

        console.log(party);
        console.log(box);

        // $("#yourCurrentPokemon").empty;
        //$("#yourPokemon").html('<p>hello!</p>');

        //making it appear on the screen
        // var li="";
        // li += '<img src="' + pokemon.sprite + '">';
        // li += '<h1>#' + pokeID + ' ' + pokemon.name + '</h1>';
        // li += '<p>Type 1: ' + pokemon.type1 + '</p>';
        
        // if (pokeType2 != null) {
        //    li += '<p>Type 2: ' + pokemon.type2 + '</p>';
        // }
        // li += '<p id="currentLevel">Current Level: ' + pokemon.currLevel + '</p>';
        // li += '<p id="move1">Move 1: ' + pokemon.move1 + '</p>';
        // li += '<p id="move2">Move 2: ' + pokemon.move2 + '</p>';
        // li += '<p id="move3">Move 3: ' + pokemon.move3 + '</p>';
        // li += '<p id="move4">Move 4: ' + pokemon.move4 + '</p>';
        // li += '<p id="evolutionsentence">Evolves at level ' + pokemon.getEvol + ' into ' + pokemon.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + pokemon.partySlot + '</p>';
        // li += '<p>' + moveslist + '</p>';
        // li += '<p>\
        // <a class="ui-btn" onclick="LevelUp();">Level Up</a>\
        // </p>';

        // //$("#pokeDetails").empty();

        // $("#yourCurrentPokemon").append(li).promise().done(function(){
        // //    $(this).listview("refresh");
        // //});
        // });
    });
}