console.log("Finding the largest number");

let num ="23409876";
let largest =0;

while(num!=0){
    let digit=num%10;
    if(digit>largest){
        largest=digit;
    }
    num=Math.floor(num/10);
}
console.log(largest)