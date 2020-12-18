/*

B. Метеозонд (1 балл)

Метеозонд отправляет данные с его смещениями по 
X и Y за последние N минут (N≥1). За минуту зонд может сместиться на +/-1 по каждой координате или остаться на месте.
Аппаратура зонда сломалась и отправляет все значения координат без знаков (’+’ или ’-’). Проверьте существование комбинации знаков, для которых зонд вернулся на свое начальное положение.
На вход данные передаются как массив из N смещений. Каждое смещение имеет формат:

[<diff_X>, <diff_Y>]
Ваша функция должна вернуть модифицированный массив смещений со знаками, для которых зонд вернулся в начальное положение, или null, если такой комбинации не существует.

Формат ввода
[  
  [1, 0],  
  [0, 1],  
  [1, 1]  
]
Формат вывода
[  
  [-1, 0],  
  [0, -1],  
  [1, 1]  
]

*/

function correctDiffs(diffs){

    let sumX = 0
    let sumY = 0

    try{
        sumX = diffs[0][0]
        sumY = diffs[0][1]
    }catch(e){
        return null
    }

    for(const diff of diffs.slice(1)){

        //Если текущая сумма не равна нуля И текущая координата не равная нулю, то ее надо сделать отрицательно
        if((sumX+diff[0]) !==0 && diff[0] !== 0){
            diff[0] = -diff[0]
        }

        if((sumY+diff[1])!==0 && diff[1] !== 0){
            diff[1] = -diff[1]
        }

        sumX += diff[0]
        sumY += diff[1]

    }

    if(sumX !== 0 || sumY !==0){
        return null
    }else{
        return diffs
    }
}

const diffs =[  
    [1, 0],  
    [0, 1],  
    [1, 1]  
]

console.log(correctDiffs(diffs))
console.log(correctDiffs([[1, 1], [1, 0]]))