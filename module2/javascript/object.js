// let obj={};
// let mydetails={
//     Name:"Sachin Rajput",
//     rollno:48,
//     phoneno:9667445344
// };
// console.log(mydetails);

let capAmerica={
    Name:'Steve',
    Age:3232,
    friends:['abc','def','ghi','jkl'],
    address:{
        city:'ghaziabad',
        state:'up'
    },
    sayHi:function(){
        console.log("cap america says hii")
    }
}
console.log("object before update",capAmerica);
capAmerica.movies=['End game','Civil War','Avengers'];
console.log("object after update",capAmerica);
capAmerica.movies[1]='Hum apke hai kaun';
console.log(capAmerica);

//deleting the key
delete capAmerica.movies;
console.log(capAmerica);

//accessing the objects
console.log(capAmerica['Age']);
