const jonasArray=[
    'williamson',
    'kane',
    2024-1985,
    'cricketer',
    ['SRH','GT','NZ']
];
//The difference between arrays and objects is the order of the elements is important in arrays inorder to access elements whereas in objects its not important
//syntactical difference is we use []-->arrays and {}-->objects
const kane={
  firstname:'williamson',
  lastname:'kane',
  age:2024-1985,
  profession:'cricketer',
  batsman:true,
  playedfor: ['SRH','GT','NZ'],
  printDetails:function(){
    return `${this.firstname} is a ${this.age} years old ${this.profession} ,he is ${this.batsman?'a':'not a'} batsman.`;
  }
};

console.log(jonasArray[0]);
console.log(jonasArray[1]);

console.log(kane.firstname);
console.log(kane['firstname']);
console.log(kane.lastname);
console.log(kane);

const interestedIn=prompt("what do you want to know about jonas? choose between firstname,lastname,age,profession,playedfor");
console.log(interestedIn);
console.log(kane[interestedIn]);
if(kane[interestedIn]){
    console.log(kane[interestedIn]);
}else{
    console.log("wrong request!choose between firstname,lastname,age,profession,playedfor");
}

console.log(kane.playedfor[2]);
console.log(kane.batsman=false);
console.log(kane.printDetails());
