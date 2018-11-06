function solve(input) {
    let tokens = input.toString().split('|');
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    for (let i = 0; i < tokens.length; i++) {
        let data = tokens[i].split(' ');
        let first = data[0];
        let second = data[1];
        switch (first) {
            case 'potion':
                let diff = 100-health;
                health += +second;
                if (health > 100) {
                    health = 100;
                    console.log(`You healed for ${diff} hp.`);
                } else{
                    console.log(`You healed for ${second} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += +second;
                console.log(`You found ${second} coins.`);
                break;
            default :
                health -= +second;
                if (health > 0) {
                    console.log(`You slayed ${first}.`)
                } else if (health <= 0) {
                    console.log(`You died! Killed by ${first}.`)
                    console.log(`Best room: ${bestRoom}`)
                    return;
                }
                break;
        }
        bestRoom++;
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);