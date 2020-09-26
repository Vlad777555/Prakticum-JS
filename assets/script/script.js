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
    savings: true
};

function chooseExpensens() {
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
}
chooseExpensens();

function chooseOptExpenses() {
    for(i = 1; i < 4; i++) {
        let optExpenses = prompt('Статья необязательных расходов?');

        appData.optionalExpenses[i] = optExpenses;
    }
}
chooseOptExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);

    alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'руб.');
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");   
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chekcSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = (save/100/12*percent).toFixed(1);
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

chekcSavings();