let str="I am practicing Arraysssssss strings programs";
let words=str.split(" ");
let largestWord="";

for(let word of words){
    if(word.length>largestWord.length){
        largestWord=word;
    }
}
console.log(largestWord)