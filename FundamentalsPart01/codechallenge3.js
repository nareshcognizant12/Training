const dolphins_match1_score=96;
const dolphins_match2_score=108;
const dolphins_match3_score=89;
const koalas_match1_score=88;
const koalas_match2_score=91;
const koalas_match3_score=110;
const scoreDolphins=(dolphins_match1_score+dolphins_match2_score+dolphins_match3_score)/3;
const scoreKoalas=(koalas_match1_score+koalas_match2_score+koalas_match3_score)/3;
if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
    
}
else if(scoreDolphins<scoreKoalas){
    console.log("Koalas win the trophy");
    
}
else{
    console.log("Both win the trophy");
    
}