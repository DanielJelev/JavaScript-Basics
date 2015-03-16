setInterval(function updateClock(){
    var time = new Date();

    var currentHours =  time.getHours();
    var currentMinutes = time.getMinutes();
    var currentSeconds = time.getSeconds();

    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    var currentTimeString = currentHours + " : " + currentMinutes + " : "
        + currentSeconds;

    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
},1000);
