// opening the side bar using vanilla js

document.getElementById('Sidebar-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }

})
//******searching******//

// script.js

function searchGames() {
    var input, filter, games, game, gameName, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    games = document.querySelectorAll('.game');

    for (i = 0; i < games.length; i++) {
        game = games[i];
        gameName = game.querySelector('h1');
        txtValue = gameName.textContent || gameName.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            game.style.display = "";
        } else {
            game.style.display = "none";
        }
    }
}





////////// game section /////////////////



