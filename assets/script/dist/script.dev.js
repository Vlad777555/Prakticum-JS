"use strict";

var money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();
var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpensens: function chooseExpensens() {
    for (i = 0; i < 2; i++) {
      var a = prompt('Введите обязательную статью расходов в этом месяце', '');
      var b = prompt('Во сколько обойдется?', '');

      if (typeof a === 'string' && typeof a !== null && typeof b !== null && a !== '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        console.log('Bad result');
        i--;
      }
    }
  },
  detectDayBudget: function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'руб.');
  },
  chooseOptExpenses: function chooseOptExpenses() {
    for (i = 1; i < 4; i++) {
      var optExpenses = prompt('Статья необязательных расходов?');
      appData.optionalExpenses[i] = optExpenses;
    }
  },
  detectLevel: function detectLevel() {
    if (appData.moneyPerDay <= 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  chekcSavings: function chekcSavings() {
    if (appData.savings == true) {
      var save = +prompt('Какова сумма накоплений?'),
          percent = +prompt('Под какой процент?');
      appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseIncome: function chooseIncome() {
    var items = prompt('Что приносит дополнительный доход? (Перечислите через запятую)', '');

    if (typeof items === 'string' && typeof items !== null && items !== '' && typeof items !== 'number') {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то еще?', ''));
      appData.income.sort();
      appData.income.forEach(function (item, i) {
        alert('Способы доп. заработка: ' + (i + 1) + ': ' + item);
      });
    } else {
      console.log('Bad result');
    }
  }
};

for (var key in appData) {
  console.log('Наша консоль включает в себя данные: ' + key + ': ' + appData[key]);
}