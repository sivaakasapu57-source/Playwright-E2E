let arr=[1,1,2,2,3,4,5,6,6,7,8,9,98];
let unique=[];

for(let i=0;i<arr.length;i++){
    if(!unique.includes(arr[i])){
        unique.push(arr[i]);
    }
}
console.log(unique)