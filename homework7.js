// task1 - поменять массив в обратном порядке

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = arr[i];
//     arr[i] = temp;
// }
// console.log(arr);

function task1() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(arr.reverse());
};
task1();


// task2 - найти максимальное значение числа в массиве

// let arr = [1, 2, 3, 8, 5, 6, 7];
// let max = arr[0];
// for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(arr);
// console.log(`The maximum element of the array is: ${max}`);

function task2() {
    let arr = [1, 2, 3, 8, 5, 6, 7];
    console.log(arr.reduce((a, b) => a > b ? a : b));
};
task2();


// task3 - записать в массив ряд фибоначчи начиная с N члена с длиной массива M

// let n = 5;
// let m = 10;
// let fibonacciArray = [0, 1, 1];
// let resultArray = [];
// for (let i = 2; i < m; i++) {
//     fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
// }
// for (let i = n - 1; i < m; i++) {
//     resultArray.push(fibonacciArray[i]);
// }
// console.log(fibonacciArray);
// console.log(resultArray);

function task3() {
    let n = 5, m = 10, a = 0, b = 1;
    let fibonacciArray = [0, 1];
    new Array(m).fill().forEach((el, index) => {
        a = fibonacciArray[index];
        b = fibonacciArray[index + 1];
        fibonacciArray.push(a + b);
    })
    console.log(fibonacciArray.slice(n - 1, m));
};
task3();

// task4 - даны 2 четырёхзначных числа с неповторяющимися цифрами,
// надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению

// let number1 = 3487;
// let number2 = 3794;
// let counter1 = 0;
// let counter2 = 0;
// let array1 = Array.from(number1.toString(), Number)
// let array2 = Array.from(number2.toString(), Number)
// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] === array2[j]) {
//             if (i === j) {
//                 counter1++;
//                 continue;
//             }
//             counter2++;
//         }
//     }
// }
// console.log(counter1, counter2);

function task4() {
    let number1 = 3487;
    let number2 = 3794;
    let counter1 = 0;
    let counter2 = 0;
    let array1 = Array.from(number1.toString(), Number)
    let array2 = Array.from(number2.toString(), Number)
    array1.forEach((el, index) => {
        let el2Index = array2.findIndex(el2 => el === el2);
        if (el2Index === -1) {
            return;
        }
        else if (el2Index === index) {
            counter1++;
        }
        else {
            counter2++;
        }

    })
    console.log(counter1, counter2);
};
task4();


// task5 - сортировка массива по возрастанию/убыванию

// let arr = [3, 2, 1, 4, 9, 8]
// for (let j = arr.length - 1; j > 0; j--) {
//     for (let i = 0; i < j; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }
// }
// console.log(arr);

function task5() {
    let arr = [3, 2, 1, 4, 6, 5]
    console.log(arr.sort(function (a, b) { return a - b; }));
    console.log(arr.sort(function (a, b) { return b - a; }));
};
task5();


// task6 - удалить из массива все повторяющиеся элементы

// let arr = [3, 2, 2, 4, 7, 8]
// for (var i = 1, j = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//         arr[j++] = arr[i];
//     }
// }
// arr.length = j;
// console.log(arr);

function task6() {
    let arr = [1, 2, 2, 3, 2, 4, 2, 5];
    console.log(arr.filter(function (item, index) { return arr.indexOf(item) === index; }));
};
task6();