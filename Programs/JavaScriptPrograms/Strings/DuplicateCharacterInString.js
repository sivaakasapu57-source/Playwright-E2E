/*
    Duplicate Characters in a string
    given string " aabbccddfabcde" //a3b3c3d3e1f1
    print first non repeated character "SivaAkasapu" output = i


*/ 


console.log("Duplicate Characters in a string");
let str="Nandini Akasapu";
str=str.toLocaleLowerCase();
console.log(str)
str =str.replaceAll(" ","");
let obj={};

for(let ch of str){
    if(obj[ch]){
        obj[ch]++;
    }else{
        obj[ch]=1;
    }
}

for(let key in obj){
    if(obj[key]>1){
        console.log(key + " = "+ obj[key]);
    }
}

/*
First, I remove spaces using replaceAll(" ", "") and convert the string to lowercase using toLowerCase().
 Then I use a JavaScript object to store character frequencies. 
 Finally, I iterate through the object and print characters whose count is greater than 1.

*/

const str = "aabbccddaabbccddabcdk"; //a5b5c5d5k1

const obj = {};

for (const ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
}

let result = "";

for (const key in obj) {
    if(obj[key]>1){// removes 'k' count
    result = result+key + obj[key];
    }
}

console.log(result);

/////////////////////////
const str = "aabbccddaabbccddabcdkp";

const obj = {};

for (const ch of str) {
    if(obj[ch]){
        obj[ch]++;
    }else{
        obj[ch]=1;
    }
}

let result = "";

for (const key in obj) {
    
    result = result+key + obj[key];
   
}

console.log(result);