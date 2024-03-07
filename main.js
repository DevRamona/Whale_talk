const input = 'Hi, How are you ?';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for(let i = 0; i <input.length; i++){
     console.log('i is ' + i);
    for(let a = 0; a < vowels.length; a++){
         console.log('a is ' + a); 
     if(input[i] === vowels[a]){
        console.log(input[i]);
        resultArray.push(input[i]);
     }
    }
    if(input[i] === 'e'){
        resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
        resultArray.push(input[i]);
    }
}
console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);