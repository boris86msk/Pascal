let S = "3*10+2*7+16";
function kalculator(S){
    let flagSum = true, flagMult = false, flag = true;
    let Mult = 1, sum = 0, Chislo = 0, start;
    for (let i = 0; i < S.length+1; i++){
        if (S[i] >= 0 && S[i] <= 9){
            if (flag){
                start = i;
                flag = false;
           }
        }
        else{
            let finish = i;
            flag = true;
            Chislo = Number(S.slice(start, finish));
            if  (S[i] != '*' && !flagMult){
                if (flagSum)
                  sum = sum + Chislo;
                else
                  sum = sum - Chislo;
            }
            else if (S[i]=='*'){
                flagMult = true;
                Mult = Mult*Chislo;
            }
            else if (S[i] != '*' && flagMult){
                if (flagSum)
                  sum = sum+Mult*Chislo;
                else
                  sum = sum-Mult*Chislo;
                flagMult = false;
                Mult = 1;
            }
            if (S[i] == '+')
              flagSum = true;
            else if (S[i] == '-')
              flagSum = false;
        }
    }
    return sum;
}
console.log(kalculator(S), "resultat");

