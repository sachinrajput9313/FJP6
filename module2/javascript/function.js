// non parameterized function
function sayhello(){
    console.log("lets say hello to world");
}
sayhello();

//parametrized function
function sum(num1,num2){
    console.log(num1+num2);
}
sum(3,4);

//IIFE
(function(){
    console.log("hello pepcoders");
})();

(function(num1,num2){
    console.log(num1/num2);
})(10,4);


//IFEA
(function(num1,num2){
    console.log(num1*num2);
})(3,4);