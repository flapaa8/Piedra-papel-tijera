const  choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer:0
}
//Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner,computerChoice);
    
}

//Computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'piedra';
    }
    else if(rand <= 0.67){
        return 'papel';
    }
    else {
        return 'tijeras'
    }
}

//get winer
function getWinner(p,c){
    if(p===c){
        return 'empate'
    }
    else if(p === 'piedra'){
        if(c==='papel') {
            return 'consola';
        }
        else{
            return 'jugador';
        }
    } else if(p=== 'papel'){
        if(c==='tijera'){
            return 'consola';
        } else{
            return 'papel'
        }
    }else if(p === 'tijera'){
        if (c === 'piedra'){
            return 'consola';
        }else{
            return 'jugador'
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'jugador'){
        scoreboard.player++;
        result.innerHTML = `<h1 class="text-win">Has Ganado!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>La consola eligio <strong>${computerChoice} </strong></p> `;
    }else if(winner === 'consola'){
        scoreboard.computer++;
        result.innerHTML = `<h1 class="text-lose">Has Perdido...</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>La consola eligio <strong>${computerChoice} </strong></p> `;
    }else{
        result.innerHTML = `<h1 class="text-lose">Has empatado!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>La consola eligio <strong>${computerChoice} </strong></p> `;
    }
    //Show score
    score.innerHTML = `<p> Tu: ${scoreboard.player}</p>
    <p> Consola: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block'
}

// restart
function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p> Tu: 0</p>
    <p> Consola: 0</p>
    `;
}

// Clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);