let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsaivings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsaivings-value')[0],
    data = document.getElementsByClassName('data'),

    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    ExpensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItemInput = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start(); 


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpensens: function() {
        for (i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = prompt('Во сколько обойдется?', '');
        
            if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null
                && a !== '' && a.length < 50) {
                console.log('done');    
                appData.expenses[a] = b;
            } else {
                console.log('Bad result');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);

        alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'руб.');
    },
    chooseOptExpenses: function() {
        for(i = 1; i < 4; i++) {
            let optExpenses = prompt('Статья необязательных расходов?');

            appData.optionalExpenses[i] = optExpenses;
        }
    },
    detectLevel: function() {
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
    chekcSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = (save/100/12*percent).toFixed(1);
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }        
    },
    chooseIncome: function() {
        let items = prompt('Что приносит дополнительный доход? (Перечислите через запятую)', '');
        if ((typeof(items)) === 'string' && (typeof(items)) !== null && items !== '' && (typeof(items)) !== 'number') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
            appData.income.forEach(function(item, i) {
                alert('Способы доп. заработка: ' + (i + 1) + ': ' + item);
            });
        } else {
            console.log('Bad result');
        }
    }
};

for (let key in appData) {
    console.log('Наша консоль включает в себя данные: ' + key + ': ' + appData[key]);
}
