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

