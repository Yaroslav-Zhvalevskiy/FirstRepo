//task1
let arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
}

console.log(arr);



//task2
let arr = [1, 2, 3, 8, 5, 6, 7];
let max = arr[0];

for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(arr);
console.log(`The maximum element of the array is: ${max}`);



//task3
let n = 5;
let m = 10;
let fibonacciArray = [0, 1, 1];
let resultArray = [];

for (let i = 2; i < m; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
}

for (let i = n - 1; i < m; i++) {
    resultArray.push(fibonacciArray[i]);
}

console.log(fibonacciArray);
console.log(resultArray);



//task4
let number1 = 3487;
let number2 = 3794;
let counter1 = 0;
let counter2 = 0;

let array1 = Array.from(number1.toString(), Number)
let array2 = Array.from(number2.toString(), Number)

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            if (i === j) {
                counter1++;
                continue;
            }
            counter2++;
        }
    }
}

console.log(counter1, counter2);



//task5 сортировка массива по возрастанию/убыванию
let arr = [3, 2, 1, 4, 9, 8]

for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

console.log(arr);



//task6 удалить из массива все повторяющиеся элементы
let arr = [3, 2, 2, 4, 7, 8]

for (var i = 1, j = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
        arr[j++] = arr[i];
    }
}
arr.length = j;

console.log(arr);



//task 7 вырезать из текста все слова начинающиеся с определенной буквы обоих регистров и заменить их на bla-bla
let text = 'Hello world hi all';
let letter = 'h';

let arr = text.split(' ');

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == letter.toUpperCase() || arr[i][0] == letter.toLowerCase()) {
        arr[i] = 'bla-bla';
    }
}

text = arr.join(' ');
console.log(text);



//task8 найти сумму всех нечетных чисел в массиве
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        sum += arr[i];
    }
}

console.log(sum);



//task9 склеить массив стрингов в одну строку
let arr = ['Hello', 'World'];
console.log(arr);
let str = arr.join(' ');
console.log(str);



//task10 возвести число в степень

let n = 2;
let degree = 8;
let result = 1;

for (let i = 0; i < degree; i++) {
    result *= n;
}

console.log(n**degree);
console.log(result);