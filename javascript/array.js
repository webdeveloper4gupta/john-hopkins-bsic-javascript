var a=new Array();
a[0]=9;
a[1]=9.5;
a[2]=function(aman){
    console.log(aman);
}
a[3]={
    course:"html,js,css"
}
console.log(a);
console.log(a[1]);
a[2]("aman");
console.log(a[3].course);