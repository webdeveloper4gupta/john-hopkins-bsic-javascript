var x = "aman"
x = x + "  mahajan"
console.log(x);

console.log(3 + 5);
console.log(3 - 5 * 6)
console.log(undefined / 5);// gives the nan that means not a number

function f(a) {
    console.log(a / 3);
}
f();
//equality
var a = 4, b = 3
if (a == b) {
    console.log("both a and b are equal")
}
else {
    console.log("sorry this is not equal")
}
//strict equivalent
var a=4,b=3;
if (a===b){
    console.log("equal");

}
else{
    console.log("not equal")
}
// all the statements are false
 if(false||null||NaN||undefined||0||""){
     console.log('this line never run')
 }
 else{
    console.log("false line never executes")
 }
 //all the true linesw
 if(true&&"hello"&&1&&-1&&'false'){
     console.log("all true lines")
 }
 // for loop
 var i,sum=0;
 for(i=0;i<5;i++){
     sum=sum+i;
 }
 console.log(sum)