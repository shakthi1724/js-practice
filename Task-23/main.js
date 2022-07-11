var a = 1534;
var r = 0;
var l = 0;
temp = a;
while (a > 0) {
    l = a % 10;
    r = r + l * l * l * l;
    a = (a - l) / 10;
}
if (temp == r) {
    console.log("It is a armstrong number");
}
else {
    console.log("It is not a armstrong number");
}
