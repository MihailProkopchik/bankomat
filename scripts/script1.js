'use strict';

let summa; // 500, 200, 100, 50, 20, 10, 5 (1365)
let banknots = [];

let body = document.querySelector('body');

body.addEventListener('click', userPrompt);

function userPrompt() {
    summa = +prompt('Введите сумму денег кратную 5руб');
    while (summa > 0) {
        if (summa >= 500) {
            banknots.push(500);
            summa = summa - 500;
        } else if (summa >= 200) {
            banknots.push(200);
            summa = summa - 200;
        } else if (summa >= 100) {
            banknots.push(100);
            summa = summa - 100;
        } else if (summa >= 50) {
            banknots.push(50);
            summa = summa - 50;
        } else if (summa >= 20) {
            banknots.push(20);
            summa = summa - 20;
        } else if (summa >= 10) {
            banknots.push(10);
            summa = summa - 10;
        } else if (summa >= 5) {
            banknots.push(5);
            summa = summa - 5;
        }
    }
    document.write('<table>');
    for (let counter = 0; counter < banknots.length; counter++) {
        document.write(
            `<tr><td><img width="200" src='./images/${banknots[counter]}.jpg' alt='${banknots[counter]} руб'></td></tr>`
        );
    }

    document.write('</table>');
    console.log(banknots);
}
