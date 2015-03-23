function sortLetters(str, bool) {
    if(bool){
        str = str.split('').sort(function(a,b){
            return a.toLowerCase() > b.toLowerCase();
        });
        console.log(str.join(''));
    }
    else{
        str = str.split('').sort(function(a,b){
            return a.toLowerCase() > b.toLowerCase();
        });
        str =str.reverse().join('');
        console.log(str)
    }


}
sortLetters("HelloWorld", true);
sortLetters("HelloWorld", false);