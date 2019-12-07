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
//
//

// initialize the Party and the Box
var party = [];
var box = [];
var poke1, poke2, poke3, poke4, poke5, poke6;
//
//
//

//make the button functions work
//
//
//add new Pokemon button
function startNewPokemon() {
    if (party.length >= 6) {
        //TO DO: Make this appear on the screen.
        console.log("You already have a full party! Please come back later when Box functionality is updated.")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You already have a full party! Please come back later when Box functionality is added.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else {
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
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
        </div>\
        </div>\
        <div class="row" id="speciesrow">\
        </div>\
        <div class="row" id="outputrow">\
        </div>\
        </div>\
        ');
    }
}
//
//
//button 1
function showPoke1(poke1) {
    if (typeof poke1 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You have not added a first Pokemon to your team! Select the Add Team Member option from the nav bar.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else if (typeof poke1 === 'object') {
        console.log(poke1.name);
        var li="";
        li += '<div class="row">';
        li += '<div class="col-lg-8 col-md-8 col-s-12" id="pokemonImage">';
        li += '<img src="assets/img/pokeIMG/' + poke1.name + '.png">';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">';
        li += '<h1 class="capitalizeName" id="name">' + poke1.name + '</h1>';
        li += '<p>Type 1: <span id="type1">' + poke1.type1 + '</span></p>';
        if (poke1.type2 != null) {
           li += '<p>Type 2: <spanid="type2"' + poke1.type2 + '</span></p>';
        }
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">'
        li += '<p id="currentLevel1">Current Level: ' + poke1.currLevel + '</p>';
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp(poke1);">Level Up</a>\
        </p>';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">'
        li += '<p>Move 1: <span id="move1">' + poke1.move1 + '</span></p>';
        li += '<p>Move 2: <span id="move2">' + poke1.move2 + '</span></p>';
        li += '<p>Move 3: <span id="move3">' + poke1.move3 + '</span></p>';
        li += '<p>Move 4: <span id="move4">' + poke1.move4 + '</span></p>';
        li += '</div>';
        // li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        // li += '<p>' + poke1.moveslist + '</p>';
        li += '</div>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
//
//
//button 2
function showPoke2(poke2) {
    if (typeof poke2 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You have not added a second Pokemon to your team! Select the Add Team Member option from the nav bar.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else if (typeof poke2 === 'object') {
        console.log(poke2.name);
        var li="";
        li += '<div class="row">';
        li += '<div class="col-lg-8 col-md-8 col-s-12" id="pokemonImage">';
        li += '<img src="assets/img/pokeIMG/' + poke2.name + '.png">';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">';
        li += '<h1 class="capitalizeName" id="name">' + poke2.name + '</h1>';
        li += '<p>Type 1: <span id="type1">' + poke2.type1 + '</span></p>';
        if (poke2.type2 != null) {
           li += '<p>Type 2: <spanid="type2"' + poke2.type2 + '</span></p>';
        }
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">'
        li += '<p id="currentLevel2">Current Level: ' + poke2.currLevel + '</p>';
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp(poke2);">Level Up</a>\
        </p>';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">'
        li += '<p>Move 1: <span id="move1">' + poke2.move1 + '</span></p>';
        li += '<p>Move 2: <span id="move2">' + poke2.move2 + '</span></p>';
        li += '<p>Move 3: <span id="move3">' + poke2.move3 + '</span></p>';
        li += '<p>Move 4: <span id="move4">' + poke2.move4 + '</span></p>';
        li += '</div>';
        // li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        // li += '<p>' + poke1.moveslist + '</p>';
        li += '</div>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
//
//
//button 3
function showPoke3(poke3) {
    if (typeof poke3 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You have not added a third Pokemon to your team! Select the Add Team Member option from the nav bar.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else if (typeof poke3 === 'object') {
        console.log(poke3.name);
        var li="";
        li += '<div class="row">';
        li += '<div class="col-lg-8 col-md-8 col-s-12" id="pokemonImage">';
        li += '<img src="assets/img/pokeIMG/' + poke3.name + '.png">';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">';
        li += '<h1 class="capitalizeName" id="name">' + poke3.name + '</h1>';
        li += '<p>Type 1: <span id="type1">' + poke3.type1 + '</span></p>';
        if (poke3.type2 != null) {
           li += '<p>Type 2: <spanid="type2"' + poke3.type2 + '</span></p>';
        }
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">'
        li += '<p id="currentLevel3">Current Level: ' + poke3.currLevel + '</p>';
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp(poke3);">Level Up</a>\
        </p>';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">'
        li += '<p>Move 1: <span id="move1">' + poke3.move1 + '</span></p>';
        li += '<p>Move 2: <span id="move2">' + poke3.move2 + '</span></p>';
        li += '<p>Move 3: <span id="move3">' + poke3.move3 + '</span></p>';
        li += '<p>Move 4: <span id="move4">' + poke3.move4 + '</span></p>';
        li += '</div>';
        // li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        // li += '<p>' + poke1.moveslist + '</p>';
        li += '</div>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
//
//
//button 4
function showPoke4(poke4) {
    if (typeof poke4 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You have not added a fourth Pokemon to your team! Select the Add Team Member option from the nav bar.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else if (typeof poke2 === 'object') {
        console.log(poke2.name);
        var li="";
        li += '<div class="row">';
        li += '<div class="col-lg-8 col-md-8 col-s-12" id="pokemonImage">';
        li += '<img src="assets/img/pokeIMG/' + poke4.name + '.png">';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">';
        li += '<h1 class="capitalizeName" id="name">' + poke4.name + '</h1>';
        li += '<p>Type 1: <span id="type1">' + poke4.type1 + '</span></p>';
        if (poke4.type2 != null) {
           li += '<p>Type 2: <spanid="type2"' + poke4.type2 + '</span></p>';
        }
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">'
        li += '<p id="currentLevel4">Current Level: ' + poke4.currLevel + '</p>';
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp(poke4);">Level Up</a>\
        </p>';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">'
        li += '<p>Move 1: <span id="move1">' + poke4.move1 + '</span></p>';
        li += '<p>Move 2: <span id="move2">' + poke4.move2 + '</span></p>';
        li += '<p>Move 3: <span id="move3">' + poke4.move3 + '</span></p>';
        li += '<p>Move 4: <span id="move4">' + poke4.move4 + '</span></p>';
        li += '</div>';
        // li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        // li += '<p>' + poke1.moveslist + '</p>';
        li += '</div>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
//
//
//button 5
function showPoke5(poke5) {
    if (typeof poke5 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You have not added a fifth Pokemon to your team! Select the Add Team Member option from the nav bar.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else if (typeof poke2 === 'object') {
        console.log(poke5.name);
        var li="";
        li += '<div class="row">';
        li += '<div class="col-lg-8 col-md-8 col-s-12" id="pokemonImage">';
        li += '<img src="assets/img/pokeIMG/' + poke5.name + '.png">';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">';
        li += '<h1 class="capitalizeName" id="name">' + poke5.name + '</h1>';
        li += '<p>Type 1: <span id="type1">' + poke5.type1 + '</span></p>';
        if (poke5.type2 != null) {
           li += '<p>Type 2: <spanid="type2"' + poke5.type2 + '</span></p>';
        }
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">'
        li += '<p id="currentLevel5">Current Level: ' + poke5.currLevel + '</p>';
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp(poke5);">Level Up</a>\
        </p>';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">'
        li += '<p>Move 1: <span id="move1">' + poke5.move1 + '</span></p>';
        li += '<p>Move 2: <span id="move2">' + poke5.move2 + '</span></p>';
        li += '<p>Move 3: <span id="move3">' + poke5.move3 + '</span></p>';
        li += '<p>Move 4: <span id="move4">' + poke5.move4 + '</span></p>';
        li += '</div>';
        // li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        // li += '<p>' + poke1.moveslist + '</p>';
        li += '</div>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
//
//
//button 6
function showPoke6(poke6) {
    if (typeof poke6 === 'undefined') {
        console.log("You haven't added this Pokemon to the team yet!")
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You have not added a sixth Pokemon to your team! Select the Add Team Member option from the nav bar.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    } else if (typeof poke6 === 'object') {
        console.log(poke6.name);
        var li="";
        li += '<div class="row">';
        li += '<div class="col-lg-8 col-md-8 col-s-12" id="pokemonImage">';
        li += '<img src="assets/img/pokeIMG/' + poke6.name + '.png">';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">';
        li += '<h1 class="capitalizeName" id="name">' + poke6.name + '</h1>';
        li += '<p>Type 1: <span id="type1">' + poke6.type1 + '</span></p>';
        if (poke6.type2 != null) {
           li += '<p>Type 2: <spanid="type2"' + poke6.type2 + '</span></p>';
        }
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">'
        li += '<p id="currentLevel6">Current Level: ' + poke6.currLevel + '</p>';
        li += '</div>';
        li += '<div class="col-lg-2 col-md-2 col-s-6">';
        li += '<p>\
        <a class="ui-btn" onclick="LevelUp(poke6);">Level Up</a>\
        </p>';
        li += '</div>';
        li += '<div class="col-lg-4 col-md-4 col-s-12">'
        li += '<p>Move 1: <span id="move1">' + poke6.move1 + '</span></p>';
        li += '<p>Move 2: <span id="move2">' + poke6.move2 + '</span></p>';
        li += '<p>Move 3: <span id="move3">' + poke6.move3 + '</span></p>';
        li += '<p>Move 4: <span id="move4">' + poke6.move4 + '</span></p>';
        li += '</div>';
        // li += '<p id="evolutionsentence">Evolves at level ' + poke1.getEvol + ' into ' + poke1.newSpecies + '</p>';
        // li += '<p>This Pokemon is Party Member: ' + poke1.partySlot + '</p>';
        // li += '<p>' + poke1.moveslist + '</p>';
        li += '</div>';

        //$("#pokeDetails").empty();

        $("#yourCurrentPokemon").html(li);
    };
}
//
//
//
//
//
//
//
// change the values of the species list based upon the location value selected
function locSubmit() {
    var poke = document.getElementById("speciesList");
    var loc = document.getElementById("locList");
    var locParam = loc.options[loc.selectedIndex].text;
    $("#speciesrow").html('\
    <br>\
    <div class="col">\
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

function LearnMove(pokemon) {
    if (typeof(pokemon.move1) !== 'undefined') {
        console.log('this pokemon knows a first move already');
        if (typeof(pokemon.move2) === 'undefined') {
            pokemon.move2 = pokemon.moveslist[pokemon.currLevel];
            $('#move2').html(pokemon.move2);
        } else {
            console.log('this pokemon knows a second move already');
            if (typeof(pokemon.move3) === 'undefined') {
                console.log('this pokemon should try to learn' + pokemon.moveslist[pokemon.currLevel]);
                pokemon.move3 = pokemon.moveslist[pokemon.currLevel];
                $('#move3').html(pokemon.move3);
            } else {
                //console.log('this pokemon knows a third move already');
                if (typeof(pokemon.move4) === 'undefined') {
                    pokemon.move4 = pokemon.moveslist[pokemon.currLevel];
                    $('#move4').html(pokemon.move4);
                } else {
                    //console.log('this pokemon knows four moves already');
                    var newMove1 = pokemon.move2;
                    var newMove2 = pokemon.move3;
                    var newMove3 = pokemon.move4;
                    var newMove4 = pokemon.moveslist[pokemon.currLevel];
                    pokemon.move1 = newMove1;
                    pokemon.move2 = newMove2;
                    pokemon.move3 = newMove3;
                    pokemon.move4 = newMove4;
                    $('#move1').text(pokemon.move1);
                    $('#move2').text(pokemon.move2);
                    $('#move3').text(pokemon.move3);
                    $('#move4').text(pokemon.move4);
                }
            }
        }
    }
}

function LevelUp(pokemon) {
    if (pokemon.partySlot == 1) {
        if (pokemon.currLevel != 100) {
            pokemon.currLevel+= 1;
            $('#currentLevel1').text('Current Level: ' + pokemon.currLevel);
            if (pokemon.currLevel === pokemon.getEvol) {
                EvolCheck(pokemon);
            }
            if (pokemon.moveslist.hasOwnProperty(pokemon.currLevel)) {
                console.log(pokemon.moveslist[pokemon.currLevel]);
                LearnMove(pokemon);
            }
        }
    } else if (pokemon.partySlot == 2) {
        if (pokemon.currLevel != 100) {
            pokemon.currLevel+= 1;
            $('#currentLevel2').text('Current Level: ' + pokemon.currLevel);
            if (pokemon.currLevel === pokemon.getEvol) {
                EvolCheck(pokemon);
            }
            if (pokemon.moveslist.hasOwnProperty(pokemon.currLevel)) {
                console.log(pokemon.moveslist[pokemon.currLevel]);
                LearnMove(pokemon);
            }
        }
    } else if (pokemon.partySlot == 3) {
        if (pokemon.currLevel != 100) {
            pokemon.currLevel+= 1;
            $('#currentLevel3').text('Current Level: ' + pokemon.currLevel);
            if (pokemon.currLevel === pokemon.getEvol) {
                EvolCheck(pokemon);
            }
            if (pokemon.moveslist.hasOwnProperty(pokemon.currLevel)) {
                console.log(pokemon.moveslist[pokemon.currLevel]);
                LearnMove(pokemon);
            }
        }
    } else if (pokemon.partySlot == 4) {
        if (pokemon.currLevel != 100) {
            pokemon.currLevel+= 1;
            $('#currentLevel4').text('Current Level: ' + pokemon.currLevel);
            if (pokemon.currLevel === pokemon.getEvol) {
                EvolCheck(pokemon);
            }
            if (pokemon.moveslist.hasOwnProperty(pokemon.currLevel)) {
                console.log(pokemon.moveslist[pokemon.currLevel]);
                LearnMove(pokemon);
            }
        }
    } else if (pokemon.partySlot == 5) {
        if (pokemon.currLevel != 100) {
            pokemon.currLevel+= 1;
            $('#currentLevel5').text('Current Level: ' + pokemon.currLevel);
            if (pokemon.currLevel === pokemon.getEvol) {
                EvolCheck(pokemon);
            }
            if (pokemon.moveslist.hasOwnProperty(pokemon.currLevel)) {
                console.log(pokemon.moveslist[pokemon.currLevel]);
                LearnMove(pokemon);
            }
        }
    } else if (pokemon.partySlot == 6) {
        if (pokemon.currLevel != 100) {
            pokemon.currLevel+= 1;
            $('#currentLevel6').text('Current Level: ' + pokemon.currLevel);
            if (pokemon.currLevel === pokemon.getEvol) {
                EvolCheck(pokemon);
            }
            if (pokemon.moveslist.hasOwnProperty(pokemon.currLevel)) {
                console.log(pokemon.moveslist[pokemon.currLevel]);
                LearnMove(pokemon);
            }
        }
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

function EvolCheck(pokemon) {
    console.log('checking evolution');
    var newPokeURL = "https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v1/pokemon/" + pokemon.newSpecies;
    $.getJSON(newPokeURL, function(data) {
        var newPokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
            var newPokeType2 = data.types[1].type.name;
        }
        else var newpokeType2 = null;

        if (pokemon.newSpecies === "bayleef") {
            newGetEvol = 32;
            newNewSpecies = 'meganium';
        } else if (pokemon.newSpecies === "quilava") {
            newGetEvol = 36;
            newNewSpecies = 'typhlosion';
        } else if (pokemon.newSpecies === "croconaw") {
            newGetEvol = 30;
            newNewSpecies = 'feraligatr';
        } else if (pokemon.newSpecies === "pidgeotto") {
            newGetEvol = 36;
            newNewSpecies = 'pidgeot';
        } else if (pokemon.newSpecies === "meganium") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        } else if (pokemon.newSpecies === "typhlosion") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        } else if (pokemon.newSpecies === "feraligatr") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        } else if (pokemon.newSpecies === "pidgeot") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        } else if (pokemon.newSpecies === "raticate") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        } else if (pokemon.newSpecies === "noctowl") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        } else if (pokemon.newSpecies === "furret") {
            newGetEvol = 101;
            newNewSpecies = 'none';
        }
        var newMovesList = {};
        var newLengthPoke = data.moves.length;
        // console.log('Number of moves: ', lengthPoke)
        // console.log("Number: ", pokeID);
        // console.log("Name: ", pokeName);
        // console.log("Type 1: ", pokeType1);
        // console.log("Type 2: ", pokeType2);
        // console.log("Image URI: ", imageURI);
        // console.log(data.moves[0].version_group_details[0].version_group.name)
        var i;
        for (i = 0; i < newLengthPoke; i++) {
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
                        newMovesList[moveLevel] = moveName;
                    }
                }
            }
        }
        pokemon.moveslist = newMovesList;
        pokemon.type1 = newPokeType1;
        if (newPokeType2 != null) {
            pokemon.type2 = newPokeType2;
        }
        pokemon.getEvol = newGetEvol;
        pokemon.name = pokemon.newSpecies;
        $('#name').text(pokemon.name);
        if (pokemon.partySlot == 1) {
            $('#pokemonImage').html('<img src="assets/img/pokeIMG/' + poke1.name + '.png">');
            $("#poke1button").text(pokemon.name);
        } else if (pokemon.partySlot == 2) {
            $('#pokemonImage').html('<img src="assets/img/pokeIMG/' + poke2.name + '.png">');
            $("#poke2button").text(pokemon.name);
        } else if (pokemon.partySlot == 3) {
            $('#pokemonImage').html('<img src="assets/img/pokeIMG/' + poke3.name + '.png">');
            $("#poke3button").text(pokemon.name);
        } else if (pokemon.partySlot == 4) {
            $('#pokemonImage').html('<img src="assets/img/pokeIMG/' + poke4.name + '.png">');
            $("#poke4button").text(pokemon.name);
        } else if (pokemon.partySlot == 5) {
            $('#pokemonImage').html('<img src="assets/img/pokeIMG/' + poke5.name + '.png">');
            $("#poke5button").text(pokemon.name);
        } else if (pokemon.partySlot == 6) {
            $('#pokemonImage').html('<img src="assets/img/pokeIMG/' + poke6.name + '.png">');
            $("#poke6button").text(pokemon.name);
        }
        pokemon.newSpecies = newNewSpecies;
        $('#type1').html(pokemon.type1);
        if (pokemon.type2 != null) {
            $('#type2').html(pokemon.type2);
        }
    });
    console.log(pokemon);
    //if (pokemon.partySlot === '1') {
    //}
}


function pokeSubmit() {
    if (party.length < 6) {
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
        } else if (pokeName === "cyndaquil") {
            getEvol = 14;
            newSpecies = 'quilava';
        } else if (pokeName === "totodile") {
            getEvol = 18;
            newSpecies = 'croconaw';
        } else if (pokeName === "rattata") {
            getEvol = 20;
            newSpecies = 'raticate';
        } else if (pokeName === "pidgey") {
            getEvol = 18;
            newSpecies = 'pidgeotto';
        } else if (pokeName === "hoothoot") {
            getEvol = 20;
            newSpecies = 'noctowl';
        } else if (pokeName === "sentret") {
            getEvol = 15;
            newSpecies = 'furret';
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
                        if (!((data.moves[i].version_group_details[m].level_learned_at) in moveslist)) {
                            var moveLevel = data.moves[i].version_group_details[m].level_learned_at;
                            console.log('A move with the level' + moveLevel + ' has not been in the moveset');
                        } else {
                            var moveLevel = ((data.moves[i].version_group_details[m].level_learned_at) + 1);
                        }
                        moveslist[(moveLevel)] = moveName;
                    }
                }
            }
        }
        var move1, move2, move3, move4;

        var j;
        for (j=0; j <= currLevel; j++) {
            for (var key in moveslist) {
                if (moveslist.hasOwnProperty(j)) {
                    if (typeof move1 === 'undefined') {
                        move1 = moveslist[j];
                    } else {
                        move2 = moveslist[j];
                    }
                }
            }
        }

        //name, type1, type2, currLevel, moveslist, slot, getEvol, move1, move2, move3, move4, sprite, verified, movesKnown, newSpecies)
        var pokemon = new Pokemon(pokeName, pokeType1, pokeType2, currLevel, moveslist, partySlot, getEvol, move1, move2, move3, move4, imageURI, newSpecies);
        
        if (party.length < 6) {
            party.push(pokemon);
        }

        if (party.length == 1) {
            poke1 = pokemon;
            $("#poke1button").text(pokemon.name);
            var poke1html = "";
            poke1html = "<br>";
            poke1html = poke1html + "<div class='col'>";
            poke1html = poke1html + "<p>You added ";
            poke1html = poke1html + pokemon.name;
            poke1html = poke1html + " to your party! Select the first Pokemon link in the navigation to see details";
            poke1html = poke1html + "</p></div>";
            $("#outputrow").html(poke1html);

        } else if (party.length == 2) {
            poke2 = pokemon;
            $("#poke2button").text(pokemon.name);
            var poke2html = "";
            poke2html = "<br>";
            poke2html = poke2html + "<div class='col'>";
            poke2html = poke2html + "<p>You added ";
            poke2html = poke2html + pokemon.name;
            poke2html = poke2html + " to your party! Select the second Pokemon link in the navigation to see details";
            poke2html = poke2html + "</p></div></div>";
            $("#outputrow").html(poke2html);
        } else if (party.length == 3) {
            poke3 = pokemon;
            $("#poke3button").text(pokemon.name);
            var poke3html = "";
            poke3html = "<br>";
            poke3html = poke3html + "<div class='col'>";
            poke3html = poke3html + "<p>You added ";
            poke3html = poke3html + pokemon.name;
            poke3html = poke3html + " to your party! Select the third Pokemon link in the navigation to see details";
            poke3html = poke3html + "</p></div></div>";
            $("#outputrow").html(poke3html);
        } else if (party.length == 4) {
            poke4 = pokemon;
            $("#poke4button").text(pokemon.name);
            var poke4html = "";
            poke4html = "<br>";
            poke4html = poke4html + "<div class='col'>";
            poke4html = poke4html + "<p>You added ";
            poke4html = poke4html + pokemon.name;
            poke4html = poke4html + " to your party! Select the fourth Pokemon link in the navigation to see details";
            poke4html = poke4html + "</p></div></div>";
            $("#outputrow").html(poke4html);
        } else if (party.length == 5) {
            poke5 = pokemon;
            $("#poke5button").text(pokemon.name);
            var poke5html = "";
            poke5html = "<br>";
            poke5html = poke5html + "<div class='col'>";
            poke5html = poke5html + "<p>You added ";
            poke5html = poke5html + pokemon.name;
            poke5html = poke5html + " to your party! Select the fifth Pokemon link in the navigation to see details";
            poke5html = poke5html + "</p></div></div>";
            $("#outputrow").html(poke5html);
        } else if (party.length == 6) {
            poke6 = pokemon;
            $("#poke6button").text(pokemon.name);
            var poke2html = "";
            poke6html = "<br>";
            poke6hml = poke6html + "<div class='col'>";
            poke6html = poke6html + "<p>You added ";
            poke6html = poke6html + pokemon.name;
            poke6html = poke6html + " to your party! Select the sixth Pokemon link in the navigation to see details";
            poke6html = poke6html + "</p></div></div>";
            $("#outputrow").html(poke6html);
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
} else {
        $("#yourCurrentPokemon").html('\
        <br>\
        <div class="container">\
        <div class="row">\
        <div class="col">\
        <p>\
        You already have a full party! Please come back later when Box functionality is added.\
        </p>\
        </div>\
        </div>\
        </div>\
        ');
    }
}