console.log("Palindrome");

const str="12321";
let palindrome="";

for(let i=str.length-1;i>=0;i--){
    palindrome=palindrome+str.charAt(i);
}

if(str===palindrome){
    console.log("it is a Plaindrome  " +palindrome);
}else{
    console.log("not a palindrome");
}