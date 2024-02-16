function hideScreen(currentScreen){
    const hide = document.getElementById(currentScreen);
    hide.classList.add('hidden');
}
function showScreeen(visible){
    const show = document.getElementById(visible);
    show.classList.remove('hidden');
}