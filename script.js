function startGame() {
    var player1 = (Math.floor(Math.random() * 6 + 1));
    var player2 = (Math.floor(Math.random() * 6 + 1));

    var elem = document.querySelectorAll('img')
    //src="/assests/dice6.png"
    elem[0].setAttribute("src", `/assests/dice${player1}.png`)
    elem[1].setAttribute("src", `/assests/dice${player2}.png`)

    var result = document.getElementById("result")

    if (player1 > player2) {
        result.innerHTML = "player 1 won the match"
    } else if (player1 < player2) {
        result.innerHTML = "player 2 won the match"
    } else {
        result.innerHTML = "Draw match"
    }
}

