let str = "abracadabraamtrbacd";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
        result += "b";
    } else if (str[i] == "b") {
        result += "c";
    } else if (str[i] == "c") {
        result += "a";
    } else {
        result += str[i];
    }
}

console.log(str);
console.log(result);