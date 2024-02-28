function play(){
    hideScreen('home');
    showScreeen('game');
    gameLoop();
}
function playAgain(){
    reset();
    hideScreen('score');
    showScreeen('game');
    gameLoop();
}

function gameLoop(){
    const alphabet = getARandomAlphabet();
    const shownAlphabet = document.getElementById('display-alphabet');
    shownAlphabet.innerText = alphabet;
    changeBackgroundColor(alphabet);
   
}

function checkPressedKey(event){
    const pressedKey = event.key;
    const currentAlphabet = document.getElementById('display-alphabet');
    const expectedKey  = currentAlphabet.innerText.toLowerCase();

    //console.log(pressedKey , expectedKey);

    if(pressedKey === expectedKey){
        updateScore();
        // console.log('Matched');
       removeBackgroundColor(pressedKey);
        gameLoop();
    }
    else{
        updateLife();
        removeBackgroundColor(expectedKey);

        const noLife = document.getElementById('current-life');
        const zeroLife = noLife.innerText;
        
        if(zeroLife < 1){
            hideScreen('game');
            showScreeen('score');
            finalScore();
        }
        // console.log('failed');
    }
}
document.addEventListener('keyup', checkPressedKey);