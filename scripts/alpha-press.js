function play(){
    hideScreen('home');
    showScreeen('game');
    gameLoop();
}
function playAgain(){
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
        console.log('Matched');
        removeBackgroundColor(pressedKey);
        gameLoop();
    }
    else{
        console.log('failed');
    }
}
document.addEventListener('keyup', checkPressedKey);