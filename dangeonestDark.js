function dangeonestDark(input) {
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split("|");
        let coins = 0;
        let health = 100;

        for (let i = 0; i < tokens.length; i++) {
            let [itemOrMonster, number] = tokens[i].split(' ');
            number = Number(number)
            if (itemOrMonster === 'potion') {
                if (health + number <= 100) {
                    health += number;
                    console.log(`You healed for ${number} hp.`)
                    console.log(`Current health: ${health} hp.`)
                }
                else {
                    health += number;
                    let unusedHealth = health - 100;
                    health = 100;
                    number -= unusedHealth;
                    console.log(`You healed for ${number} hp.`)
                    console.log(`Current health: ${health} hp.`)
                }
            }
            else if (itemOrMonster === 'chest') {
                coins += number;
                console.log(`You found ${number} coins.`)
            }
            else {
                if (health > number) {
                    health -= number;
                    console.log(`You slayed ${itemOrMonster}.`);
                }
                else {
                    health -= number;
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${i + 1}`);
                    break;
                }
            }


        }
        if (health > 0) {
            console.log(`You've made it!`)
            console.log(`Coins: ${coins}`)
            console.log(`Health: ${health}`)

        }
    }
}
