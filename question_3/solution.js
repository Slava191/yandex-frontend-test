/*

C. Секретное сообщение
На старой заброшенной базе геодезистов вы нашли код, который возвращает секретные послания, зашифрованные среди географических данных. Скрипт содержит несколько синтаксических ошибок и кажется работает очень медленно. Ваша задача - привести его в порядок.
Формат ввода
const data = [  
    {  
        geometry: [10, 20],  
        text: ’James’  
    },  
    {  
        geometry: [20, 40],  
        text: ’Bond’  
    },  
    {  
        geometry: [5, 40],  
        text: ’Bond’  
    }  
];  
const dictionary = [’James’, ’Bond’];
Формат вывода
Bond James Bond

*/

function secMes(inputData, inputDictionary) {

    const havingTexts = [...new Set([...inputData.map(d => d.text)])]

    for(const text of havingTexts){
        if(!inputDictionary.includes(text)){
            return 'Unreadable message'
        }
    }

    const sortedList = inputData.sort((a, b) => a.geometry[0]-b.geometry[0])

    const rtnArr = []

    for(const { text } of sortedList){
        rtnArr.push(text)
    }

    return rtnArr.join(' ')
}


const data = [  
    {  
        geometry: [10, 20],  
        text: 'James'  
    },  
    {  
        geometry: [20, 40],  
        text: 'Bond'  
    },  
    {  
        geometry: [5, 40],  
        text: 'Bond'  
    }  
];  

const dictionary = ['James', 'Bond'];

console.log(secMes(data, dictionary))