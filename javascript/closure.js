function aman(name){
    return(
        function(b){
            return b*name;
        }
    );
}
var a=aman(5);
console.log(a(2));