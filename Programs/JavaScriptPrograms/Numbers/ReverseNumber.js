console.log("Reverse Number");
/*

    In JavaScript, dividing a number by 10 returns a decimal value. 
    To remove the decimal portion and keep only the integer part, I use Math.floor().
     This helps remove the last digit during reverse-number logic.

*/

let num=12345;
let rev=0;

while(num!=0){
    rev=rev*10+num%10;
    num =
        Math.floor(num / 10);

}
console.log(rev)