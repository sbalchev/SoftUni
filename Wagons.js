function solve(input) {

    let train = input
        .shift()
        .split(' ')
        .map(Number);

    let maxCpacity = Number(input.shift());

    for (let currentCommand of input) {
        let tokens = currentCommand.split(' ');

        if (tokens.length > 1) {
            train.push(+tokens[1]);
        } else {
            let passengers = Number(tokens[0]);
            for (let i = 0; i < train.length; i++) {
                let wagon = train[i];
                if (wagon + passengers <= maxCpacity) {
                    train[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}
