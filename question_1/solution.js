/*

A. Исследователи
Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. Список имеет следующий формат:
[  
  [<explorer1>, <toponym1>, <toponym2>, ...],  
  [<explorer2>, <toponym2>, <toponym3>, ...],  
  [<explorer3>, <toponym4>, <toponym1>, ...],  
  ...  
]
Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных исследователи.

Формат ввода
[  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]
Формат вывода
[  
    ["Everest", "Hillary", "Mallory"],  
    ["South Pole", "Hillary", "Mawson"],  
    ["Mont Blanc", "Mallory"],  
    ["Pillar Rock", "Mallory"],  
    ["New Hebrides", "Mawson"]  
]

*/

const explorers = [  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]

let places = []

for(const explorer of explorers){
    places = [...places, ...explorer.slice(1)]
}

places = [...new Set(places)]

let placeWithExplorers = []

for(const place of places){
    let foundedExplorers = []
    for(const explorer of explorers){
        if(explorer.slice(1).includes(place)){
            foundedExplorers.push(explorer[0])
        }
    }
    placeWithExplorers.push([place, ...foundedExplorers])
}

console.log(placeWithExplorers)
