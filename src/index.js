// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exchange = {};
    let coins = {"H":50,"Q":25,"D":10,"N":5,"P":1}
    let errorObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    if (currency <= 0) {
        return exchange;
    }
    if (currency > 10000) {
        return errorObj;
    }
    for (let coin in coins) {
        if (currency == 0) {
            break
        }
        coinsCount = Math.floor(currency / coins[coin]);
        currency = currency % coins[coin];
        if (coinsCount !== 0) {
            exchange[coin] = coinsCount
        }
    }

    return exchange;
}
