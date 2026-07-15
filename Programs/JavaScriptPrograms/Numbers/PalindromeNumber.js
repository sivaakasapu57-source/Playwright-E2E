console.log("Palindrome Number");

let num=121;
let original=num;
let reverse=0;

while(num!=0){
    reverse=reverse*10+num%10;
    num=Math.floor(num/10);
}
if(original===reverse){
    console.log("it is a palindrome");
}else{
    console.log("it is not a palindrome");
}

