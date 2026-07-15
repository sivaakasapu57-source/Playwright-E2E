let arr=[23,34,42,12,34,55,78,99];
let largestNum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largestNum){
        largestNum=arr[i];
    }
}
console.log(largestNum)