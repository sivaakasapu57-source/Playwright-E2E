const arr=['im','siva','automation','playwright','practice'];

let maxOvelWord="";
let maxOvelCount=0;

for(let word of arr){
    let count=0;
    for(let ch of word){
        if('aeiou'.includes(ch)){
            count++;
        }
    }
    if(count>maxOvelCount){
        maxOvelCount=count;
        maxOvelWord=word;
    }
}
console.log(" Max ovel count of word is "+maxOvelWord + " with "+maxOvelCount)