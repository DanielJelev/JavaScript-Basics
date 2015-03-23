function input(arr){
    var newArr = arr.filter(function(x){
       return x>0 && x<400;
    });
    console.log(newArr);

    function percent(newArr){
        for (var i = 0; i < newArr.length; i++) {
            newArr[i] -= newArr[i]/ 5;
        }
        newArr.sort(function(x,y){
           return x>y;
        });
        return newArr;
    }
    console.log(percent(newArr))
}
input([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);