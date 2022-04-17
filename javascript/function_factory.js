function makemultiplier(m){
    function x1(a){
        return m*a;
    }
return x1;//returning objects
}
var y=makemultiplier(20);
console.log(y(10));
function d(x2,operation){//giving function as argument
    return operation(x2);
}
var u=d(2,y)
console.log(u);