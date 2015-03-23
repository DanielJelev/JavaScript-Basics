function input(str){
    var obj=JSON.parse(str);
    for (var key in obj){
        var keys = obj[key]['score'];
        var percent = keys / 10 + keys;
        obj.sort(key['name']);
        if(percent>=100){
            obj[key]['score'] = percent;
            obj[key]['hasPassed'] = true
        }
        else{
            delete obj[key];
        }
    }
    obj.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
    console.log(obj)
}
input("[{\"name\":\"Пешо\",\"score\":91}" +
",{\"name\" : \"Лилия\",\"score\" : 290}" +
",{\"name\" : \"Алекс\", \"score\" : 343}" +
",{\"name\" : \"Габриела\", \"score\" : 400}" +
",{\"name\" : \"Жичка\", \"score\" : 70}]");
