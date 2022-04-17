var a1 = "global declare";
console.log(a1)

function a() {
    var a1 = 'mahajan sahab'
    console.log("a member:" + a1)
    b();

}
function b() {
    console.log("b member:" + a1)
}
a();