# Задачи на стжировку в Яндекс по направлению фронтенд.

## Предисловие

Выкладываю это в открытый доступ, так как вероятно этот материал может оказаться кому-то полезным.

### Важно:

Я не претендую на то, что это лучшие решения из всех возможных, писал быстро и сдал работу сильно раньше срока, одновременно занимаясь другими делами по учёбе 😀. По вышеописанным причинам, а также исходя из здравого смысла, для данной работы я **не заморачивался с правилами чистого кода**, которые для меня святые.

Данный код **не отражает** в полной мере мои навыки.

Однако, все решения **прекрасно прошли тесты** (в том числе и временные).

## Задача 1: Исследователи

[Мое решение](/question_1/solution.js)

Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. Список имеет следующий формат:
[  
  [<explorer1>, <toponym1>, <toponym2>, ...],  
  [<explorer2>, <toponym2>, <toponym3>, ...],  
  [<explorer3>, <toponym4>, <toponym1>, ...],  
  ...  
]
Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных исследователи.

## Задача 2: Метеозонд

[Мое решение](/question_2/solution.js)

Метеозонд отправляет данные с его смещениями по 
X и Y за последние N минут (N≥1). За минуту зонд может сместиться на +/-1 по каждой координате или остаться на месте.
Аппаратура зонда сломалась и отправляет все значения координат без знаков (’+’ или ’-’). Проверьте существование комбинации знаков, для которых зонд вернулся на свое начальное положение.
На вход данные передаются как массив из N смещений. Каждое смещение имеет формат:

[<diff_X>, <diff_Y>]
Ваша функция должна вернуть модифицированный массив смещений со знаками, для которых зонд вернулся в начальное положение, или null, если такой комбинации не существует.

## Задача 3: Секретное сообщение

[Мое решение](/question_3/solution.js)

На старой заброшенной базе геодезистов вы нашли код, который возвращает секретные послания, зашифрованные среди географических данных. Скрипт содержит несколько синтаксических ошибок и кажется работает очень медленно. Ваша задача - привести его в порядок.

### Формат ввода

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

### Формат вывода

Bond James Bond

## Задача 4: Кроссворд

[Мое решение](../blob/master/question_4/solution.css)

После рефакторинга сломались CSS-стили в кроссворде. Необходимо восстановить стили в соответствии с первоначальным дизайном, но сделать это нужно с минимальным количетсвом исправлений.