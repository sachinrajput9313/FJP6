console.log("Hello world!")
// printing pepcoders
console.log("pepcoders");
//declaring variables
let num=45;
console.log(num)
let char='a';
console.log(char)
let str="this is spartaa!";
console.log(str);
let bool=true;
console.log(bool);

// using for loop in javascript
for(let i=1;i<=5;i++){
    console.log(i);
}

//Is prime question
let a=322;
for(let i=2;i*i<=a;i++){
    if(a%i==0){
        console.log("not prime");
        break;
    }
    else{
        console.log("prime");
        break;
    }
}
