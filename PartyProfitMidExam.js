function partyProfit(input) {
    let partySize = Number(input[0]);
    let partyDays = Number(input[1]);
    let earnedCoins = 0;
    let spentCoins = 0;


    for (let i = 1; i <= partyDays; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            if (i % 2 === 0) {
                partySize += 3;
                spentCoins += partySize * 2;
            }
            else {
                partySize += 5;
                spentCoins += partySize * 2;
            }
        }
        else if (i % 10 === 0) {
            partySize -= 2;
        }
        if (i % 5 === 0) {
            earnedCoins += partySize * 20;
        }
        if (i % 3 === 0) {
            spentCoins += 3 * partySize;
        }
        if (i % 1 === 0) {
            earnedCoins += 50;
            spentCoins += partySize * 2;
        }
    }
    let totalCoins = earnedCoins - spentCoins
    let coinsPerCompanion = Math.floor(totalCoins / partySize)
    console.log(`${partySize} companions received ${coinsPerCompanion} coins each.`);
}

