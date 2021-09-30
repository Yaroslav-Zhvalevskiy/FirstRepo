// Напишите код который будет разбивать число на заданное количество рандомных чисел
// сумма которых будет равна изначальному числу. Пример: разбить 15 на 4 части (сумма четырех чисел будет равна 15) (4,6,5)
// а) изначальное число целое, числа разбивки - целые (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

function splitIntoIntegers(number, numberOfPieces) {
    const resultArrayA = [];
    let sumOfPieces = 0;
    for (let i = 0; i < numberOfPieces; i++) {
        if (i === numberOfPieces - 1) {
            resultArrayA.push(number - sumOfPieces);
            break;
        }
        let piece = Math.round(Math.random() * (number - sumOfPieces));
        resultArrayA.push(piece);
        sumOfPieces += piece;
    }
    return resultArrayA;
};

function splitIntoDecimals(number, numberOfPieces) {
    const resultArrayB = [];
    let sumOfPieces = 0;
    for (let i = 0; i < numberOfPieces; i++) {
        if (i == numberOfPieces - 1) {
            resultArrayB.push(+(number - sumOfPieces).toFixed(2));
            break;
        }
        let piece = +(Math.random() * (number - sumOfPieces)).toFixed(2);
        resultArrayB.push(piece);
        sumOfPieces += piece;
    }
    return resultArrayB;
};

console.log(splitIntoIntegers(15, 4));
console.log(splitIntoDecimals(15, 4));










