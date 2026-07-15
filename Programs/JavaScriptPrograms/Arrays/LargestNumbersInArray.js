const arr=[1,2,3,4,5,6,7,8,9];
let largestNum=-Infinity;
let secondLargestNum=-Infinity;
let thirdLargestNum=-Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largestNum){
        thirdLargestNum=secondLargestNum;
        secondLargestNum=largestNum;
        largestNum=arr[i];
    }else if(arr[i]>secondLargestNum && arr[i]!==largestNum){
        secondLargestNum=arr[i];

    }else if(arr[i]>thirdLargestNum &&arr[i]!=secondLargestNum && arr[i]!=largestNum){
        thirdLargestNum=arr[i];
    }
}
console.log("largestNum "+largestNum);
console.log("secondLargestNum "+secondLargestNum);
console.log("thirdLargestNum "+thirdLargestNum);