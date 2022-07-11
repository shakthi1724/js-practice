var a=90;
var b=90;
var c=90;
var d=(a+b+c)/3;
if(d>90 && d<=100){
    console.log("The given average is D grade");
}
else if(d>80 && d<=90){
    console.log("The given average is A grade");
}
else if(d>70 && d<=80){
    console.log("The given average is B grade");
}
else if(d>60 && d<=70){
    console.log("The given average is C grade");
}
else{
    console.log("The given average is F grade");
}