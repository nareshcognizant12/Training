// function print(message){
//     console.log(message);
// }
// function calc(a,b,callback){
//      let result=a+b;
//      callback(result);
// }

// calc(3,4,print);

// function action( a,b,total){
//     total(a,b);
// }
// function addition(x,y){
//     console.log(x+y);  
// }
 
// action(1,2,addition);

function greetings(name, myFunction){
console.log("This is the main function");
myFunction(name);
}
 
function sayName(name){
console.log('hiii'+' '+ name);
}

greetings("naresh",sayName);
 