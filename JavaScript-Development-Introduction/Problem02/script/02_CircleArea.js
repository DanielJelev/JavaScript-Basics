function calcArea(number) {
    return (Math.PI*(Math.pow(number,2))).toString();
};

window.document.getElementById("first").innerHTML = calcArea(7)
window.document.getElementById("second").innerHTML = calcArea(1.7);
window.document.getElementById("third").innerHTML = calcArea(20);