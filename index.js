let player1 = false;
let playing = document.getElementsByTagName('label')[0];
let winner = document.getElementsByTagName('label')[1];
let arr = ['','','','','','','','',''];
const restart = document.getElementsByTagName('button')[0];
const buttons = document.getElementsByClassName('grid-item');

playing.textContent = 'Jogador: X';

for (let i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        player1 = !player1;
        play(this, i);
        actualPlayer();
        checkWin();
        console.log(arr);
    });
}

function actualPlayer(){
    if(player1){
        playing.textContent = 'Jogador: O';
    }else{
        playing.textContent = 'Jogador: X';
    }
}


function play(button, i){

    if (player1 && !button.innerHTML) {
        button.textContent = 'x';
        arr[i] = 'x';
        return;
    }
    if (!player1 && !button.innerHTML){
        button.textContent = 'o';
        arr[i] = 'o';
        return;
    }
    player1 = !player1; 
}


function animateWin(a,b,c){
    [a,b,c].forEach((element) => buttons[element].classList.add('win') );
    winner.textContent = `Vencedor: ${arr[a]}`;
}


function checkLine(a,b,c){
    if(arr[a] === arr[b] && arr[b] === arr[c] && arr[a] != ''){
        animateWin(a,b,c);
        return true;
    }
    return false;
}

function checkWin(){
    if(checkLine(0,1,2)){return;}
    if(checkLine(3,4,5)){return;}
    if(checkLine(6,7,8)){return;}

    if(checkLine(0,3,6)){return;}
    if(checkLine(1,4,7)){return;}
    if(checkLine(2,5,8)){return;}

    if(checkLine(0,4,8)){return;}
    if(checkLine(2,4,6)){return;}
}


restart.addEventListener('click', function(){
    for (let i=0; i< buttons.length; i++){
        buttons[i].textContent = '';
        if(buttons[i].classList.contains('win')){
            buttons[i].classList.remove('win');
        }
    }
    actualPlayer(false);
    playing.textContent = 'Jogador:';
    winner.textContent = 'Vencedor:';
    arr = ['','','','','','','','',''];
});




