const calcTip=function (bill){
    return bill>=50&&bill<=300?0.15*bill:0.2*bill;
    
}
//const calcTip=(bill)=>bill>=50&&bill<=300?0.15*bill:0.2*bill; arrow function
const bills=new Array(125,555,44);
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
const tips=[];
const totals=[];
for(let i=0;i<bills.length;i++){
    tips[i]=calcTip(bills[i]);
}
for(let i=0;i<bills.length;i++){
    totals[i]=bills[i]+tips[i];
}
console.log(tips);
console.log(totals);
