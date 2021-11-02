let S = "5*(3+4)-7*9+3*(2+(2-7))";
function kalculator(S, z){
    let flagSum = true, flagMult = false, flag = true, flagStaples = false;
    let Mult = 1, controlSum = 0, Sum = 0, staple = 0, start;
    for (let i = z; i < S.length+1; i++){
        if(flagStaples && S[i] != ')'){
            console.log(i, 'пропускаем');
            continue;
        }
        else if(flagStaples && S[i] == ')'){
            staple++;
            if(staple == fun){
                flagStaples = false;
                console.log(i, 'пропускаем');
                continue;
            }
            continue;
        }
        if (S[i] >= 0 && S[i] <= 9){  //если встретили число
            if (flag){
                start = i;
                flag = false;
            }
        }
        else if(S[i-1] == ')'){  // тогда если что-то после скобки
            if(S[i] == '+' || S[i] == '-' || S[i] == '*' || S[i] == undefined){
                predOperator(); 
            }
            else if(S[i] == ')'){  // встречается только в рекурсии 2-го и более порядка
                Operator();
                return controlSum;
            }          
        }
        else if(S[i] == '+' || S[i] == '-' || S[i] == '*' || S[i] == undefined){  //тогда если операторы или конец выражения
            let finish = i;                                                       //(но не после скобки!!!)
            flag = true;
            Sum = Number(S.slice(start, finish));
            predOperator();       
        }
        else if(S[i] == '('){                       // если открывается скобка запускаем рекурсию
            Sum = kalculator(S, i+1);              // встречается только в основной функции (не рекурсивной)
            fun++;
            console.log('определен выход из рекурсии #',fun);
            console.log(Sum,'log ответ в скобках');
            flagStaples = true;
        }
        else if(S[i] == ')'){                   //первый раз встречается в рекурсивно вызванной функции
            let finish = i;                    // в основной пропускается
            flag = true;
            Sum = Number(S.slice(start, finish));
            Operator();
            return controlSum; 
        }
    }
    return controlSum;
    function Operator(){
        if(!flagMult){
            if(flagSum)
                controlSum += Sum;
            else
                controlSum -= Sum;
        }
        else{
            if (flagSum)
                controlSum += Mult*Sum;
            else
                controlSum -= Mult*Sum;
            flagMult = false;
            Mult = 1;
        }
    }
    function predOperator(){
        if(S[i]=='*'){                                                       
            Mult = Mult*Sum;
            flagMult = true;
        }
        else{
            Operator();
            if (S[i] == '+')
              flagSum = true;
            else
              flagSum = false;
        }
    }
}
let fun = 0;
let z = 0;
console.log(kalculator(S, z),'результат');