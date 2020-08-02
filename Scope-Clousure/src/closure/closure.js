const moneyBox = (coins) => {
    var savedCoins = 0;
    savedCoins += coins;
    console.log(`MoneyBox: ${savedCoins}`);
}
moneyBox(5);
moneyBox(10);

//Closure bien hecho.

const moneyBox = (coins) => {
    var savedCoins = 0;
    const countCoins = (coins) => {
        savedCoins += coins;
        console.log(`MoneyBox: ${savedCoins} Cop`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox (4);
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(5);