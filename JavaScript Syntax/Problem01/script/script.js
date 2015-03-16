function quadraticEquation(a,b,c){
    var discriminant = Math.pow(b,2)-(4*(a*c));
    var x1 = (-b -(Math.sqrt(discriminant)))/(2*a);
    var x2 = (-b +(Math.sqrt(discriminant)))/(2*a);
    if(discriminant< 0){
        console.log("No real roots")
    }
    else if(discriminant>0){
        console.log("X = "+" "+x1);
        console.log("X2 = "+" "+x2);
    }
    else{
        console.log("X = "+" "+x1);
    }
}
quadraticEquation(2,5,-3);
quadraticEquation(2,-4,2);
quadraticEquation(4,2,1);