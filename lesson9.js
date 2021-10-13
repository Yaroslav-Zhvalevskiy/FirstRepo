console.log('first');
setTimeout(() => console.log('second'), 1000);
setTimeout(() => console.log('third'), 0);
console.log('fourth');



function foo(timeout, callback) {
    setTimeout(() => {
        console.log('foo func');
        callback();
    }, timeout)
}

function bar(timeout, text, callback) {
    setTimeout(() => {
        console.log('bar func');
        callback(text);
    }, timeout)
}

foo(3000, () => {
    bar(5000, 'hello bar param clbc', (text) => {
        console.log(text);
    })
})



// нужен код который выведет "начало работы" и дата,
// через 4 секунды выведет "Обед" и дату с точностью до секунды
// через 5 секунд выведет "конец работы" и дату с точностью до секунды

function workingDay() {
    console.log('Start of work: ', new Date());
    setTimeout(() => {
        console.log('Dinner: ', new Date());
        setTimeout(() => console.log('End of work: ', new Date()), 5000);
    }, 4000)
}

workingDay();

function start(callback) {
    console.log('Start of work: ', new Date());
    callback();
}
function dinner(callback) {
    setTimeout(() => {
        console.log('Dinner: ', new Date());
        callback();
    }, 4000)
}
function end() {
    setTimeout(() => {
        console.log('End of work: ', new Date());
    }, 5000)
}

start(() => {
    setTimeout(() => {
        dinner(() => {
            end();
        })
    })
})



// запустить счетчик который будет увеличиваться на 1 каждую секунду и писать в консоль

function counter() {
    let i = 0;
    console.log(i);
    setInterval(() => console.log(++i), 1000);
}

counter();



// написать код который напишет Hello ,
// через рандомный промежуток времени прибавит World и напишет Hello World
// через рандомный промежуток времени прибавит ", I'm и напишет Hello World, I'm
// через рандомный промежуток времени прибавит  here и напишет Hello World, I'm here
// текст передавать как параметер колбэка, максимальное время ожидания 5 сек

function writeText(text, add, callback) {
    text += add;
    console.log(text);
    setTimeout(() => {
        callback(text)
    }, Math.random() * 5000)
}

writeText('Hello ', '', (text) => {
    writeText(text, 'World', (text) => {
        writeText(text, `, I'm`, (text) => {
            writeText(text, ' here', () => {
            });
        })
    })
})