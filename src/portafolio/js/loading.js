(() => {
    'use strict'
    function goToIndex() {
        window.location.href = 'home.html';
    }
    function changeInfo(text){
        let info = document.getElementById("info");
        info.textContent = text;
    }

    setTimeout(goToIndex, 10000); 

    return ''
})();