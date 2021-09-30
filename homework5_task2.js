// Высчитать как много Пятниц 13-ого было с 01/01/2000 до сегодня.

let startDate = new Date("2000-01-01");
let currentDate = new Date();

function countTheNumberOfFridays13() {
    let count = 0;
    for (let day = startDate; day <= currentDate; day.setDate(day.getDate() + 1)) {
        if (day.getDay() == 5 && day.getDate() == 13) {
            count++;
        }
    }
    return count;
};
console.log(countTheNumberOfFridays13());