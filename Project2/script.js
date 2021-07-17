/*assigns a name variable when users enters their name at prompt */
var name = prompt("Tell me your name.");


/*assigns a number variable when user enters at prompt */
var num1 = prompt("Give me your number.");

/*assigns a number variable when user enters at prompt */
var num2 = prompt("Give me another number");


function fname() {
    displayNum.innerHTML = "You are going to have a wonderful day," + name + ".";
}



function sum() {
    /*assigns a sum variable wof two numbers at prompt */
    var newNum = Number(num1) + Number(num2);

    //displays result to t text plus the newNum variable for user
    displayNum.innerHTML = "By the way, the sum of your numbers is" + newNum +".";
}