function solve(symbol) {
    let isUppercase =
        symbol.toUpperCase() === symbol;

    console.log(isUppercase ? `upper-case`:`lower-case`);


}

solve('T');
