const calcAverage=(a,b,c)=>(a+b+c)/3;
const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);
checkWinner(scoreDolphins,scoreKoalas);
function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>2*avgKoalas){
        console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas>2*avgDolphins){
         console.log(`Dolphins win(${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log("No team wins...")
    }
}