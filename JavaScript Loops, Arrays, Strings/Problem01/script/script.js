function input (arr){
    var newArr = arr.filter(function(x) {
        return !isNaN(x);
    });
    console.log(newArr)
    var min,max,frequent;
    Array.max = function( newArr ){
        return(Math.max.apply( Math, newArr ));
    };
    Array.min = function(newArr){
        return(Math.min.apply(Math,newArr));
    };
    function frequency (newArr){
        var f = 1;
        var m = 0;
        var item;
        for (var i=0; i<newArr.length; i++)
        {
            for (var j=i; j<newArr.length; j++)
            {
                if (newArr[i] == newArr[j])
                    m++;
                if (f<m)
                {
                    f=m;
                    item = newArr[i];
                }
            }
            m=0;
        }
        return item ;
    }
    console.log("Min number: "+Array.max(newArr));
    console.log("Max number: "+Array.min(newArr));
    console.log("Most frequent number: "+ frequency(newArr));
}
input(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]])
