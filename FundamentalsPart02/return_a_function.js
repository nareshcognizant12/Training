function add(a,b){
    const sum=a+b;
    function square(){
       console.log("inside square function");
       return sum*sum; 
    }
    return square;
}

const resultant=add(6,6);
console.log(resultant);