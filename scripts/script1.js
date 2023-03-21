'use strict';

let summa; // 500, 200, 100, 50, 20, 10, 5 (1365)

// Внедрить объект сейфа в данную программу.
// Перепеисать логику программы для выдачи денег уже из сейфа.

let banknots = [];

let body = document.querySelector('body');

let safe = {
    cas5: 0,
    cas10: 100,
    cas50: 100,
    cas100: 0,
    fakeNote: 'fake',
    pullOut(cassete) {
        if (cassete) {
            this[cassete] = this[cassete] - 1;
            return true;
        } else {
            return false;
        }
    },
};

body.addEventListener('click', userPrompt);

function userPrompt() {
    summa = +prompt('Введите сумму денег кратную 5руб');
    while (summa > 0) {
        if (summa >= 100) {
            if (safe.cas100 > 0) {
                if (safe.pullOut('cas100')) {
                    banknots.push(100);
                    summa = summa - 100;
                }
            } else {
                return console.log('Нет купюры 100р');
            }
        } else if (summa >= 50) {
            if (safe.cas50 > 0) {
                if (safe.pullOut('cas50')) {
                    banknots.push(50);
                    summa = summa - 50;
                }
            } else {
                return console.log('Нет купюры 50р');
            }
        } else if (summa >= 10) {
            if (safe.cas10 > 0) {
                if (safe.pullOut('cas10')) {
                    banknots.push(10);
                    summa = summa - 10;
                }
            } else {
                return console.log('Нет купюры 10р');
            }
        } else if (summa >= 5) {
            if (safe.cas5 > 0) {
                if (safe.pullOut('cas5') > 0) {
                    banknots.push(5);
                    summa = summa - 5;
                }
            } else {
                return console.log('Нет купюры 5р');
            }
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
