function input (arr){

    function filter(arr){
        for (var i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'object' && Object.prototype.toString.call(arr[i]) !== '[object Array]' ){
                console.log(arr[i])
            }
        }
    }
    filter(arr);
}
input(['Pesho',4, 4.21, { name : 'Valyo', age : 16 }, { type : 'fish', model : 'zlatna ribka' }, [1,2,3], 'Gosho', { name : 'Penka', height: 1.65}]);