for (let i = 1; i <= 100; i++) {
    console.log(i);
};
for (let j = 100; j >= 0; j--) {
    console.log(j);
};
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[4]);
console.log(arr[3]);
console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);
arr = [2, 5, 9, 15, 1, 4];
let a = arr.length;
for (let k = 0; k < a; k++) {
    if (arr[k] > 3 && arr[k] < 10) {
        console.log(arr[k]);
    }
};
let total = 1;
for (i = 0; i < a; i++) {
    total *= arr[i];
};
console.log(total);
let b = [1, 2, 3];
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
let total2 = 0;
for (i = 0; i < b.length; i++) {
    total2 += b[i];
};
console.log(total2);
let abc = [0, 1, 2, 3];
console.log(abc[abc.length - 1]);
arr = [2, 5, 9, 3, 1, 4];
total3 = 1
for (i = 0; i < arr.length; i++) {
    total3 *= arr[i];
};
console.log(total3);
let cda = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
console.log(cda[1]);
console.log(cda[2]);
console.log(cda[3]);
console.log(cda[4]);
console.log(cda[5]);
console.log(cda[6]);
console.log(cda[7]);
let obj = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
for (i = 1; i <= 5; i++) {
    if (i % 2 != 0) {
        console.log(obj[i]);
    };
};
let bit = {1: 'Январь', 2: "Февраль", 3: "Март", 4: "Апрель", 5: "Май", 6: "Июнь", 7: "Июль", 8: "Август", 9: "Сентябрь", 10: "Октябрь", 11: "Ноябрь", 12: "Декабрь"}
console.log(bit);