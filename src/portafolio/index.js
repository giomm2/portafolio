function goToIndex() {
    window.location.href = './src/portafolio/home/home.html';
}
function changeInfo(text){
    let info = document.getElementById("info");
    info.textContent = text;
}

setTimeout(goToIndex, 10000); 
