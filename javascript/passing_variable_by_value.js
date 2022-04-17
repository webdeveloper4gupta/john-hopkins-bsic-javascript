//pass by value
var a=90;
var b=a;
console.log(a);//output 90
console.log(b);//output 90
//after updatingm
b=89;
console.log(a);//output 90
console.log(b);//output 89
//pass by refernce
var a={
    x:7
};
var b=a;
console.log(a);//output 7
console.log(b);//output 7
b.x=90;
console.log(a);//output 90
console.log(b);//output 90

