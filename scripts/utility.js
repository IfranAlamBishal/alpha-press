function hideScreen(currentScreen){
    const hide = document.getElementById(currentScreen);
    hide.classList.add('hidden');
}
function showScreeen(visible){
    const show = document.getElementById(visible);
    show.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function changeBackgroundColor(elementId){
    const alphabetId = document.getElementById(elementId);
    alphabetId.classList.add('bg-[#FFA500]');
}

function removeBackgroundColor(elementId){
    const alphabetId = document.getElementById(elementId);
    alphabetId.classList.remove('bg-[#FFA500]');
}

function updateScore(){
    const scoreElement = document.getElementById('current-score');
    const scoreElementText = scoreElement.innerText;
    const currentScore = parseInt(scoreElementText);
    const updatedScore = currentScore + 1; 
    scoreElement.innerText = updatedScore;
}

function updateLife(){
    const lifeElement = document.getElementById('current-life');
    const lifeElementText = lifeElement.innerText;
    const currentLife = parseInt(lifeElementText);
    const updatedLife = currentLife - 1; 
    lifeElement.innerText = updatedLife;
}

const reset = () => {
    const resetLife = document.getElementById('current-life');
    resetLife.innerText = 1;

    const resetScore = document.getElementById('current-score');
    resetScore.innerText = 0;

}

const finalScore = () => {
    const finalScore = document.getElementById('final-score');
    const currentScore = document.getElementById('current-score').innerText;
    finalScore.innerText = currentScore;
}