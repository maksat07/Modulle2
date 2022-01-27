//#5 Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. 
// Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а 
// остальные цифры карты должны заменены на *.
//   Пример: "Номер вашей карты: **********1245"

let numCard = prompt('Your card number?'),
    vis = numCard.slice(-4),
    countNum = '';

for(let i = (numCard.length)-4; i>0; i--){
    countNum += '*';
}

document.write("Your card number: " + countNum+vis);