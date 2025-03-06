var x = 6;
if (x % 2 == 0)
    console.log("x  is Even");
else
    console.log("x is Odd");
///////////////////////
var Products = [50, 20, 60, 30];
for (var i = 0; i < 4; i++) {
    if (Products[i] > 30)
        console.log(Products[i]);
}
////////////////////
var Numbers = [50, 20, 60, 30];
var sum = 0;
for (var i = 0; i < 4; i++) {
    sum = sum + Numbers[i];
}
console.log(sum);
