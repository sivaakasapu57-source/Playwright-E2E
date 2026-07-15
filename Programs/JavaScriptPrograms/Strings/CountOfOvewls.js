let str ="Siva Automation practice";
let obj={};
str=str.replaceAll(" ","").toLocaleLowerCase();
for(let ch of str){
    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
        if(obj[ch]){
            obj[ch]++;
        }else{
            obj[ch]=1;
        }
    }
}
console.log(obj)

////////////////////////////
/*
.includes() checks whether a string or array contains a specified value and returns true or false.
*/

let str1 ="Nandini Akasapu Automation";
let obj1 = {};

str1 = str1.replaceAll(" ","").toLowerCase();

for(let ch of str1){

    if("aeiou".includes(ch)){

        if(obj1[ch]){
            obj1[ch]++;
        }else{
            obj1[ch] = 1;
        }
    }
}

console.log(obj1);