function addDifferentTypes() {
    //string+boolean
    console.log('99' + true); // '99true'
    console.log('99' + false); // '99false'

    //string+number
    console.log('99' + 1); // '991'
    console.log('1' + 1 + 1); // '111'
    console.log(1 + 1 + '1'); // '21'

    //number+boolean
    console.log(99 + true); // 100
    console.log(99 + false); // 99
}

function multiplyDifferentTypes() {
    //string * boolean
    console.log('99' * !0); // 99
    console.log('99' * !1); // 0

    //string * number
    console.log('99' * 1); // 99

    //number * boolean
    console.log(99 * !0); // 99
    console.log(99 * !1); // 0
}

function divideDifferentTypes() {
    //string / boolean
    console.log('99' / !!1); // 99
    console.log('99' / !!0); // Infinity

    //string / number
    console.log('99' / 1); // 99

    //number / boolean
    console.log(99 / !!"Hi"); // 99
    console.log(99 / !!''); // Infinity
}

function explicitlyConvert() {
    //number
    console.log(Number('99')); // 99
    console.log(+('99')); // 99 - implicit conversion with the unary operator +
    console.log(Number(null)); // 0
    console.log(Number(undefined)); // NaN
    console.log(Number(true)); // 1
    console.log(Number(false)); // 0

    //string
    console.log(String(99)); // '99'
    console.log(String(true)); // 'true'
    console.log(String(false)); // 'false'
    console.log(String(null)); // 'null'
    console.log(String(undefined)); // 'undefined'

    //boolean
    console.log(Boolean("Hello!")); // true
    console.log(Boolean(' ')); // true
    console.log(Boolean('')); // false
    console.log(Boolean(1)); // true
    console.log(Boolean(0)); // false
    console.log(Boolean('0')); // true
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
}

addDifferentTypes();
multiplyDifferentTypes();
divideDifferentTypes();
explicitlyConvert();
