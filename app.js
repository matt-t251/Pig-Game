/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let gameScore, roundScore, activePlayer, winner;

init()

document.querySelector('.btn-roll').addEventListener('click', btnRoll);
document.querySelector('.btn-hold').addEventListener('click', btnHold);
document.querySelector('.btn-new').addEventListener('click', btnNew);


function btnRoll() {
    if (winner === false) {
        // console.log('here');
        let dice = Math.ceil(Math.random() * 6);
        // console.log(dice);
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        document.querySelector('.dice').style.display = 'block';
        if( dice === 1 ) {
            nextPlayer();
        } else {
        document.querySelector('#current-'+ activePlayer).textContent = roundScore += dice;
        };
    } else {
        init()
    };
};

function btnHold() {
    if (winner === false) {
        gameScore[activePlayer] = roundScore;
        document.querySelector('#score-0').textContent = gameScore[0];
        document.querySelector('#score-1').textContent = gameScore[1];
        // if gamescore of active player is greater than 20 then declare winner.
        if (gameScore[activePlayer] >= 100) {
            winnerfunc();
        } else {
            nextPlayer();
        }
        
    }
};

function init() {
    gameScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winner = false;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

};

function winnerfunc() {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    winner = true;
};

function btnNew() {
    init()
}

// document.querySelector('.btn-roll').addEventListener('click', function() {
//     if(gamePlaying) {
    
