let condition = true;

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (condition) {
//             resolve('success');
//         } else {
//             reject('failure');
//         }
//     }, 500);
// })

function getResult(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve(result);
            } else {
                reject('failure');
            }
        }, 500);
    })
}

// getResult(15, 2000)
// .then((x) => getResult(x * 3))
// .then((x3) => console.log(x3), (err) => console.log('oshibka'))
// .then(() => {
//     condition = true;
//     return getResult(10);
// })
// .then((x) => console.log(x))
// .catch((err) => console.log(err));
// .then(() => {
//     return getResult(20, 1000)
//         .then(() => {
//             return getResult(13, 500)
//                 .then(() => getResult(40, 400))
//         })
// })
// .then(() => getResult(13, 100))

async function foo() {
    let res = 0;
    res = res + (await getResult(15)).toString();
    let a = await getResult(20);
    res = res + a + await getResult(30);
    return res
}

foo().then((res) => console.log(parseInt(res)))