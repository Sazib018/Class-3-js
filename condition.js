// Conditionals Task:

function total(money) {
    if (money > 80000) {
        return "Buy a Mac.";
    } else if (money > 60000) {
        return "Buy a gaming laptop.";
    } else if (money > 40000) {
        return "Buy a Lenovo Yoga.";
    } else if (money > 20000) {
        return "Buy a used laptop.";
    } else {
        return "Use your mobile phone.";
    }
}


var myMoney = 20000;
var bye = total(myMoney);
console.log(bye);
