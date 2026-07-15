console.log("COumt of digits")
let num=12345789;
let count=0;
while(num!=0){
    count=count+num%10;
    num=Math.floor(num/10);
}
console.log(count)

// Sum of digits
console.log("Sum of Digits");
let num = 1234567;
let sum=0;
while(num!=0){
    sum=sum+num%10;
    //console.log(count)
    num=Math.floor(num/10);
    //console.log(num)
}
console.log(sum)