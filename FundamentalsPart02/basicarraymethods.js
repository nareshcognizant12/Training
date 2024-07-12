const arr=[];
console.log(arr);//[]
console.log(arr.length);//0
const len=arr.push("Kishore");//adds the element At last position and returns the length of the array
console.log(len);//1
console.log(arr);//["Kishore"]
console.log(arr.length);//1
arr.push('gopal');//adds the element at last
console.log(arr);//["Kishore","gopal"]
const unshifted=arr.unshift("Akhil");//adds the element at first position and returns the length of the array
console.log(unshifted);//3
console.log(arr);//["Akhil","Kishore","gopal"];
const popped=arr.pop();//removes and returns last element
console.log(popped);//gopal
console.log(arr);//[ 'Akhil', 'Kishore' ]
const shifted=arr.shift();//removes and returns first element of an array
console.log(shifted);//Akhil
console.log(arr);//["Kishore"]
