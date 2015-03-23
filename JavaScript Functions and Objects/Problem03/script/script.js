function findYoungestPerson(){
    var people = [
        { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
        { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
        { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
        { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];
    people = people.sort(function(a,b){
        return a.age- b.age
    });
    for(key in people){
        var firstName,lastname,hasPhone;
        hasPhone = people[key]['hasSmartphone'];
        if(hasPhone){
            firstName = people[key]['firstname'];
            lastname = people[key]['lastname'];
            console.log("The youngest person is"+" "+firstName+" "+lastname);
            break;
        }
    }
}
findYoungestPerson();
