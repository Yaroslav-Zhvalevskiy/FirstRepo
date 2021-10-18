// Синхронизировать 6 асинхронных функций в файле
// так что бы в консоль они выводились последовательно:
// start zero zero start first first ... start fifth fifth


const zero = new Promise((res) => {
    console.log('start zero');
    setTimeout(() => {
        console.log('zero');
        res();
    }, Math.random() * 5000);
})

function first(callback) {
    console.log('start first');
    setTimeout(() => {
        console.log('first');
        callback()
    }, Math.random() * 5000)
}

function second() {
    console.log('start second');
    return new Promise((res) => {
        setTimeout(() => {
            console.log('second');
            res();
        }, Math.random() * 5000);
    })
}

function third() {
    console.log('start third');
    return Promise.resolve('third')
        .then((text) => console.log(text))
}

function fourth(callback) {
    console.log('start fourth');
    setTimeout(() => {
        console.log('fourth');
        callback()
    }, Math.random() * 5000)
}

async function fifth() {
    console.log('start fifth');
    console.log('fifth');
}

zero.then(() => new Promise(resolve => first(resolve)))
    .then(() => second())
    .then(() => third())
    .then(() => new Promise(resolve => fourth(resolve)))
    .then(() => fifth())